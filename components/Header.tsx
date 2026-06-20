import Link from "next/link";
import { Zap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-green flex items-center justify-center">
            <Zap className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-semibold text-slate-900 dark:text-white">DrumNet</span>
        </Link>
        <nav className="flex items-center gap-5">
          <Link
            href="/projects"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-neon-cyan dark:text-gray-400"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="btn-neon-shadow inline-flex items-center justify-center rounded-full border border-neon-cyan/40 bg-white px-5 py-2 font-mono text-sm font-semibold text-neon-cyan transition hover:border-neon-cyan dark:bg-slate-950 dark:text-neon-cyan"
          >
            Request Demo
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
