import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Pages
import Home from "@/pages/Home";
import ReviewDetail from "@/pages/ReviewDetail";
import Category from "@/pages/Category";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Disclosure from "@/pages/Disclosure";
import Collection from "@/pages/Collection";

// Static Pages (Will be created in next step, but importing now to set up router)
// We will create a placeholder or import them dynamically. For now, let's use a lazy load or just expect them.
// Actually, I'll create the router structure now and let it break or I can create empty files first.
// I'll create the empty files in the next step, so for now I won't import them to avoid errors.
// Wait, I must ensure App.tsx compiles. I will use "lazy" or just stub components here if I haven't created them.
// But the plan says Task 6 is core pages, Task 7 is static pages.
// So I will just add Home and ReviewDetail now, and add the others in Task 7.

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/review/:slug" component={ReviewDetail} />
        <Route path="/category/:name" component={Category} />
        <Route path="/collection/:slug" component={Collection} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/disclosure" component={Disclosure} />
        
        {/* Placeholders for Task 7 - Routes will be added then, or I can add them now and they will 404 until components exist? No, better to add routes when components exist to avoid import errors. */}
        {/* I'll wait for Task 7 to add static routes to App.tsx, or creates stubs now. Stubs are safer. */}
        
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        
      <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
