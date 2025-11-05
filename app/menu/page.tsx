// app/menu/page.tsx
import { Section } from '@/components/Section';

export const metadata = { title: 'Menu' };

const categories = [
  {
    name: 'Ice Cream',
    color: 'bg-amber-50 border-amber-200 text-amber-900',
    items: [
      { name: 'Vanilla', desc: 'Classic creamy flavor', price: '$5' },
      { name: 'Chocolate', desc: 'Rich cocoa delight', price: '$5' },
      { name: 'Mixed', desc: 'Vanilla & chocolate swirl', price: '$5' }
    ]
  },
  {
    name: 'Milk Shakes',
    color: 'bg-pink-50 border-pink-200 text-pink-900',
    items: [
      { name: 'Strawberry', desc: 'Sweet berry blend', price: '$6' },
      { name: 'Banana', desc: 'Creamy fruit shake', price: '$6' },
      { name: 'Vanilla', desc: 'Classic milkshake', price: '$6' },
      { name: 'Chocolate', desc: 'Chocolate lover\'s dream', price: '$6' }
    ]
  },
  {
    name: 'Slush',
    color: 'bg-blue-50 border-blue-200 text-blue-900',
    items: [
      { name: 'Orange', desc: 'Citrus burst', price: '$4' },
      { name: 'Lemon Lime', desc: 'Tangy refreshment', price: '$4' },
      { name: 'Cherry', desc: 'Sweet red classic', price: '$4' },
      { name: 'Grape', desc: 'Fruity purple delight', price: '$4' },
      { name: 'Blue Raspberry', desc: 'Electric blue fun', price: '$4' },
      { name: 'Strawberry', desc: 'Berry slush treat', price: '$4' },
      { name: 'Bubble Gum', desc: 'Sweet pink classic', price: '$4' }
    ]
  },
  {
    name: 'Sundaes',
    color: 'bg-purple-50 border-brown-200 text-brown-900',
    items: [
      { name: 'Strawberry', desc: 'Berry topping delight', price: '$7' },
      { name: 'Chocolate', desc: 'Fudge sundae classic', price: '$7' },
      { name: 'Butter', desc: 'Butterscotch sundae', price: '$7' },
      { name: 'Pineapple', desc: 'Tropical treat', price: '$7' },
      { name: 'Blueberry', desc: 'Berry bliss sundae', price: '$7' }
    ]
  },
  {
    name: 'Cones & Cups',
    color: 'bg-orange-50 border-orange-200 text-orange-900',
    items: [
      { name: 'Waffle Cone', desc: 'Fresh-baked cone', price: '$1.5 add-on' },
      { name: 'Sprinkle Cone', desc: 'Colorful sprinkles', price: '$2 add-on' },
      { name: 'Choc Dip', desc: 'Chocolate coated cone', price: '$2 add-on' }
    ]
  }
];

export default function Page() {
  return (
    <>
      <h1 className="mt-10 text-3xl font-bold">Menu</h1>
      <p className="mt-3 text-zinc-700">Seasonal flavors rotate—ask our crew what's new today.</p>
      {categories.map(cat => (
        <Section key={cat.name} title={cat.name}>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.items.map(i => (
              <li key={i.name} className={`rounded-xl border p-4 ${cat.color}`}>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{i.name}</p>
                  <p className="text-sm opacity-80">{i.price}</p>
                </div>
                <p className="text-sm opacity-80 mt-1">{i.desc}</p>
              </li>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}