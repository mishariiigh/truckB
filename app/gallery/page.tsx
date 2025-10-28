// app/gallery/page.tsx
import Image from 'next/image';

export const metadata = { title: 'Gallery' };

const photos = [
  '/images/truck2.jpeg',
  '/images/icecream1.jpeg',
  '/images/icecream2.jpeg',
  '/images/truck3.jpeg',
  '/images/truck4.jpeg',
  '/images/truck5.jpeg',
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
