// components/ContactForm.tsx
'use client';
import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // Simulate sending. Replace with your API route.
      await new Promise(res => setTimeout(res, 800));
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" required className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input name="phone" className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Event date</label>
          <input type="date" name="date" className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" rows={4} required className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center rounded-md bg-brand-500 px-4 py-2 text-white hover:bg-brand-600 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send inquiry'}
      </button>
      {status === 'sent' && <p className="text-sm text-mint-700">Thanks! We’ll get back to you shortly.</p>}
      {status === 'error' && <p className="text-sm text-brand-700">Something went wrong. Please try again.</p>}
    </form>
  );
}
