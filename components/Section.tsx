// components/Section.tsx
export function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
    return (
      <section className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle && <p className="text-zinc-700 mt-2">{subtitle}</p>}
        </div>
        {children}
      </section>
    );
  }
  