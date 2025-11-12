'use client';

import { useState } from 'react';
import Image from 'next/image';

const photos = [
  '/images/truck2.jpeg',
  '/images/truck1.jpeg',
  '/images/icecream2.jpeg',
  '/images/truck3.jpeg',
  '/images/truck4.jpeg',
  '/images/truck5.jpeg',
];

export default function Page() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="mt-3 text-zinc-700">A few sweet moments from the road.</p>

      <div className="mt-8 relative w-full max-w-2xl mx-auto h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden border border-zinc-100">
        <Image
          src={photos[current]}
          alt={`Photo ${current + 1}`}
          fill
          className="object-cover transition-transform duration-300"
        />
        <button
          onClick={prev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
        >
          &#8594;
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${i === current ? 'bg-zinc-900' : 'bg-zinc-400'}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
