'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const fieldClass = (name: keyof typeof formData) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
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

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={fieldClass('name')}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={fieldClass('email')}
            placeholder="you@company.com"
          />
          {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-zinc-800">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={fieldClass('subject')}
            placeholder="e.g. Intake automation for our firm"
          />
          {errors.subject && <p className="mt-1.5 text-sm text-red-600">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={fieldClass('message')}
            placeholder="What systems are messy today? What would “done” look like?"
          />
          {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 py-3.5 text-sm font-medium text-white shadow-md transition hover:bg-zinc-800"
        >
          <Send className="h-4 w-4" aria-hidden />
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
