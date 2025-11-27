import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Hakkimda from "./pages/Hakkimda";
import SSS from "./pages/SSS";
import Iletisim from "./pages/Iletisim";
import BireyselTerapi from "./pages/BireyselTerapi";
import CiftTerapisi from "./pages/CiftTerapisi";
import AileTerapisi from "./pages/AileTerapisi";
import GencDanismanligi from "./pages/GencDanismanligi";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('App component rendering...');
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/hakkimda" element={<Hakkimda />} />
            <Route path="/sss" element={<SSS />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/bireysel-terapi" element={<BireyselTerapi />} />
            <Route path="/cift-terapisi" element={<CiftTerapisi />} />
            <Route path="/aile-terapisi" element={<AileTerapisi />} />
            <Route path="/genc-danismanligi" element={<GencDanismanligi />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
