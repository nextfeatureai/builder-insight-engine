import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

const scores = [
  { label: "Priority Score", value: "87", change: "+12%", trend: "up" as const },
  { label: "Customer Demand", value: "2.4K", change: "+8%", trend: "up" as const },
  { label: "Churn Risk", value: "14%", change: "-3%", trend: "down" as const },
  { label: "Revenue Impact", value: "$96K", change: "0%", trend: "neutral" as const },
];

export function PriorityScoreCards() {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
        Priority Metrics
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {scores.map((s, i) => (
          <div
            key={s.label}
            className="glass-panel p-3 animate-fade-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <p className="text-[10px] text-muted-foreground">{s.label}</p>
            <div className="flex items-end justify-between mt-1">
              <span className="text-lg font-bold">{s.value}</span>
              <div
                className={`flex items-center gap-0.5 text-[10px] font-medium ${
                  s.trend === "up"
                    ? "text-success"
                    : s.trend === "down"
                    ? "text-destructive"
                    : "text-muted-foreground"
                }`}
              >
                {s.trend === "up" && <ArrowUpRight className="w-3 h-3" />}
                {s.trend === "down" && <ArrowDownRight className="w-3 h-3" />}
                {s.trend === "neutral" && <Minus className="w-3 h-3" />}
                {s.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
