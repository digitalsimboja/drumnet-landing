import { Building2, Github, Linkedin, Mail, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-16 md:py-20 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-green flex items-center justify-center">
                <Zap className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-semibold text-white">DrumNet</span>
            </div>
            <p className="text-gray-500 max-w-md">
              High-performance software engineering. Building the infrastructure that powers
              tomorrow.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <h4 className="text-sm font-semibold text-white">Contact Us</h4>
            <a
              href="mailto:hello@drumnet.dev"
              className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@drumnet.dev</span>
            </a>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} DrumNet. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Building2 className="w-4 h-4" />
            <span>Delaware, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
