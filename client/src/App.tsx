import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import DashboardLayout from "./components/DashboardLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import OpsFlow from "@/pages/OpsFlow";
import AlignIQ from "@/pages/AlignIQ";
import TrustDesk from "@/pages/TrustDesk";
import GrowthLab from "@/pages/GrowthLab";
import GrowthLanding from "@/pages/GrowthLanding";

function Router() {
  return <DashboardLayout><Switch><Route path="/" component={Home} /><Route path="/pipeline" component={Home} /><Route path="/operations" component={Home} /><Route path="/process" component={Home} /><Route path="/methodology" component={Home} /><Route path="/opsflow" component={OpsFlow} /><Route path="/opsflow/process" component={OpsFlow} /><Route path="/opsflow/automation" component={OpsFlow} /><Route path="/opsflow/dashboard" component={OpsFlow} /><Route path="/opsflow/integrations" component={OpsFlow} /><Route path="/aligniq" component={AlignIQ} /><Route path="/aligniq/overview" component={AlignIQ} /><Route path="/aligniq/taxonomy" component={AlignIQ} /><Route path="/aligniq/evaluation" component={AlignIQ} /><Route path="/trustdesk" component={TrustDesk} /><Route path="/growthlab" component={GrowthLanding} /><Route path="/growthlab/overview" component={GrowthLab} /><Route path="/growthlab/events" component={GrowthLab} /><Route path="/growthlab/experiments" component={GrowthLab} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch></DashboardLayout>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
