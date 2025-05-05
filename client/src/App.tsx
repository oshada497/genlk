import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import IntroAnimation from "@/components/intro-animation";
import { useGsapButtonHoverEffect } from "@/hooks/use-gsap";
import BackgroundMusic from "@/components/background-music";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useGsapButtonHoverEffect();
  return (
    <QueryClientProvider client={queryClient}>
      <IntroAnimation />
      <Router />
      <Toaster />
      <BackgroundMusic />
    </QueryClientProvider>
  );
}

export default App;
