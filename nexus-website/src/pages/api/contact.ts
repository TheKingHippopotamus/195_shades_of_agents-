// This endpoint is SSR — it runs server-side only and is never exposed to the client.
// The RESEND_API_KEY is read from environment variables and never sent to the browser.
//
// DEPLOYMENT NOTE: This endpoint requires a Node.js server.
// For GitHub Pages (static), this route is not available. Use a server host
// (Railway, Fly.io, Vercel, Netlify Functions) to serve the API routes.
export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  let data: {
    name?: string;
    email?: string;
    company?: string;
    type?: string;
    message?: string;
  };

  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, email, company, type: inquiryType, message } = data;

  // Validate required fields
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: "Missing required fields: name, email, message" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: "Invalid email address" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Sanitize message length
  if (message.length > 5000) {
    return new Response(
      JSON.stringify({ error: "Message too long (max 5000 characters)" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const apiKey = import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set in environment variables.");
    return new Response(
      JSON.stringify({ error: "Email service is not configured" }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  // Sanitize HTML in message to prevent injection
  const sanitizedMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");

  const sanitizedName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const sanitizedCompany = company
    ? company.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    : null;

  let res: Response;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // For Resend testing, use onboarding@resend.dev as the from address.
        // For production, set up a verified domain at resend.com and replace
        // this with: NEXUS AI <contact@your-verified-domain.com>
        from: "NEXUS AI Contact <onboarding@resend.dev>",
        // For Resend testing without a verified domain, use delivered@resend.dev
        // Replace with a real recipient address once domain is verified
        to: ["delivered@resend.dev"],
        reply_to: email,
        subject: `[NEXUS AI] New ${inquiryType || "General"} inquiry from ${sanitizedName}`,
        html: `
          <h2 style="font-family: sans-serif; color: #1a1a2e;">New Contact Form Submission</h2>
          <table style="font-family: sans-serif; font-size: 14px; border-collapse: collapse; width: 100%;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 120px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${sanitizedCompany ? `
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Company:</strong></td>
              <td style="padding: 8px 0;">${sanitizedCompany}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Inquiry Type:</strong></td>
              <td style="padding: 8px 0;">${inquiryType || "General"}</td>
            </tr>
          </table>
          <h3 style="font-family: sans-serif; color: #1a1a2e; margin-top: 20px;">Message:</h3>
          <blockquote style="border-left: 3px solid #6366F1; margin: 0; padding: 12px 16px; background: #f8f8ff; font-family: sans-serif; font-size: 14px; color: #333;">
            ${sanitizedMessage}
          </blockquote>
          <p style="font-family: sans-serif; font-size: 12px; color: #999; margin-top: 20px;">
            Sent via NEXUS AI contact form — nexus-ai.dev
          </p>
        `,
      }),
    });
  } catch (fetchError) {
    console.error("Failed to call Resend API:", fetchError);
    return new Response(
      JSON.stringify({ error: "Failed to connect to email service" }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!res.ok) {
    let errBody: unknown;
    try {
      errBody = await res.json();
    } catch {
      errBody = { message: "Unknown Resend error" };
    }
    console.error("Resend API error:", errBody);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: errBody }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
