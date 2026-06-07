import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import OurWork from "@/pages/OurWork";
import ProjectDetail from "@/pages/ProjectDetail";
import JoinUs from "@/pages/JoinUs";
import Gallery from "@/pages/Gallery";
import FloatingDonate from "@/components/FloatingDonate";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/our-work" component={OurWork} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/join-us" component={JoinUs} />
      <Route path="/gallery" component={Gallery} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
          <FloatingDonate />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
