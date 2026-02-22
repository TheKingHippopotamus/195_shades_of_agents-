/**
 * NEXUS AI — Contact Submission Receiver
 * Cloudflare Worker — receives FormSubmit.co webhooks and commits
 * each submission to application/production/nexus-platform-e2e/nexus-website/src/data/submissions.json in GitHub.
 *
 * Environment variables required (set in Cloudflare dashboard):
 *   GITHUB_PAT  — Fine-grained PAT with Contents:write on the repo
 */

const REPO   = "TheKingHippopotamus/195_shades_of_agents-";
const FILE   = "application/production/nexus-platform-e2e/nexus-website/src/data/submissions.json";
const BRANCH = "main";
const API    = `https://api.github.com/repos/${REPO}/contents/${FILE}`;

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const body = await request.json();

      // FormSubmit sends { form_data: { name, email, ... } }
      const fd = body.form_data || body;

      const submission = {
        id:        crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        name:      fd.name    || "",
        email:     fd.email   || "",
        company:   fd.company || "",
        type:      fd.type    || "",
        message:   fd.message || "",
      };

      const headers = {
        Authorization:  `Bearer ${env.GITHUB_PAT}`,
        "User-Agent":   "NEXUS-AI-Submission-Worker",
        "Content-Type": "application/json",
        Accept:         "application/vnd.github+json",
      };

      // 1. Read current file
      const getRes  = await fetch(`${API}?ref=${BRANCH}`, { headers });
      const getJSON = await getRes.json();

      if (!getRes.ok) throw new Error(`GitHub GET failed: ${getJSON.message}`);

      const current = JSON.parse(atob(getJSON.content.replace(/\n/g, "")));
      current.push(submission);

      // 2. Commit updated file
      const putRes = await fetch(API, {
        method: "PUT",
        headers,
        body: JSON.stringify({
          message: `data: contact submission from ${submission.name} (${submission.email})`,
          content: btoa(unescape(encodeURIComponent(JSON.stringify(current, null, 2)))),
          sha:     getJSON.sha,
          branch:  BRANCH,
        }),
      });

      if (!putRes.ok) {
        const err = await putRes.json();
        throw new Error(`GitHub PUT failed: ${err.message}`);
      }

      return new Response(JSON.stringify({ success: true, id: submission.id }), {
        headers: {
          "Content-Type":                "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify({ success: false, error: err.message }), {
        status: 500,
        headers: {
          "Content-Type":                "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  },
};
