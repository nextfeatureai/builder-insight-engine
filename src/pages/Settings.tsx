import { DashboardLayout } from "@/components/DashboardLayout";
import { User, Bell, Shield, Palette } from "lucide-react";

const sections = [
  { title: "Profile", icon: User, fields: [
    { label: "Name", value: "Alex Chen", type: "text" },
    { label: "Email", value: "alex@buildpilot.io", type: "email" },
    { label: "Role", value: "Founder & CEO", type: "text" },
  ]},
  { title: "Notifications", icon: Bell, fields: [
    { label: "Email notifications", value: true, type: "toggle" },
    { label: "Weekly digest", value: true, type: "toggle" },
    { label: "Insight alerts", value: false, type: "toggle" },
  ]},
];

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="p-6 max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your account and preferences</p>
        </div>

        {sections.map((section, si) => (
          <div key={section.title} className="glass-panel p-5 space-y-4 animate-fade-in" style={{ animationDelay: `${si * 80}ms` }}>
            <div className="flex items-center gap-2">
              <section.icon className="w-4 h-4 text-primary" />
              <h2 className="text-sm font-semibold">{section.title}</h2>
            </div>
            <div className="space-y-3">
              {section.fields.map((field) => (
                <div key={field.label} className="flex items-center justify-between">
                  <label className="text-sm text-muted-foreground">{field.label}</label>
                  {field.type === "toggle" ? (
                    <button className={`w-9 h-5 rounded-full transition-colors relative ${field.value ? "bg-primary" : "bg-muted"}`}>
                      <div className={`w-3.5 h-3.5 rounded-full bg-foreground absolute top-0.5 transition-transform ${field.value ? "translate-x-4" : "translate-x-0.5"}`} />
                    </button>
                  ) : (
                    <input
                      type={field.type}
                      defaultValue={field.value as string}
                      className="bg-muted rounded-lg px-3 py-1.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-primary w-56 text-right"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <button className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          Save Changes
        </button>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
