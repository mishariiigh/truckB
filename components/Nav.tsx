// components/Nav.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/locations', label: 'Locations' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/franchise', label: 'Franchise' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-brand-600 tracking-tight text-lg">
          Ottawa Cool Treats
        </Link>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-brand-600 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-zinc-200"
          aria-label="Menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className="sr-only">Open menu</span>
          <div className={clsx('w-5 h-5 relative', open && 'rotate-90 transition')} >
            <div className="absolute inset-0 flex flex-col justify-between">
              <span className="block h-0.5 bg-zinc-800"></span>
              <span className="block h-0.5 bg-zinc-800"></span>
              <span className="block h-0.5 bg-zinc-800"></span>
            </div>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-100 px-4 py-3 space-y-2">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="block py-1" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
