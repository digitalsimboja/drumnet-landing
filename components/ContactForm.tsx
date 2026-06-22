"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const topics = [
  "General inquiry",
  "VoltStream IoT",
  "NGX Trading Platform",
  "Drum",
  "Partnership / consulting",
];

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      topic: data.get("topic"),
      message: data.get("message"),
      _subject: `DrumNet contact: ${data.get("topic")}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/digitalsimboja@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again in a moment.");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-gray-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={status === "submitting"}
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={status === "submitting"}
          className={inputClass}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="topic" className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          required
          disabled={status === "submitting"}
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select a topic
          </option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={status === "submitting"}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project or requirements"
        />
      </div>

      {status === "success" && (
        <p className="rounded-lg border border-neon-green/30 bg-neon-green/10 px-4 py-3 text-center text-sm text-neon-green">
          Message sent. We&apos;ll get back to you within one business day.
        </p>
      )}

      {status === "error" && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-green px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 hover-glow"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
