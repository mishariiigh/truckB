// components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-3">
        <div>
          <p className="font-semibold text-zinc-900">Ottawa Cool Treats</p>
          <p className="text-sm text-zinc-600 mt-2">Serving Gatineau & Ottawa. Book us for parties, corporate events, and festivals.</p>
        </div>
        <div>
          <p className="font-semibold text-zinc-900">Quick links</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/menu" className="hover:text-brand-600">Menu</Link></li>
            <li><Link href="/locations" className="hover:text-brand-600">Locations</Link></li>
            <li><Link href="/franchise" className="hover:text-brand-600">Franchise</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-zinc-900">Contact</p>
          <p className="text-sm text-zinc-600 mt-2">hello@frostywheels.ca</p>
          <p className="text-sm text-zinc-600">+1 (613) 855-6779</p>
          <p className="text-xs text-zinc-500 mt-4">© {new Date().getFullYear()} Frosty Wheels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
