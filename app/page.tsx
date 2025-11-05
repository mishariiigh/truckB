// app/page.tsx (Home)
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import Link from 'next/link';

// Temporary Card component with className support
function Card({ title, desc, badge, className = '' }: { title: string; desc: string; badge?: string; className?: string }) {
  return (
    <div className={`rounded-xl border p-4 ${className}`}>
      <div className="flex flex-col h-full">
        {badge && (
          <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-white/80 mb-2 w-fit">
            {badge}
          </span>
        )}
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-zinc-700 mt-2 flex-grow">{desc}</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="Fan Favorites" subtitle="The flavors that bring smiles back again and again">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card 
            title="Iceberg Vanilla" 
            desc="Our signature extra-thick & creamy vanilla that started it all" 
            badge="⭐ Customer Pick"
            className="bg-amber-50 border-amber-200"
          />
          <Card 
            title="Chocolate Wave" 
            desc="Rich, decadent cocoa that chocolate lovers dream about"
            className="bg-brown-50 border-brown-200"
          />
          <Card 
            title="Strawberry Swirl" 
            desc="Sun-ripened strawberries swirled through creamy perfection" 
            badge="Seasonal Favorite"
            className="bg-pink-50 border-pink-200"
          />
        </div>
      </Section>
      <Section title="Sweet Celebrations" subtitle="Make your event unforgettable with our mobile treat experience">
        <div className="grid sm:grid-cols-3 gap-4">
          <Card 
            title="Birthday Bash" 
            desc="2 hours of sweet fun · Custom toppings bar · Party favors included" 
            badge="🎉 Most Popular"
            className="bg-red-50 border-red-200"
          />
          <Card 
            title="Neighborhood Party" 
            desc="Perfect for block parties · 3-hour service · Unlimited flavor options"
            className="bg-orange-50 border-orange-200"
          />
          <Card 
            title="Corporate Treats" 
            desc="Employee appreciation · Branded cups · Quick setup & service"
            className="bg-purple-50 border-purple-200"
          />
        </div>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center rounded-full bg-red-500 px-6 py-3 text-white font-semibold hover:bg-red-600 transition-all shadow-lg hover:shadow-xl">
            🍦 Plan Your Event
          </Link>
        </div>
      </Section>
      <Section title="Everyone's Welcome" subtitle="Delicious options for every dietary need">
        <div className="grid sm:grid-cols-3 gap-4">
          <Card 
            title="Dairy-Free Delights" 
            desc="Creamy sorbets and fruit-freezes that everyone can enjoy" 
            badge="🌱 Vegan"
            className="bg-green-50 border-green-200"
          />
          <Card 
            title="Gluten-Free Goodness" 
            desc="Certified GF cones and dedicated equipment for peace of mind"
            className="bg-blue-50 border-blue-200"
          />
          <Card 
            title="Nut-Aware Kitchen" 
            desc="Strict protocols to keep our friends with allergies safe" 
            badge="Safety First"
            className="bg-yellow-50 border-yellow-200"
          />
        </div>
      </Section>
      <Section title="Find Your Sweet Spot" subtitle="Follow the joy—catch us around town!">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 text-center border border-red-100">
          <h3 className="text-2xl font-bold text-red-900 mb-4">Ready for a Sweet Adventure?</h3>
          <p className="text-red-700 mb-6">Track our live location and see where we're serving smiles today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations" className="inline-flex items-center rounded-full bg-red-500 px-6 py-3 text-white font-semibold hover:bg-red-600 transition-all">
              📍 Find Our Truck
            </Link>
            <Link href="/menu" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-red-500 font-semibold hover:bg-red-50 transition-all border border-red-200">
              🍭 View Full Menu
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}