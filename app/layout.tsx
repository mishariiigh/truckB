// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';

export const metadata: Metadata = {
  title: {
    default: 'Frosty Wheels — Ice Cream Truck',
    template: '%s | Frosty Wheels'
  },
  description: 'Mobile ice cream truck serving classic cones, dairy-free treats, and seasonal flavors across Gatineau & Ottawa.',
  keywords: ['ice cream', 'truck', 'desserts', 'Gatineau', 'Ottawa', 'events', 'catering'],
  openGraph: {
    title: 'Frosty Wheels — Ice Cream Truck',
    description: 'Book the sweetest truck for your next event.',
    type: 'website',
    url: 'https://example.com',
    images: [{ url: 'https://images.unsplash.com/photo-1495197359483-d092478c170a?w=1200' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frosty Wheels — Ice Cream Truck',
    description: 'Bringing joy one scoop at a time.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 gradient-bg">
        <Nav />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
