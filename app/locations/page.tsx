// app/locations/page.tsx
import { Section } from '@/components/Section';

export const metadata = { title: 'Locations' };

const weekly = [
  { day: 'Tue', time: '4–7 PM', spot: 'Parc du Lac-Beauchamp, Gatineau' },
  { day: 'Thu', time: '5–8 PM', spot: 'ByWard Market, Ottawa' },
  { day: 'Sat', time: '12–4 PM', spot: 'Major’s Hill Park, Ottawa' }
];

export default function Page() {
  return (
    <>
      <h1 className="mt-10 text-3xl font-bold">Locations</h1>
      <p className="mt-3 text-zinc-700">Follow our weekly route. Live updates on social media.</p>
      <Section title="Weekly route">
        <div className="grid sm:grid-cols-3 gap-4">
          {weekly.map((w) => (
            <div key={w.spot} className="rounded-xl border border-zinc-200 p-4">
              <p className="font-semibold">{w.spot}</p>
              <p className="text-sm text-zinc-700 mt-1">{w.day} · {w.time}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Book a stop" subtitle="Want the truck at your block party or fundraiser?">
        <a href="/contact" className="inline-flex items-center rounded-md bg-brand-500 px-4 py-2 text-white hover:bg-brand-600">
          Contact us
        </a>
      </Section>
    </>
  );
}
