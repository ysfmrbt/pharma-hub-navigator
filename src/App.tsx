import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import { DashboardLayout } from "./components/DashboardLayout";
import { lazy, Suspense } from "react";

const queryClient = new QueryClient();

// Lazy load dashboard pages
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Medicines = lazy(() => import("./pages/dashboard/Medicines"));
const Prescriptions = lazy(() => import("./pages/dashboard/Prescriptions"));
const Pharmacists = lazy(() => import("./pages/dashboard/Pharmacists"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashboardLayout><Navigate to="/dashboard/prescriptions" replace /></DashboardLayout>} />
            <Route path="/dashboard/medicines" element={<DashboardLayout><Medicines /></DashboardLayout>} />
            <Route path="/dashboard/prescriptions" element={<DashboardLayout><Prescriptions /></DashboardLayout>} />
            <Route path="/dashboard/pharmacists" element={<DashboardLayout><Pharmacists /></DashboardLayout>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;