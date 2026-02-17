import { TrendingUp, Zap, DollarSign, AlertTriangle } from "lucide-react";

const features = [
  {
    title: "SSO Integration",
    description: "Enterprise single sign-on support",
    impact: 92,
    effort: "Medium",
    revenue: "+$48K MRR",
    icon: Zap,
    tag: "High Priority",
    tagColor: "text-success" as const,
  },
  {
    title: "API v2 Endpoints",
    description: "RESTful API redesign with GraphQL",
    impact: 87,
    effort: "High",
    revenue: "+$32K MRR",
    icon: TrendingUp,
    tag: "Strategic",
    tagColor: "text-primary" as const,
  },
  {
    title: "Advanced Analytics",
    description: "Custom dashboards & reporting",
    impact: 78,
    effort: "Medium",
    revenue: "+$21K MRR",
    icon: DollarSign,
    tag: "Quick Win",
    tagColor: "text-warning" as const,
  },
  {
    title: "Data Export Overhaul",
    description: "Reduce churn with better exports",
    impact: 71,
    effort: "Low",
    revenue: "+$15K MRR",
    icon: AlertTriangle,
    tag: "Churn Risk",
    tagColor: "text-destructive" as const,
  },
];

export function SuggestedFeatures() {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
        Suggested Features
      </h3>
      {features.map((f, i) => (
        <div
          key={f.title}
          className="glass-panel p-3.5 hover:border-primary/30 transition-colors cursor-pointer animate-slide-in-right"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <f.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-medium truncate">{f.title}</h4>
                <span className={`text-[10px] font-medium ${f.tagColor}`}>{f.tag}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{f.description}</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-muted-foreground">Impact</span>
                  <div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-gradient-end"
                      style={{ width: `${f.impact}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-medium">{f.impact}</span>
                </div>
                <span className="text-[10px] text-muted-foreground">
                  Effort: {f.effort}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
