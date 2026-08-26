"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "success") {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const params = {
      name: data.get("name") as string,
      company: (data.get("company") as string) || "—",
      email: data.get("email") as string,
      phone: (data.get("phone") as string) || "—",
      service: (data.get("service") as string) || "Not specified",
      budget: (data.get("budget") as string) || "Not specified",
      message: data.get("message") as string,
      time: new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
    };

    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        params,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success is-visible" ref={successRef}>
        <div className="check">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3>Enquiry sent!</h3>
        <p>Thanks for reaching out — our team will get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="service">Service</label>
          <select id="service" name="service" defaultValue="">
            <option value="">Select a service</option>
            <option>Website Development</option>
            <option>Mobile App Development</option>
            <option>AI Solutions</option>
            <option>Custom Software Development</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="budget">Budget Range</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">Select a range</option>
            <option>Under ₹1,00,000</option>
            <option>₹1,00,000 – ₹5,00,000</option>
            <option>₹5,00,000 – ₹15,00,000</option>
            <option>₹15,00,000+</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">Project Description *</label>
          <textarea id="message" name="message" required placeholder="Tell us what you're planning to build..."></textarea>
        </div>
      </div>
      <div className="form-foot">
        <p className="form-note">
          {status === "error"
            ? "Something went wrong sending your enquiry — please try again or email us directly."
            : "We usually reply within one business day."}
        </p>
        <button type="submit" className="btn btn-accent" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Project Enquiry"}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </form>
  );
}
