
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TopicSelection from "./pages/TopicSelection";
import TopicTest from "./pages/TopicTest";
import TestResults from "./pages/TestResults";
import About from "./pages/About";
import OnlineSources from "./pages/OnlineSources";
import Contact from "./pages/Contact";
import Progress from "./pages/Progress";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/topic-selection" element={<TopicSelection />} />
          <Route path="/mock-test" element={<TopicSelection />} />
          <Route path="/mock-test/:topic" element={<TopicTest />} />
          <Route path="/mock-test/:topic/results" element={<TestResults />} />
          <Route path="/about" element={<About />} />
          <Route path="/sources" element={<OnlineSources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/progress" element={<Progress />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
