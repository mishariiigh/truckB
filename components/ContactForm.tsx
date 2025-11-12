'use client';
import { useState } from 'react';

// Define the shape of the form data for TypeScript safety
interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>(''); // For specific error/success text

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // Extract data from the form
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Convert FormData to a plain object matching the API structure
    const data = Object.fromEntries(formData.entries()) as unknown as FormData;

    setStatus('sending');
    setStatusMessage('Sending inquiry...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // Attempt to parse the JSON response
      const result = await response.json();

      if (response.ok && result.ok) {
        setStatus('sent');
        setStatusMessage('Thanks! We’ll get back to you shortly.');
        form.reset(); // Clear the form on successful submission
      } else {
        // Handle application errors from the API route (e.g., missing fields error)
        console.error('API Error:', result.message || 'Unknown API Error');
        setStatus('error');
        // Use the specific message returned from the server if available
        setStatusMessage(result.message || 'Something went wrong on the server. Please try again.');
      }
    } catch (error) {
      // Handle network errors (e.g., server unreachable)
      console.error('Network Error:', error);
      setStatus('error');
      setStatusMessage('Network connection failed. Please check your internet and try again.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" disabled={status === 'sending'} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" type="email" name="email" required className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" disabled={status === 'sending'} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
          <input id="phone" name="phone" className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" disabled={status === 'sending'} />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium">Event date</label>
          <input id="date" type="date" name="date" className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" disabled={status === 'sending'} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" disabled={status === 'sending'} />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center rounded-md bg-brand-500 px-4 py-2 text-white hover:bg-brand-600 disabled:opacity-60 transition duration-150"
      >
        {status === 'sending' ? 'Sending…' : 'Send inquiry'}
      </button>
      
      {/* Dynamic Status Messages */}
      {status === 'sent' && <p className="text-sm text-mint-700 font-medium">{statusMessage}</p>}
      {status === 'error' && <p className="text-sm text-red-700 font-medium">{statusMessage}</p>}
    </form>
  );
}