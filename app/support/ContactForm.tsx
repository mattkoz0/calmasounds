'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [subject, setSubject] = useState('Support : ');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:calma.app@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-black/20 md:p-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white/70">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/30 outline-none transition focus:border-white/20 focus:bg-white/10"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white/70">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/30 outline-none transition focus:border-white/20 focus:bg-white/10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-white/70">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            required
            value={subject}
            onChange={(e) => {
              const val = e.target.value;
              if (val.startsWith('Support : ')) {
                setSubject(val);
              } else if (val.length < 'Support : '.length) {
                setSubject('Support : ');
              }
            }}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/30 outline-none transition focus:border-white/20 focus:bg-white/10"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-white/70">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help you?"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-white/30 outline-none transition focus:border-white/20 focus:bg-white/10 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl bg-white px-8 py-4 font-semibold text-slate-950 transition hover:scale-[1.01] active:scale-[0.98]"
        >
          Send Message
        </button>
        <p className="mt-4 text-center text-sm text-white/50">
          Clicking send will open your default email application.
        </p>
      </form>

      <div className="mt-12 pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-lg font-semibold">Direct Email</h3>
            <p className="mt-2 text-white/60">
              <a href="mailto:calma.app@outlook.com" className="hover:text-white transition underline underline-offset-4">
                calma.app@outlook.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Response Time</h3>
            <p className="mt-2 text-white/60">
              We usually respond within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
