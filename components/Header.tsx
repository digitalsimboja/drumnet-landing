import { Zap } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-green flex items-center justify-center">
            <Zap className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-semibold text-white">DrumNet</span>
        </div>
        <a
          href="#contact"
          className="text-sm font-medium text-gray-400 hover:text-neon-cyan transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
