
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
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
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public route - Homepage */}
            <Route path="/" element={<Index />} />
            
            {/* Protected routes - Require authentication */}
            <Route path="/topic-selection" element={
              <ProtectedRoute>
                <TopicSelection />
              </ProtectedRoute>
            } />
            <Route path="/mock-test" element={
              <ProtectedRoute>
                <TopicSelection />
              </ProtectedRoute>
            } />
            <Route path="/mock-test/:topic" element={
              <ProtectedRoute>
                <TopicTest />
              </ProtectedRoute>
            } />
            <Route path="/mock-test/:topic/results" element={
              <ProtectedRoute>
                <TestResults />
              </ProtectedRoute>
            } />
            <Route path="/about" element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            } />
            <Route path="/sources" element={
              <ProtectedRoute>
                <OnlineSources />
              </ProtectedRoute>
            } />
            <Route path="/contact" element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            } />
            <Route path="/progress" element={
              <ProtectedRoute>
                <Progress />
              </ProtectedRoute>
            } />
            
            {/* 404 page - Also protected */}
            <Route path="*" element={
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
