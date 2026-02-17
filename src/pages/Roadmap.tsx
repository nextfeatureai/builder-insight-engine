import { DashboardLayout } from "@/components/DashboardLayout";
import { GripVertical, Circle } from "lucide-react";

const columns = [
  {
    title: "Backlog",
    color: "bg-muted-foreground",
    items: [
      { title: "Dark Mode Support", effort: "Low", impact: 65, tag: "UI" },
      { title: "Webhooks v2", effort: "High", impact: 54, tag: "API" },
    ],
  },
  {
    title: "In Progress",
    color: "bg-warning",
    items: [
      { title: "SSO Integration", effort: "Medium", impact: 92, tag: "Enterprise" },
      { title: "API v2 Endpoints", effort: "High", impact: 87, tag: "Platform" },
    ],
  },
  {
    title: "Review",
    color: "bg-info",
    items: [
      { title: "Advanced Analytics", effort: "Medium", impact: 78, tag: "Analytics" },
    ],
  },
  {
    title: "Done",
    color: "bg-success",
    items: [
      { title: "User Onboarding Flow", effort: "Medium", impact: 81, tag: "Growth" },
      { title: "Billing Dashboard", effort: "Low", impact: 70, tag: "Payments" },
    ],
  },
];

const Roadmap = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 h-screen flex flex-col">
        <div>
          <h1 className="text-2xl font-bold">Roadmap</h1>
          <p className="text-sm text-muted-foreground mt-1">AI-prioritized product roadmap</p>
        </div>

        <div className="flex-1 flex gap-4 overflow-x-auto pb-4">
          {columns.map((col, ci) => (
            <div key={col.title} className="w-72 flex-shrink-0 flex flex-col animate-fade-in" style={{ animationDelay: `${ci * 80}ms` }}>
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2 h-2 rounded-full ${col.color}`} />
                <h3 className="text-sm font-semibold">{col.title}</h3>
                <span className="text-xs text-muted-foreground ml-auto">{col.items.length}</span>
              </div>
              <div className="space-y-2 flex-1">
                {col.items.map((item, i) => (
                  <div key={i} className="glass-panel p-3 hover:border-primary/30 transition-colors cursor-grab group">
                    <div className="flex items-start gap-2">
                      <GripVertical className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{item.title}</h4>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{item.tag}</span>
                          <span className="text-[10px] text-muted-foreground">Effort: {item.effort}</span>
                          <div className="flex items-center gap-1 ml-auto">
                            <div className="w-10 h-1 rounded-full bg-muted overflow-hidden">
                              <div className="h-full rounded-full bg-gradient-to-r from-primary to-gradient-end" style={{ width: `${item.impact}%` }} />
                            </div>
                            <span className="text-[10px] font-medium">{item.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Roadmap;
