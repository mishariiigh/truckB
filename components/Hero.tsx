// components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-200 mt-8">
      <div className="grid md:grid-cols-2">
        <div className="p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Ottawa Cool Treats
          </h1>
          <p className="mt-4 text-zinc-700">
            Classic cones, dairy-free delights, and seasonal flavors—delivered curbside. Book the sweetest truck for your next event.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-md bg-brand-500 px-4 py-2 text-white hover:bg-brand-600">
              Book the truck
            </Link>
            <Link href="/menu" className="inline-flex items-center rounded-md border border-zinc-400 px-4 py-2 hover:border-brand-500 hover:text-brand-600">
              Explore menu
            </Link>
          </div>
        </div>
        <div className="relative h-72 md:h-full">
        <Image
  src="/images/truck1.jpeg"  // ✅ leading slash is required
  alt="Ice Cream Truck"
  fill
  className="object-cover"
  priority
/>
        </div>
      </div>
    </section>
  );
}
