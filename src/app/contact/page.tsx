"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FormEvent, useState } from "react";

function page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <div className="relative min-h-screen bg-gray-100 py-12 pt-36 dark:bg-gray-900">
      <BackgroundBeams className="absolute left-0 top-0 z-0 h-full w-full" />
      <div className="relative z-10 mx-auto max-w-2xl p-4">
        <h1 className="mb-8 text-center font-sans text-lg font-bold text-white md:text-7xl">
          Contact Us
        </h1>
        <p className="mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950 p-4 placeholder:text-neutral-700 focus:ring-2 focus:ring-teal-500"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950 p-4 placeholder:text-neutral-700 focus:ring-2 focus:ring-teal-500"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="rounded-lg bg-teal-500 px-6 py-2 font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;