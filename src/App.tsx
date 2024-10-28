import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/admin/Dashboard";
import Users from "./pages/admin/Users";
import Listings from "./pages/admin/Listings";
import Settings from "./pages/admin/Settings";
import CreateListing from "./pages/CreateListing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<ProductDetails />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/criar-anuncio" element={<CreateListing />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/usuarios" element={<Users />} />
          <Route path="/admin/anuncios" element={<Listings />} />
          <Route path="/admin/configuracoes" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;