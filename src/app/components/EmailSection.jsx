"use client";
import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import Link from 'next/link';

const socialLinks = [
  { href: 'https://github.com/ronategarcia', icon: AiFillGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/rodrigo-onate/', icon: AiFillLinkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/rorroalonso_/', icon: AiFillInstagram, label: 'Instagram' },
];

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status === 200) setEmailSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-on-scroll w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div>
          <p className="text-foreground-secondary mb-8 text-lg leading-relaxed">
            Looking for new opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className="flex items-center gap-3 px-5 py-3 glass-card rounded-xl text-foreground-secondary hover:text-primary-500 transition-colors"
              >
                <social.icon className="w-6 h-6" />
                <span className="text-base">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          {emailSubmitted ? (
            <div className="glass-card rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-foreground-secondary text-lg">Message sent!</p>
            </div>
          ) : (
            <form className="glass-card rounded-xl p-6 space-y-5" onSubmit={handleSubmit}>
              <input
                name="email"
                type="email"
                required
                className="input-field w-full text-base"
                placeholder="Your email"
              />
              <input
                name="subject"
                type="text"
                required
                className="input-field w-full text-base"
                placeholder="Subject"
              />
              <textarea
                name="message"
                rows={4}
                required
                className="input-field w-full resize-none text-base"
                placeholder="Message"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 text-lg py-3"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
