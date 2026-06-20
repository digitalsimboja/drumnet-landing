import { Activity, Battery } from "lucide-react";
import { CapabilityCard } from "./CapabilityCard";

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 md:py-32 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Products &amp; Capabilities
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Specialized infrastructure for demanding workloads
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <CapabilityCard
            icon={<Activity className="w-6 h-6" />}
            title="Financial Market Data Engines"
            description="Ultra-low latency market data processing for institutional trading systems. Real-time streaming pipelines handling millions of messages per second."
            features={[
              "Sub-microsecond tick-to-trade latency",
              "Real-time streaming pipelines",
              "Order book reconstruction",
              "Exchange connectivity",
            ]}
          />
          <CapabilityCard
            icon={<Battery className="w-6 h-6" />}
            title="IoT & Solar Energy Telemetry"
            description="High-frequency metric ingestion for renewable energy monitoring systems. Comprehensive battery health and panel performance analytics."
            features={[
              "High-frequency metric ingestion",
              "Battery health monitoring",
              "Panel performance analytics",
              "Predictive maintenance alerts",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
