export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-100 dark:border-slate-700/50 dark:bg-slate-800/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-sm text-gray-600 font-mono dark:text-gray-400">
            Systems & Infrastructure Engineering
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
          High-Performance Infrastructure
          <br />
          <span className="text-gradient">&amp; Telemetry Engineering</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Built with <span className="text-neon-cyan font-mono">Go</span> and{" "}
          <span className="text-neon-cyan font-mono">AWS</span>. We design and deploy
          mission-critical systems that scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#capabilities"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-green text-slate-950 font-semibold hover:opacity-90 transition-opacity hover-glow"
          >
            View Capabilities
          </a>
          <a
            href="/contact"
            className="px-8 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium transition-colors hover:border-neon-cyan hover:text-neon-cyan dark:border-slate-700 dark:text-gray-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
