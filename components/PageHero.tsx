interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  description: React.ReactNode;
  actions?: React.ReactNode;
}

export function PageHero({ badge, title, description, actions }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-sm text-gray-400 font-mono">{badge}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>

        {actions}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {description && <p className="text-gray-400 max-w-xl mx-auto">{description}</p>}
    </div>
  );
}
