import { DashboardLayout } from "@/components/DashboardLayout";
import { ChatInterface } from "@/components/ChatInterface";
import { SuggestedFeatures } from "@/components/SuggestedFeatures";
import { PriorityScoreCards } from "@/components/PriorityScoreCards";
import { UploadWidget } from "@/components/UploadWidget";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex h-screen">
        {/* Main chat area */}
        <div className="flex-1 flex flex-col border-r border-border min-w-0">
          <ChatInterface />
        </div>

        {/* Right panel */}
        <div className="w-80 flex-shrink-0 overflow-y-auto p-4 space-y-6 hidden lg:block">
          <PriorityScoreCards />
          <SuggestedFeatures />
          <UploadWidget />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
