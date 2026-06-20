import Link from "next/link";
import { Building2, Github, Linkedin, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-green flex items-center justify-center">
                <Zap className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-semibold text-slate-900 dark:text-white">DrumNet</span>
            </div>
            <p className="text-gray-600 dark:text-gray-500 max-w-sm text-sm leading-relaxed">
              High-performance software engineering. Building the infrastructure that powers
              tomorrow.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm text-gray-600 transition-colors hover:text-neon-cyan dark:text-gray-400"
            >
              Contact
            </Link>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-gray-600 transition-colors hover:bg-slate-200 hover:text-neon-cyan dark:bg-slate-800 dark:text-gray-400 dark:hover:bg-slate-700"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-gray-600 transition-colors hover:bg-slate-200 hover:text-neon-cyan dark:bg-slate-800 dark:text-gray-400 dark:hover:bg-slate-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-600">
            &copy; {new Date().getFullYear()} DrumNet. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-600">
            <Building2 className="w-4 h-4" />
            <span>Delaware, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
