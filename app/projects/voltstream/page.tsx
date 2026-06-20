import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero, SectionHeader } from "@/components/PageHero";
import { VoltStreamDashboard } from "@/components/projects/VoltStreamDashboard";

const stack = ["Go", "AWS Kinesis", "Lambda", "Timestream", "Next.js", "Terraform"];

const outcomes = [
  {
    title: "Cut unplanned downtime",
    copy: "Detect thermal runaway and SoC degradation before assets fail in the field.",
  },
  {
    title: "Scale without re-architecture",
    copy: "From pilot fleets to 500+ machines with the same ingestion and alerting pipeline.",
  },
  {
    title: "Give operators clarity",
    copy: "Fleet map, live charts, and prioritized alerts in one operator dashboard.",
  },
];

export default function VoltStreamProjectPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-neon-cyan transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </div>

        <PageHero
          badge="VoltStream IoT"
          title={
            <>
              Industrial Battery Telemetry
              <br />
              <span className="text-gradient">for Fleets at Scale</span>
            </>
          }
          description={
            <>
              Edge-to-cloud platform for solar, battery, and heavy-equipment operators — built with{" "}
              <span className="text-neon-cyan font-mono">Go</span> and{" "}
              <span className="text-neon-cyan font-mono">AWS</span>.
            </>
          }
          actions={
            <div className="flex flex-wrap justify-center gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs font-mono text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          }
        />

        <section className="py-20 md:py-32 px-6 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Live Operations Dashboard"
              description="Fleet health, ingestion throughput, and predictive alerts in one view"
            />
            <VoltStreamDashboard />
          </div>
        </section>

        <section className="py-20 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Client Outcomes"
              description="What operators and engineering teams gain from this architecture"
            />
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {outcomes.map((item) => (
                <div
                  key={item.title}
                  className="p-6 md:p-8 rounded-2xl bg-slate-850 border border-slate-800 hover:border-neon-cyan/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-900/30">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why clients choose this architecture
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Go edge simulators push telemetry into Kinesis, where Lambda processors flag anomalies
              and persist time-series data to Timestream. Operators get a WebSocket-backed dashboard
              with fleet status, charts, and prioritized alerts.
            </p>
            <a
              href="/contact"
              className="inline-flex px-8 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-green text-slate-950 font-semibold hover:opacity-90 transition-opacity hover-glow"
            >
              Discuss a VoltStream deployment
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
