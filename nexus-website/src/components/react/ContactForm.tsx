import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "project",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        ...(formData.company ? { company: formData.company } : {}),
        message: formData.message,
        ...(formData.type ? { type: formData.type } : {}),
        // FormSubmit.co configuration fields
        _subject: `New NEXUS AI Contact: ${formData.type}`,
        _template: "table",
        _captcha: "false",
        _honey: "",
      };

      const res = await fetch("https://formsubmit.co/ajax/NexusAI.Agents@proton.me", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const body = await res.json().catch(() => null);

      if (res.ok && body?.success === "true") {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", type: "project", message: "" });
      } else {
        const msg =
          body?.message || "Something went wrong. Please try again or email us directly.";
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="nexus-card p-8 text-center">
        <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Message Sent</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Message sent! We'll be in touch shortly.
        </p>
        <button
          className="mt-4 text-sm text-quantum-blue hover:underline"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="nexus-card p-6 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF]"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
          Company
        </label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-3 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF]"
          placeholder="Company name (optional)"
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
          Inquiry Type
        </label>
        <select
          id="type"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full px-3 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF]"
        >
          <option value="project">Start a Project</option>
          <option value="demo">Request a Demo</option>
          <option value="general">General Inquiry</option>
          <option value="partnership">Partnership</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3 py-2 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] resize-none"
          placeholder="Tell us about your project or question..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          {errorMsg || "Something went wrong. Please try again or email us directly."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3 rounded-lg bg-[#00D9FF] text-[#0A0E27] font-semibold text-sm hover:bg-[#00F0FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
