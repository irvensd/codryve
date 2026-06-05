'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { BRAND } from '@/lib/brand';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  message: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  serviceInterest: '',
  message: '',
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [fax, setFax] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage(null);
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, fax }),
      });

      let data: { error?: string; message?: string } = {};
      try {
        data = (await response.json()) as { error?: string; message?: string };
      } catch {
        data = {};
      }

      if (response.ok) {
        setFormData(initialFormData);
        setFax('');
        setErrors({});
        setFormMessage({
          type: 'success',
          text: "Message sent — thank you. We'll reply to your email within one business day.",
        });
      } else {
        setFormMessage({
          type: 'error',
          text:
            data.error ||
            `Something went wrong. Please try again or email us at ${BRAND.email}.`,
        });
      }
    } catch {
      setFormMessage({
        type: 'error',
        text: `Could not send your message. Check your connection or email us at ${BRAND.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = (name: keyof FormData) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand ${
      errors[name] ? 'border-red-400' : 'border-zinc-200'
    }`;

  return (
    <div id="contact" className="rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-sm sm:p-10">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">Send a message</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Tell us what you&apos;re trying to fix. We&apos;ll reply with next steps—usually within one business day.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-5">
        <div
          className="pointer-events-none absolute -left-[10000px] h-0 w-0 overflow-hidden opacity-0"
          aria-hidden="true"
        >
          <label htmlFor="contact-fax">Fax</label>
          <input
            type="text"
            id="contact-fax"
            name="fax"
            tabIndex={-1}
            autoComplete="off"
            value={fax}
            onChange={(e) => setFax(e.target.value)}
          />
        </div>

        {formMessage && (
          <div
            className={`rounded-xl px-4 py-3 text-sm ${
              formMessage.type === 'success'
                ? 'bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200/80'
                : 'bg-red-50 text-red-800 ring-1 ring-red-200/80'
            }`}
            role="status"
            aria-live="polite"
          >
            {formMessage.text}
          </div>
        )}

        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-800">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={fieldClass('name')}
            placeholder="Your name"
            autoComplete="name"
            required
          />
          {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-800">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={fieldClass('email')}
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
          {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-800">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={fieldClass('phone')}
              placeholder="Optional"
              autoComplete="tel"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-zinc-800">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={fieldClass('company')}
              placeholder="Optional"
              autoComplete="organization"
            />
          </div>
        </div>

        <div>
          <label htmlFor="serviceInterest" className="mb-1.5 block text-sm font-medium text-zinc-800">
            Service interest
          </label>
          <input
            type="text"
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className={fieldClass('serviceInterest')}
            placeholder="e.g. Website, automation, local growth"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-800">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={fieldClass('message')}
            placeholder="What systems are messy today? What would “done” look like?"
            required
          />
          {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary-brand inline-flex w-full items-center justify-center gap-2 py-3.5 text-sm font-medium tracking-wide disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="h-4 w-4" aria-hidden />
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
