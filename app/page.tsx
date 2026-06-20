const products = [
  {
    title: "Financial Market Data Engines",
    tag: "Real-time streaming",
    description:
      "Ultra-low latency pipelines for exchange feeds, tick normalization, and concurrent API delivery — engineered in Go on AWS.",
    points: [
      "Sub-millisecond ingestion",
      "Horizontal scale at market open",
      "Cost-optimized cloud topology",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    title: "IoT & Solar Energy Telemetry",
    tag: "High-frequency metrics",
    description:
      "Edge-to-cloud agents for battery health, inverter output, and solar array monitoring — built for continuous, high-volume ingestion.",
    points: [
      "Hardware metric aggregation",
      "Anomaly detection at the edge",
      "Resilient offline sync",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
];

const stack = ["Go", "AWS", "gRPC", "Kafka", "TimescaleDB"];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-cyan-600/5 blur-3xl" />
      </div>

      <header className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="font-mono text-sm font-medium tracking-widest text-[var(--color-accent)]">
          DRUMNET
        </span>
        <a
          href="#contact"
          className="rounded-md border border-[var(--color-border)] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-500/40 hover:text-white"
        >
          Contact
        </a>
      </header>

      <main className="relative mx-auto max-w-5xl px-6 pb-24">
        <section className="pt-16 pb-20 text-center sm:pt-24">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Software consultancy
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            High-Performance Infrastructure &amp; Telemetry Engineering
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
            Built with Go and AWS. We design systems that move data fast, scale under load, and stay
            lean on infrastructure cost.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-panel)] px-3 py-1 font-mono text-xs text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Products &amp; Capabilities</h2>
              <p className="mt-1 text-sm text-slate-500">Core engineering domains</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.title}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6 transition hover:border-cyan-500/30"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-[var(--color-accent)]">
                    {product.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                    {product.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{product.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{product.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {product.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] px-8 py-10 text-center"
        >
          <h2 className="text-xl font-semibold text-white">Custom Engineering Consultations</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Tell us about your latency, scale, or telemetry challenge. We respond within one business
            day.
          </p>
          <a
            href="mailto:hello@drumnet.dev"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            hello@drumnet.dev
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </section>
      </main>

      <footer className="relative border-t border-[var(--color-border)] py-6 text-center">
        <p className="font-mono text-xs text-slate-600">
          &copy; {new Date().getFullYear()} DrumNet. Go &middot; AWS &middot; Infrastructure
          Engineering.
        </p>
      </footer>
    </div>
  );
}
