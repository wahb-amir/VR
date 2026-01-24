"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";


export default function CompactDemoModal({ open, onClose, apiDelay = 1200 }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    institution: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const firstRef = useRef(null);

  // focus + esc + body lock
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstRef.current?.focus(), 50);

    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      setSubmitting(false);
      setSuccess(false);
    };
  }, [open, onClose]);

  if (!open) return null;
  const target = typeof document !== "undefined" ? document.body : null;
  if (!target) return null;

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);

      // auto close after showing success briefly
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 900);
    }, apiDelay);
  }

  return createPortal(
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Request a Personalized Demo"
      className="fixed inset-0 z-50 flex items-center justify-center px-4 scale-110"
    >
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="relative z-10 w-full max-w-sm bg-gray-800 border border-gray-700 rounded-xl shadow-xl"
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-4 py-3 border-b border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-100">
            Request a Personalized Demo
          </h3>
          <p className="text-md text-gray-400 mt-1 text-center">
            Fill out the form below, and one of our specialists will contact you.
          </p>
        </div>
        

        <div className="p-4">
          {!success ? (
            <form onSubmit={submit} className="space-y-3 text-sm">
              <div>
                <label className="block text-xs text-gray-300 mb-1">Full Name</label>
                <input
                  ref={firstRef}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john.doe@example.com"
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">School / Institution</label>
                <input
                  name="institution"
                  value={form.institution}
                  onChange={handleChange}
                  placeholder="Springfield University"
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-2 text-xs rounded-md bg-transparent border border-gray-700 text-gray-300 hover:bg-gray-700 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-3 py-2 text-xs rounded-md font-semibold transition ${
                    submitting ? "bg-gray-500 text-gray-900" : "bg-gray-100 text-gray-900 hover:brightness-95"
                  }`}
                >
                  {submitting ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center">
              <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className="text-sm font-semibold text-gray-100">Request Received</div>
              <div className="text-xs text-gray-400 mt-1">We'll be in touch to schedule your demo.</div>
            </div>
          )}
        </div>
      </div>
    </div>,
    target
  );
}
