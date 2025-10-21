// app/menu/page.tsx
import { Section } from '@/components/Section';

export const metadata = { title: 'Menu' };

const categories = [
  {
    name: 'Scoops',
    items: [
      { name: 'Strawberry Swirl', desc: 'House jam ribbons', price: '$5' },
      { name: 'Classic Vanilla', desc: 'Madagascar beans', price: '$5' },
      { name: 'Mint Choco Crunch', desc: 'Dark chocolate chips', price: '$5' }
    ]
  },
  {
    name: 'Cones & cups',
    items: [
      { name: 'Gluten-free cone', desc: 'Certified GF', price: '$1 add-on' },
      { name: 'Waffle cone', desc: 'Freshly crisped', price: '$1.5 add-on' }
    ]
  },
  {
    name: 'Sorbets (DF)',
    items: [
      { name: 'Lemon Burst', desc: 'Bright & tart', price: '$5' },
      { name: 'Raspberry Pop', desc: 'Fruit-forward', price: '$5' }
    ]
  }
];

export default function Page() {
  return (
    <>
      <h1 className="mt-10 text-3xl font-bold">Menu</h1>
      <p className="mt-3 text-zinc-700">Seasonal flavors rotate—ask our crew what’s new today.</p>
      {categories.map(cat => (
        <Section key={cat.name} title={cat.name}>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.items.map(i => (
              <li key={i.name} className="rounded-xl border border-zinc-200 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{i.name}</p>
                  <p className="text-sm text-zinc-600">{i.price}</p>
                </div>
                <p className="text-sm text-zinc-700 mt-1">{i.desc}</p>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
