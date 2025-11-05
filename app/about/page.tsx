// app/about/page.tsx
import Image from 'next/image';
import { Section } from '@/components/Section';

export const metadata = { title: 'About us' };

export default function Page() {
  return (
    <>
      <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold">Sweet Beginnings</h1>
          <p className="mt-4 text-zinc-700">
            What started as a family dream to bring joy to our community has blossomed into Ottawa's favorite ice cream experience. We believe every day deserves a little sweetness, and we're here to deliver it with smiles and sprinkles.
          </p>
          <p className="mt-3 text-zinc-700">
            You'll find us serving up happiness across <strong>Ottawa & Gatineau</strong>—at local parks, community events, and neighborhood gatherings. Follow our journey to see where we'll pop up next!
          </p>
        </div>
        <div className="relative h-64">
          <Image
            src="/images/truck2.jpeg"
            alt="Our colorful ice cream truck"
            fill
            className="object-cover rounded-xl border border-zinc-100"
          />
        </div>
      </div>
      <Section title="What makes us special">
        <ul className="grid sm:grid-cols-3 gap-4">
          <li className="rounded-xl border border-red-200 p-4 bg-red-50">
            <p className="font-semibold text-red-900">Handcrafted Quality</p>
            <p className="text-sm text-red-700 mt-1">Small-batch recipes using premium ingredients for unforgettable flavor.</p>
          </li>
          <li className="rounded-xl border border-red-200 p-4 bg-red-50">
            <p className="font-semibold text-red-900">Local Love</p>
            <p className="text-sm text-red-700 mt-1">Proudly serving our community with seasonal specialties and custom creations.</p>
          </li>
          <li className="rounded-xl border border-red-200 p-4 bg-red-50">
            <p className="font-semibold text-red-900">Fresh & Fun</p>
            <p className="text-sm text-red-700 mt-1">Rotating flavors and innovative treats that keep you coming back for more.</p>
          </li>
        </ul>
      </Section>
    </>
  );
}