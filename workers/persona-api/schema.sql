-- ============================================================
-- NEXUS AI — Agent Persona Database Schema
-- Cloudflare D1 (SQLite-compatible)
-- Purpose: Store private <personal> section data for all 195
--          agents, separate from the public GitHub repository.
-- ============================================================

-- Drop existing table if re-running migration (safe for fresh setup)
DROP TABLE IF EXISTS agent_personas;

-- Agent personas — private data extracted from <personal> XML blocks
CREATE TABLE agent_personas (
  agent_number      INTEGER PRIMARY KEY,           -- e.g. 1, 42, 195
  agent_code        TEXT    NOT NULL,              -- e.g. "CEO", "SR-FE-REACT"
  nickname          TEXT    NOT NULL,              -- e.g. "Blueprint"
  age               INTEGER,                       -- e.g. 45
  about_me          TEXT    NOT NULL DEFAULT '',   -- narrative paragraph
  what_i_bring      TEXT    NOT NULL DEFAULT '',   -- narrative paragraph
  strengths         TEXT    NOT NULL DEFAULT '[]', -- JSON array of strings
  weaknesses        TEXT    NOT NULL DEFAULT '[]', -- JSON array of strings
  working_with_me   TEXT    NOT NULL DEFAULT '',   -- narrative paragraph
  department_name   TEXT    NOT NULL DEFAULT '',   -- e.g. "Engineering"
  department_number INTEGER NOT NULL DEFAULT 0,    -- e.g. 2
  tier_number       INTEGER NOT NULL DEFAULT 6,    -- 0-9
  tier_label        TEXT    NOT NULL DEFAULT '',   -- e.g. "C-Suite"
  updated_at        TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- Indexes for the three main query patterns used by the Worker API
CREATE INDEX idx_personas_dept ON agent_personas (department_number);
CREATE INDEX idx_personas_code ON agent_personas (agent_code);
CREATE INDEX idx_personas_tier ON agent_personas (tier_number);
