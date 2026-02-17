import { DashboardLayout } from "@/components/DashboardLayout";
import { TrendingUp, Users, AlertTriangle, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";

const insights = [
  {
    title: "Feature Adoption Declining",
    description: "Export functionality usage dropped 23% this month. Correlates with increased churn in mid-market segment.",
    type: "warning" as const,
    icon: AlertTriangle,
    metric: "-23%",
    date: "Updated 2h ago",
  },
  {
    title: "Enterprise Demand Surge",
    description: "SSO and SAML requests increased 4x in the last 30 days. 12 enterprise prospects blocked on this.",
    type: "opportunity" as const,
    icon: TrendingUp,
    metric: "+4x",
    date: "Updated 5h ago",
  },
  {
    title: "NPS Score Improving",
    description: "Net Promoter Score rose from 42 to 58 after the recent UI overhaul. Promoters up 31%.",
    type: "positive" as const,
    icon: Users,
    metric: "+16pts",
    date: "Updated 1d ago",
  },
  {
    title: "Revenue Opportunity",
    description: "Implementing tiered pricing could capture $180K in annual revenue from power users currently on free plans.",
    type: "opportunity" as const,
    icon: DollarSign,
    metric: "$180K",
    date: "Updated 3d ago",
  },
];

const typeStyles = {
  warning: "border-l-warning text-warning",
  opportunity: "border-l-primary text-primary",
  positive: "border-l-success text-success",
};

const Insights = () => {
  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Insights</h1>
          <p className="text-sm text-muted-foreground mt-1">AI-generated insights from your product data</p>
        </div>

        <div className="space-y-3">
          {insights.map((insight, i) => (
            <div
              key={i}
              className={`glass-panel p-4 border-l-2 ${typeStyles[insight.type]} animate-fade-in cursor-pointer hover:border-primary/30 transition-colors`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <insight.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-foreground">{insight.title}</h3>
                    <span className="text-lg font-bold">{insight.metric}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{insight.description}</p>
                  <p className="text-[10px] text-muted-foreground mt-2">{insight.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Insights;
