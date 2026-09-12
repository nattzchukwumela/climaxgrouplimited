"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-zinc-900">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Thank you!
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Your message has been received. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-zinc-900"
    >
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="name"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-lg border border-black/10 bg-transparent px-3 py-2 text-sm text-zinc-900 outline-none focus:border-[#1487be] dark:border-white/15 dark:text-zinc-50"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-black/10 bg-transparent px-3 py-2 text-sm text-zinc-900 outline-none focus:border-[#1487be] dark:border-white/15 dark:text-zinc-50"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-lg border border-black/10 bg-transparent px-3 py-2 text-sm text-zinc-900 outline-none focus:border-[#1487be] dark:border-white/15 dark:text-zinc-50"
        />
      </div>
      <button
        type="submit"
        className="mt-2 rounded-full bg-[#1487be] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#106a99]"
      >
        Send Message
      </button>
    </form>
  );
}
