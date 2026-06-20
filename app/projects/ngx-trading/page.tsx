import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero, SectionHeader } from "@/components/PageHero";
import { NgxTradingDashboard } from "@/components/projects/NgxTradingDashboard";

const stack = ["Go", "AWS", "Kafka", "gRPC", "TimescaleDB", "Entitlement APIs"];

const outcomes = [
  {
    title: "Win market-open traffic",
    copy: "Handle burst tick volume when the exchange opens without latency spikes or dropped feeds.",
  },
  {
    title: "Ship vendor-ready APIs",
    copy: "Deliver normalized, entitlement-aware market data that NGX ISVs can productize immediately.",
  },
  {
    title: "Prove reliability",
    copy: "Feed health monitoring, replay, and observability built for regulated capital markets.",
  },
];

export default function NgxTradingProjectPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 pt-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-neon-cyan dark:text-gray-400"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </div>

        <PageHero
          badge="NGX Trading Platform"
          title={
            <>
              Market Data Infrastructure
              <br />
              <span className="text-gradient">for NGX ISVs</span>
            </>
          }
          description={
            <>
              Exchange-grade feed delivery for independent software vendors — built with{" "}
              <span className="text-neon-cyan font-mono">Go</span> and{" "}
              <span className="text-neon-cyan font-mono">AWS</span>.
            </>
          }
          actions={
            <div className="flex flex-wrap justify-center gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs font-mono text-gray-600 dark:border-slate-700 dark:text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          }
        />

        <section className="py-20 md:py-32 px-6 bg-slate-100 dark:bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Market Data Control Plane"
              description="Feed health, symbol distribution, and delivery latency at a glance"
            />
            <NgxTradingDashboard />
          </div>
        </section>

        <section className="py-20 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Client Outcomes"
              description="What market data vendors and their downstream clients gain"
            />
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {outcomes.map((item) => (
                <div
                  key={item.title}
                  className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-neon-cyan/30 dark:border-slate-800 dark:bg-slate-850"
                >
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-slate-100 dark:bg-slate-900/30">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Built for NGX vendor workflows
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Exchange feeds enter a Go ingestion layer, pass through normalization and entitlement
              checks, and fan out over high-throughput APIs to downstream ISV products.
            </p>
            <a
              href="/contact"
              className="inline-flex px-8 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-green text-slate-950 font-semibold hover:opacity-90 transition-opacity hover-glow"
            >
              Discuss an NGX data platform
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
