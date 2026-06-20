import { Activity, Clock, Layers, TrendingUp } from "lucide-react";
import { StatCard } from "./StatCard";

const symbols = [
  { symbol: "DANGCEM", price: "₦285.50", change: "+1.24%", volume: "2.4M" },
  { symbol: "GTCO", price: "₦98.20", change: "+0.82%", volume: "8.1M" },
  { symbol: "MTNN", price: "₦210.00", change: "-0.31%", volume: "1.2M" },
  { symbol: "ZENITHBANK", price: "₦36.85", change: "+0.55%", volume: "14.6M" },
  { symbol: "BUACEMENT", price: "₦112.30", change: "+2.01%", volume: "980K" },
];

const feedHealth = [
  { channel: "Equities L1", latency: "0.8ms", status: "healthy" },
  { channel: "Order book", latency: "1.2ms", status: "healthy" },
  { channel: "Trade tape", latency: "0.6ms", status: "healthy" },
  { channel: "Index feed", latency: "2.1ms", status: "degraded" },
];

const latencyTrend = [88, 84, 79, 76, 74, 71, 69, 68, 67, 66, 65, 64];

export function NgxTradingDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Tick throughput" value="1.2M/s" detail="Peak during market open" />
        <StatCard label="P99 latency" value="0.9ms" detail="Tick-to-client delivery" accent="green" />
        <StatCard label="Active symbols" value="168" detail="NGX-listed instruments" />
        <StatCard label="API requests" value="18.4K/s" detail="Entitlement-aware distribution" accent="green" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-850 p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Market watchlist</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Normalized NGX equity feed</p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs text-neon-green">
              <Activity className="h-3.5 w-3.5" />
              Streaming
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase tracking-wider text-gray-500 dark:bg-slate-950/60 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Symbol</th>
                  <th className="px-4 py-3">Last</th>
                  <th className="px-4 py-3">Change</th>
                  <th className="px-4 py-3">Volume</th>
                </tr>
              </thead>
              <tbody>
                {symbols.map((row) => (
                  <tr key={row.symbol} className="border-t border-slate-200 text-gray-600 dark:border-slate-800 dark:text-gray-300">
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900 dark:text-slate-900 dark:text-white">{row.symbol}</td>
                    <td className="px-4 py-3">{row.price}</td>
                    <td
                      className={`px-4 py-3 ${
                        row.change.startsWith("+") ? "text-neon-green" : "text-red-400"
                      }`}
                    >
                      {row.change}
                    </td>
                    <td className="px-4 py-3">{row.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-850 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Layers className="h-4 w-4 text-neon-cyan" />
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Feed health</h3>
          </div>
          <ul className="space-y-3">
            {feedHealth.map((feed) => (
              <li
                key={feed.channel}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/60 px-3 py-3"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">{feed.channel}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="h-3 w-3" />
                    {feed.latency}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider ${
                    feed.status === "healthy" ? "text-neon-green" : "text-amber-400"
                  }`}
                >
                  {feed.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-850 p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">End-to-end latency</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Exchange ingress to ISV API response</p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-mono text-neon-cyan">
            <TrendingUp className="h-3.5 w-3.5" />
            P99 0.9ms
          </span>
        </div>
        <div className="flex h-28 items-end gap-2">
          {latencyTrend.map((value, index) => (
            <div
              key={index}
              className="flex-1 rounded-t bg-gradient-to-t from-neon-green/20 to-neon-green"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
