// app/gallery/page.tsx
import Image from 'next/image';

export const metadata = { title: 'Gallery' };

const photos = [
  'https://images.unsplash.com/photo-1527515637463-b4a3746602ec?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464349153735-7db50ed309cc?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503074151030-4a1d4bc10905?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1626942614152-63478c7424e8?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496412705862-0b46a5d16216?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1200&q=80&auto=format&fit=crop'
];

export default function Page() {
  return (
    <>
      <h1 className="mt-10 text-3xl font-bold">Gallery</h1>
      <p className="mt-3 text-zinc-700">A few sweet moments from the road.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((src, i) => (
          <div key={i} className="relative h-56 rounded-xl overflow-hidden border border-zinc-100">
            <Image src={src} alt="Ice cream moment" fill className="object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}
