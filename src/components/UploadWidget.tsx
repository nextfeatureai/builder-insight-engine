import { Upload, FileText, FileSpreadsheet, FileIcon } from "lucide-react";
import { useState } from "react";

export function UploadWidget() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
        Upload Data
      </h3>
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={() => setIsDragging(false)}
        className={`glass-panel p-4 flex flex-col items-center gap-2 transition-colors cursor-pointer ${
          isDragging ? "border-primary/50 bg-primary/5" : "hover:border-primary/30"
        }`}
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Upload className="w-5 h-5 text-primary" />
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Drop files here or <span className="text-primary cursor-pointer">browse</span>
        </p>
        <div className="flex gap-2 mt-1">
          {[
            { icon: FileSpreadsheet, label: "CSV" },
            { icon: FileText, label: "PDF" },
            { icon: FileIcon, label: "Notion" },
          ].map((f) => (
            <span
              key={f.label}
              className="flex items-center gap-1 text-[10px] text-muted-foreground px-2 py-0.5 rounded-full bg-muted"
            >
              <f.icon className="w-2.5 h-2.5" />
              {f.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
