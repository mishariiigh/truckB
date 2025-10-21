// app/franchise/page.tsx
import { Section } from '@/components/Section';
import Link from 'next/link';

export const metadata = { title: 'Franchise' };

export default function Page() {
  return (
    <>
      <h1 className="mt-10 text-3xl font-bold">Franchise</h1>
      <p className="mt-3 text-zinc-700">Bring Frosty Wheels to your city with turnkey support and training.</p>
      <Section title="What you get" subtitle="We set you up for success.">
        <ul className="grid sm:grid-cols-2 gap-4">
          <li className="rounded-xl border border-zinc-200 p-4">
            <p className="font-semibold">Branded truck package</p>
            <p className="text-sm text-zinc-700 mt-1">Equipment, wrap, menu boards, POS.</p>
          </li>
          <li className="rounded-xl border border-zinc-200 p-4">
            <p className="font-semibold">Operations training</p>
            <p className="text-sm text-zinc-700 mt-1">Food safety, routing, events, sourcing.</p>
          </li>
          <li className="rounded-xl border border-zinc-200 p-4">
            <p className="font-semibold">Marketing playbook</p>
            <p className="text-sm text-zinc-700 mt-1">Social, partnerships, launch plan.</p>
          </li>
          <li className="rounded-xl border border-zinc-200 p-4">
            <p className="font-semibold">Ongoing support</p>
            <p className="text-sm text-zinc-700 mt-1">Quarterly check-ins and seasonal menus.</p>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center rounded-md bg-brand-500 px-4 py-2 text-white hover:bg-brand-600">
            Start the conversation
          </Link>
        </div>
      </Section>
    </>
  );
}
