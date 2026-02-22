/**
 * NEXUS AI — Persona API Worker
 * Cloudflare Worker backed by Cloudflare D1 (SQLite).
 *
 * Endpoints:
 *   GET /api/health                            — liveness check
 *   GET /api/personas                          — all 195 agent personas
 *   GET /api/personas/:agent_number            — single agent by integer number
 *   GET /api/personas/department/:dept_number  — all agents in a department (1-20)
 *
 * CORS:
 *   Allows the GitHub Pages origin and localhost for local development.
 *   All other origins receive the GitHub Pages origin in the ACAO header
 *   (effectively blocked from using the response in a browser context).
 *
 * Caching:
 *   Successful 200 responses carry Cache-Control: public, max-age=3600
 *   so Cloudflare's edge caches them for 1 hour between D1 reads.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Env {
  DB: D1Database;
}

interface PersonaRow {
  agent_number: number;
  agent_code: string;
  nickname: string;
  age: number | null;
  about_me: string;
  what_i_bring: string;
  strengths: string;      // stored as JSON string, parsed on the way out
  weaknesses: string;     // stored as JSON string, parsed on the way out
  working_with_me: string;
  department_name: string;
  department_number: number;
  tier_number: number;
  tier_label: string;
  updated_at: string;
}

interface Persona {
  agent_number: number;
  agent_code: string;
  nickname: string;
  age: number | null;
  about_me: string;
  what_i_bring: string;
  strengths: string[];
  weaknesses: string[];
  working_with_me: string;
  department_name: string;
  department_number: number;
  tier_number: number;
  tier_label: string;
  updated_at: string;
}

// ---------------------------------------------------------------------------
// CORS
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS: ReadonlySet<string> = new Set([
  "https://thekinghippopotamus.github.io",
  "http://localhost:4321",  // Astro dev server
  "http://localhost:3000",  // generic local dev
]);

const PRIMARY_ORIGIN = "https://thekinghippopotamus.github.io";

function corsHeaders(requestOrigin: string | null): HeadersInit {
  // Reflect the request origin only when it is in the allow-list.
  // Otherwise fall back to the production origin (browser will block the response
  // for unknown origins, which is the desired security behaviour).
  const origin =
    requestOrigin && ALLOWED_ORIGINS.has(requestOrigin)
      ? requestOrigin
      : PRIMARY_ORIGIN;

  return {
    "Access-Control-Allow-Origin":  origin,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age":       "86400",
    "Vary":                         "Origin",
  };
}

// ---------------------------------------------------------------------------
// Response helpers
// ---------------------------------------------------------------------------

const CACHE_TTL = 3600; // 1 hour

function jsonResponse(
  data: unknown,
  status: number,
  requestOrigin: string | null,
  cacheable: boolean
): Response {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...corsHeaders(requestOrigin),
  };

  if (cacheable && status === 200) {
    headers["Cache-Control"] =
      `public, max-age=${CACHE_TTL}, s-maxage=${CACHE_TTL}`;
  } else {
    headers["Cache-Control"] = "no-store";
  }

  return new Response(JSON.stringify(data), { status, headers });
}

// ---------------------------------------------------------------------------
// Data transformation
// ---------------------------------------------------------------------------

function deserializeRow(row: PersonaRow): Persona {
  let strengths: string[] = [];
  let weaknesses: string[] = [];

  try { strengths  = JSON.parse(row.strengths  || "[]"); } catch { strengths  = []; }
  try { weaknesses = JSON.parse(row.weaknesses || "[]"); } catch { weaknesses = []; }

  return {
    agent_number:      row.agent_number,
    agent_code:        row.agent_code,
    nickname:          row.nickname,
    age:               row.age,
    about_me:          row.about_me,
    what_i_bring:      row.what_i_bring,
    strengths,
    weaknesses,
    working_with_me:   row.working_with_me,
    department_name:   row.department_name,
    department_number: row.department_number,
    tier_number:       row.tier_number,
    tier_label:        row.tier_label,
    updated_at:        row.updated_at,
  };
}

// ---------------------------------------------------------------------------
// Route handlers
// ---------------------------------------------------------------------------

async function handleGetAll(
  db: D1Database,
  origin: string | null
): Promise<Response> {
  const { results } = await db
    .prepare("SELECT * FROM agent_personas ORDER BY agent_number ASC")
    .all<PersonaRow>();

  const personas = results.map(deserializeRow);

  return jsonResponse({ count: personas.length, personas }, 200, origin, true);
}

async function handleGetOne(
  db: D1Database,
  agentNumber: number,
  origin: string | null
): Promise<Response> {
  if (!Number.isInteger(agentNumber) || agentNumber < 1 || agentNumber > 999) {
    return jsonResponse(
      { error: "agent_number must be an integer between 1 and 999" },
      400,
      origin,
      false
    );
  }

  const row = await db
    .prepare("SELECT * FROM agent_personas WHERE agent_number = ?")
    .bind(agentNumber)
    .first<PersonaRow>();

  if (!row) {
    return jsonResponse(
      { error: `Agent ${agentNumber} not found` },
      404,
      origin,
      false
    );
  }

  return jsonResponse({ persona: deserializeRow(row) }, 200, origin, true);
}

async function handleGetByDepartment(
  db: D1Database,
  deptNumber: number,
  origin: string | null
): Promise<Response> {
  if (!Number.isInteger(deptNumber) || deptNumber < 1 || deptNumber > 20) {
    return jsonResponse(
      { error: "department number must be an integer between 1 and 20" },
      400,
      origin,
      false
    );
  }

  const { results } = await db
    .prepare(
      `SELECT * FROM agent_personas
       WHERE department_number = ?
       ORDER BY agent_number ASC`
    )
    .bind(deptNumber)
    .all<PersonaRow>();

  const personas = results.map(deserializeRow);

  return jsonResponse(
    { department_number: deptNumber, count: personas.length, personas },
    200,
    origin,
    true
  );
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url    = new URL(request.url);
    const origin = request.headers.get("Origin");

    // CORS preflight — must respond before method check
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin),
      });
    }

    // This API is read-only
    if (request.method !== "GET") {
      return jsonResponse({ error: "Method not allowed" }, 405, origin, false);
    }

    // Normalise path: strip trailing slash, lowercase
    const path = url.pathname.replace(/\/+$/, "");

    try {
      // GET /api/health
      if (path === "/api/health") {
        return jsonResponse(
          { status: "ok", timestamp: new Date().toISOString() },
          200,
          origin,
          false  // health checks should not be cached
        );
      }

      // GET /api/personas
      if (path === "/api/personas") {
        return await handleGetAll(env.DB, origin);
      }

      // GET /api/personas/department/:dept_number
      const deptMatch = path.match(/^\/api\/personas\/department\/(\d+)$/);
      if (deptMatch) {
        return await handleGetByDepartment(
          env.DB,
          parseInt(deptMatch[1], 10),
          origin
        );
      }

      // GET /api/personas/:agent_number
      const agentMatch = path.match(/^\/api\/personas\/(\d+)$/);
      if (agentMatch) {
        return await handleGetOne(
          env.DB,
          parseInt(agentMatch[1], 10),
          origin
        );
      }

      return jsonResponse({ error: "Not found" }, 404, origin, false);

    } catch (err) {
      // Log to Cloudflare Workers runtime log (visible in wrangler tail)
      console.error("[persona-api] Unhandled error:", err);
      return jsonResponse(
        { error: "Internal server error" },
        500,
        origin,
        false
      );
    }
  },
} satisfies ExportedHandler<Env>;
