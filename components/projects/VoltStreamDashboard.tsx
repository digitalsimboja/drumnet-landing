import { AlertTriangle, Battery, Radio, Thermometer } from "lucide-react";
import { StatCard } from "./StatCard";

const fleet = [
  { id: "BAT-0023-EXC", type: "Excavator", temp: "42.3°C", soc: "73%", status: "normal" },
  { id: "BAT-0041-DRL", type: "Drill Rig", temp: "38.1°C", soc: "61%", status: "normal" },
  { id: "BAT-0017-HUL", type: "Haul Truck", temp: "81.2°C", soc: "48%", status: "critical" },
  { id: "BAT-0055-SOL", type: "Solar Array", temp: "36.4°C", soc: "89%", status: "normal" },
  { id: "BAT-0032-INV", type: "Inverter Bank", temp: "44.0°C", soc: "67%", status: "warning" },
];

const alerts = [
  {
    id: "BAT-0017-HUL",
    message: "Temperature 81.2°C exceeds 80°C threshold",
    severity: "critical" as const,
  },
  {
    id: "BAT-0032-INV",
    message: "SoC degradation rate 2.4× above fleet baseline",
    severity: "warning" as const,
  },
];

const throughput = [62, 71, 68, 74, 79, 83, 81, 88, 85, 92, 89, 94];

function statusColor(status: string) {
  if (status === "critical") return "bg-red-500";
  if (status === "warning") return "bg-amber-400";
  return "bg-neon-green";
}

export function VoltStreamDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Fleet online" value="500" detail="Machines reporting live" accent="green" />
        <StatCard label="Ingestion rate" value="247/s" detail="Packets per second" />
        <StatCard label="Fleet health" value="98.7%" detail="Within operating thresholds" accent="green" />
        <StatCard label="Active alerts" value="3" detail="2 critical · 1 warning" accent="amber" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-850 p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">Fleet status</h3>
              <p className="text-xs text-gray-400">Latest telemetry per asset</p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs text-neon-green">
              <Radio className="h-3.5 w-3.5" />
              Live stream
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {fleet.map((machine) => (
              <div
                key={machine.id}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${statusColor(machine.status)}`} />
                  <span className="font-mono text-xs font-semibold text-white">{machine.id}</span>
                </div>
                <p className="mt-1 text-xs text-gray-400">{machine.type}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-gray-300">
                  <span className="inline-flex items-center gap-1">
                    <Thermometer className="h-3.5 w-3.5 text-neon-cyan" />
                    {machine.temp}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Battery className="h-3.5 w-3.5 text-neon-cyan" />
                    {machine.soc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-850 p-6">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-400" />
            <h3 className="text-sm font-semibold text-white">Predictive alerts</h3>
          </div>
          <ul className="space-y-3">
            {alerts.map((alert) => (
              <li
                key={alert.id}
                className="rounded-lg border border-slate-800 bg-slate-950/60 p-3"
              >
                <p className="font-mono text-xs font-semibold text-white">{alert.id}</p>
                <p className="mt-1 text-xs leading-5 text-gray-300">{alert.message}</p>
                <p
                  className={`mt-2 text-[10px] font-mono uppercase tracking-wider ${
                    alert.severity === "critical" ? "text-red-400" : "text-amber-400"
                  }`}
                >
                  {alert.severity}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-850 p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">Ingestion throughput</h3>
            <p className="text-xs text-gray-400">Last 60 seconds</p>
          </div>
          <span className="text-xs font-mono text-neon-cyan">Peak 247 pkt/s</span>
        </div>
        <div className="flex h-28 items-end gap-2">
          {throughput.map((value, index) => (
            <div
              key={index}
              className="flex-1 rounded-t bg-gradient-to-t from-neon-cyan/20 to-neon-cyan"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
