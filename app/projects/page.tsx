import Link from "next/link";
import { Activity, ArrowRight, Battery } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero, SectionHeader } from "@/components/PageHero";

const projects = [
  {
    slug: "voltstream",
    icon: Battery,
    title: "VoltStream IoT",
    description:
      "Edge-to-cloud telemetry for industrial batteries, solar arrays, and field hardware. Live metrics, predictive alerts, and fleet-wide visibility at scale.",
    features: [
      "500+ asset fleet ingestion",
      "Predictive failure detection",
      "Operator dashboard with live alerts",
      "Go + AWS Kinesis pipeline",
    ],
  },
  {
    slug: "ngx-trading",
    icon: Activity,
    title: "NGX Trading Platform",
    description:
      "Exchange-grade market data delivery for NGX independent software vendors. Normalized feeds, entitlement-aware APIs, and sub-ms latency at market open.",
    features: [
      "Tick ingestion & normalization",
      "Entitlement-aware distribution",
      "Feed health monitoring",
      "Market-open burst throughput",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          badge="Reference Implementations"
          title={
            <>
              Production Systems
              <br />
              <span className="text-gradient">Built to Scale</span>
            </>
          }
          description={
            <>
              Mission-critical telemetry and market data infrastructure built with{" "}
              <span className="text-neon-cyan font-mono">Go</span> and{" "}
              <span className="text-neon-cyan font-mono">AWS</span>.
            </>
          }
        />

        <section className="py-20 md:py-32 px-6 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Projects & Case Studies"
              description="Two reference platforms that demonstrate DrumNet's engineering depth"
            />

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block p-6 md:p-8 rounded-2xl bg-slate-850 border border-slate-800 hover:border-neon-cyan/30 transition-all duration-300 hover-glow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-green/10 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan/20 transition-colors">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 transition group-hover:text-neon-cyan group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">{project.description}</p>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-neon-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
