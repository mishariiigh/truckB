// app/contact/page.tsx
import { ContactForm } from '@/components/ContactForm';

export const metadata = { title: 'Contact us' };

export default function Page() {
  return (
    <>
      <h1 className="mt-10 text-3xl font-bold">Contact us</h1>
      <p className="mt-3 text-zinc-700">Tell us about your event or question. We’ll reply within one business day.</p>
      <div className="mt-8 max-w-2xl">
        <ContactForm />
        <div className="mt-8 rounded-xl border border-zinc-200 p-4">
          <p className="font-semibold">Direct</p>
          <p className="text-sm text-zinc-700 mt-1">Email: <a href="mailto:ottawacooltreat@gmail.com">ottawacooltreat@gmail.com</a> </p>
          <p className="text-sm text-zinc-700">Phone: +1 (613) 855-6779</p>
          <p className="text-sm text-zinc-700 mt-1">Service area: Gatineau & Ottawa</p>
        </div>
      </div>
    </>
  );
}