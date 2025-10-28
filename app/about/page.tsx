// app/about/page.tsx
import Image from 'next/image';
import { Section } from '@/components/Section';

export const metadata = { title: 'About us' };

export default function Page() {
  return (
    <>
      <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold">Rooted in community</h1>
          <p className="mt-4 text-zinc-700">
          Ottawa Cool Treats began as a small summer dream and quickly became a local favorite. We’re all about spreading happiness—one cone, one smile, and one neighborhood at a time.
          </p>
          <p className="mt-3 text-zinc-700">
            Our truck operates across <strong><u>Gatineau & Ottawa</u></strong> with a focus on local events, schools, and small businesses.
          </p>
        </div>
        <div className="relative h-64">
          <Image
            src="/images/truck2.jpeg"  // ✅ leading slash is required
            alt="Ice Cream Truck"
            fill
            className="object-cover rounded-xl border border-zinc-100"
          />
        </div>
      </div>
      <Section title="Our values">
        <ul className="grid sm:grid-cols-3 gap-4">
          <li className="rounded-xl border border-zinc-200 p-4">
            <p className="font-semibold">Quality</p>
            <p className="text-sm text-zinc-700 mt-1">Real ingredients, small-batch flavors.</p>
          </li>
          <li className="rounded-xl border border-zinc-200 p-4">
            <p className="font-semibold">Community</p>
            <p className="text-sm text-zinc-700 mt-1">Local partnerships and school fundraisers.</p>
          </li>
          <li className="rounded-xl border border-zinc-200 p-4">
            <p className="font-semibold">Sustainability</p>
            <p className="text-sm text-zinc-700 mt-1">Compostable serving ware and efficient routing.</p>
          </li>
        </ul>
      </Section>
    </>
  );
}
