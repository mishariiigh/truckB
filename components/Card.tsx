// components/Card.tsx
export function Card({ 
  title, 
  desc, 
  badge, 
  className = "" 
}: { 
  title: string; 
  desc: string; 
  badge?: string;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-zinc-200 p-4 hover:shadow-sm transition ${className}`}>
      <div className="flex items-start justify-between">
        <h3 className="font-semibold">{title}</h3>
        {badge && <span className="text-xs px-2 py-1 rounded-full bg-mint-100 text-mint-700">{badge}</span>}
      </div>
      <p className="text-sm text-zinc-700 mt-2">{desc}</p>
    </div>
  );
}