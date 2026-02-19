import { DashboardLayout } from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  MessageSquare,
  FileSpreadsheet,
  GitBranch,
  Trello,
  Mail,
  BarChart3,
  Plug,
  Check,
  ExternalLink,
  Unplug,
} from "lucide-react";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  category: "communication" | "data" | "project" | "analytics";
  connected: boolean;
}

const integrations: Integration[] = [
  {
    id: "slack",
    name: "Slack",
    description: "Import feedback from Slack channels and threads automatically.",
    icon: MessageSquare,
    category: "communication",
    connected: false,
  },
  {
    id: "csv",
    name: "CSV / Spreadsheet",
    description: "Upload CSV or Excel files with structured feedback data.",
    icon: FileSpreadsheet,
    category: "data",
    connected: true,
  },
  {
    id: "github",
    name: "GitHub",
    description: "Sync issues, discussions, and PRs as feedback signals.",
    icon: GitBranch,
    category: "project",
    connected: false,
  },
  {
    id: "jira",
    name: "Jira",
    description: "Pull feature requests and bug reports from Jira boards.",
    icon: Trello,
    category: "project",
    connected: false,
  },
  {
    id: "email",
    name: "Email / Helpdesk",
    description: "Connect support inboxes to extract user pain points.",
    icon: Mail,
    category: "communication",
    connected: false,
  },
  {
    id: "mixpanel",
    name: "Mixpanel",
    description: "Correlate product usage analytics with qualitative feedback.",
    icon: BarChart3,
    category: "analytics",
    connected: false,
  },
];

const categoryLabels: Record<string, string> = {
  all: "All",
  communication: "Communication",
  data: "Data Sources",
  project: "Project Management",
  analytics: "Analytics",
};

const Integrations = () => {
  const [filter, setFilter] = useState("all");
  const [connections, setConnections] = useState<Record<string, boolean>>(
    Object.fromEntries(integrations.map((i) => [i.id, i.connected]))
  );
  const [disconnectTarget, setDisconnectTarget] = useState<string | null>(null);

  const handleConnect = (id: string) => {
    setConnections((prev) => ({ ...prev, [id]: true }));
    const name = integrations.find((i) => i.id === id)?.name;
    toast({ title: `${name} connected`, description: "Integration is now active." });
  };

  const handleDisconnect = () => {
    if (!disconnectTarget) return;
    setConnections((prev) => ({ ...prev, [disconnectTarget]: false }));
    const name = integrations.find((i) => i.id === disconnectTarget)?.name;
    toast({ title: `${name} disconnected`, description: "Integration has been removed." });
    setDisconnectTarget(null);
  };

  const filtered =
    filter === "all"
      ? integrations
      : integrations.filter((i) => i.category === filter);

  return (
    <DashboardLayout>
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Integrations</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Connect your tools to feed data into BuildPilot
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Integration cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((integration, i) => {
            const isConnected = connections[integration.id];
            return (
              <div
                key={integration.id}
                className="glass-panel p-5 flex flex-col gap-4 animate-fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <integration.icon className="w-5 h-5 text-primary" />
                  </div>
                  {isConnected && (
                    <Badge
                      variant="outline"
                      className="text-success border-success/30 bg-success/10 text-[10px]"
                    >
                      <Check className="w-3 h-3 mr-1" />
                      Connected
                    </Badge>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{integration.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {integration.description}
                  </p>
                </div>

                {isConnected ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs"
                    onClick={() => setDisconnectTarget(integration.id)}
                  >
                    <Unplug className="w-3.5 h-3.5" />
                    Disconnect
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="w-full text-xs"
                    onClick={() => handleConnect(integration.id)}
                  >
                    <Plug className="w-3.5 h-3.5" />
                    Connect
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Disconnect confirmation dialog */}
      <AlertDialog open={!!disconnectTarget} onOpenChange={(open) => !open && setDisconnectTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Disconnect integration?</AlertDialogTitle>
            <AlertDialogDescription>
              This will remove the connection to{" "}
              <span className="font-medium text-foreground">
                {integrations.find((i) => i.id === disconnectTarget)?.name}
              </span>
              . You can reconnect at any time.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDisconnect}>Disconnect</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DashboardLayout>
  );
};

export default Integrations;
