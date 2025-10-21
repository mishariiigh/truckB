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
            Frosty Wheels started as a summer passion and grew into a neighborhood staple. We believe joy should be accessible—one scoop, one smile, one street at a time.
          </p>
          <p className="mt-3 text-zinc-700">
            Our truck operates across Gatineau & Ottawa with a focus on local events, schools, and small businesses.
          </p>
        </div>
        <div className="relative h-64">
          <Image
            src="https://images.unsplash.com/photo-1551022372-0bdac482b9a6?w=1200&q=80&auto=format&fit=crop"
            alt="Ice cream truck in the neighborhood"
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
