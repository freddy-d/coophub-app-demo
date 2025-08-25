import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cooperados from "./pages/Cooperados";
import Operacoes from "./pages/Operacoes";
import Fiscal from "./pages/Fiscal";
import Governanca from "./pages/Governanca";
import AdminUsuarios from "./pages/AdminUsuarios";
import AdminUnidades from "./pages/AdminUnidades";
import AdminConfig from "./pages/AdminConfig";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cooperados" element={<Cooperados />} />
          <Route path="/operacoes" element={<Operacoes />} />
          <Route path="/fiscal" element={<Fiscal />} />
          <Route path="/governanca" element={<Governanca />} />
          <Route path="/admin/usuarios" element={<AdminUsuarios />} />
          <Route path="/admin/unidades" element={<AdminUnidades />} />
          <Route path="/admin/config" element={<AdminConfig />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
