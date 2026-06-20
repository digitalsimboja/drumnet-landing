interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function CapabilityCard({ icon, title, description, features }: CapabilityCardProps) {
  return (
    <div className="group p-6 md:p-8 rounded-2xl bg-slate-850 border border-slate-800 hover:border-neon-cyan/30 transition-all duration-300 hover-glow">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-green/10 flex items-center justify-center text-neon-cyan mb-6 group-hover:bg-neon-cyan/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-gray-500">
            <span className="w-1 h-1 rounded-full bg-neon-cyan" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
