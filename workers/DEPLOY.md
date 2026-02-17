# Contact Submission Worker — Deploy Guide

## What this does
Receives FormSubmit.co webhooks and saves each contact form submission
to `nexus-website/src/data/submissions.json` in the GitHub repo.

## Prerequisites
- Cloudflare account (free)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/): `npm install -g wrangler`
- GitHub Fine-grained PAT with **Contents: Read & Write** on `TheKingHippopotamus/195_shades_of_agents-`

## Deploy steps

```bash
cd workers
wrangler login
wrangler deploy
wrangler secret put GITHUB_PAT
# Paste your GitHub PAT when prompted
```

## After deploying
1. Copy your worker URL: `https://contact-submission-receiver.<your-subdomain>.workers.dev`
2. In `nexus-website/src/components/react/ContactForm.tsx`, replace `PLACEHOLDER` in the `_webhook` field with your actual Cloudflare subdomain
3. Commit and push

## View submissions
`nexus-website/src/data/submissions.json` — auto-committed on every form submit.
