import { DashboardLayout } from "@/components/DashboardLayout";
import { Upload, FileSpreadsheet, FileText, FileIcon, CheckCircle2, Clock } from "lucide-react";

const recentUploads = [
  { name: "customer_feedback_q4.csv", type: "CSV", status: "Processed", date: "2 hours ago", rows: "2,847" },
  { name: "product_roadmap.pdf", type: "PDF", status: "Processed", date: "1 day ago", rows: "—" },
  { name: "churn_data_2024.csv", type: "CSV", status: "Processing", date: "Just now", rows: "12,304" },
  { name: "notion_export.json", type: "Notion", status: "Processed", date: "3 days ago", rows: "456" },
];

const typeIcon = { CSV: FileSpreadsheet, PDF: FileText, Notion: FileIcon };

const Uploads = () => {
  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Uploads</h1>
          <p className="text-sm text-muted-foreground mt-1">Upload your product data to fuel AI insights</p>
        </div>

        {/* Upload area */}
        <div className="glass-panel p-8 flex flex-col items-center gap-3 hover:border-primary/30 transition-colors cursor-pointer">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Upload className="w-7 h-7 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">
            Drop files here or <span className="text-primary cursor-pointer font-medium">browse</span>
          </p>
          <p className="text-xs text-muted-foreground">Supports CSV, PDF, Notion exports, JSON</p>
        </div>

        {/* Recent uploads */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold">Recent Uploads</h2>
          <div className="space-y-2">
            {recentUploads.map((file, i) => {
              const Icon = typeIcon[file.type as keyof typeof typeIcon] || FileIcon;
              return (
                <div key={i} className="glass-panel p-3.5 flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{file.rows} rows · {file.date}</p>
                  </div>
                  <div className={`flex items-center gap-1 text-xs ${file.status === "Processed" ? "text-success" : "text-warning"}`}>
                    {file.status === "Processed" ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                    {file.status}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Uploads;
