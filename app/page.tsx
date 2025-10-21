// app/page.tsx (Home)
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Popular flavors" subtitle="Our crowd-pleasers, always on the truck.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Strawberry Swirl" desc="Velvety strawberry with ribbons of house-made jam." badge="Best seller" />
          <Card title="Classic Vanilla" desc="Madagascar vanilla beans, silky and timeless." />
          <Card title="Mint Choco Crunch" desc="Fresh mint with crunchy dark chocolate chips." />
        </div>
      </Section>
      <Section title="Catering & events" subtitle="Birthday parties, weddings, school fairs, and corporate socials.">
        <div className="grid sm:grid-cols-3 gap-4">
          <Card title="Party package" desc="1.5 hr service · up to 75 servings · custom menu board." />
          <Card title="Corporate social" desc="2 hr service · up to 150 servings · brand signage options." />
          <Card title="Festival booth" desc="Full-day service · high-volume · POS integration available." />
        </div>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center rounded-md bg-brand-500 px-4 py-2 text-white hover:bg-brand-600">
            Request a quote
          </Link>
        </div>
      </Section>
      <Section title="Dietary options" subtitle="We serve dairy-free, gluten-free cones, and nut-aware flavors.">
        <div className="grid sm:grid-cols-2 gap-4">
          <Card title="Dairy-free sorbets" desc="Bright fruit-forward options made without dairy." />
          <Card title="Gluten-free cones" desc="Crunch without compromise; certified GF cones." />
        </div>
      </Section>
    </>
  );
}
