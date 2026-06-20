interface StatCardProps {
  label: string;
  value: string;
  detail?: string;
  accent?: "cyan" | "green" | "amber" | "red";
}

const accentStyles = {
  cyan: "text-neon-cyan",
  green: "text-neon-green",
  amber: "text-amber-400",
  red: "text-red-400",
};

export function StatCard({ label, value, detail, accent = "cyan" }: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-850">
      <p className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p className={`mt-2 text-2xl font-semibold ${accentStyles[accent]}`}>{value}</p>
      {detail && <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{detail}</p>}
    </div>
  );
}
