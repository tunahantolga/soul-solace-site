import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Hakkimda from "./pages/Hakkimda";
import Iletisim from "./pages/Iletisim";
import BireyselTerapi from "./pages/BireyselTerapi";
import CiftTerapisi from "./pages/CiftTerapisi";
import AileTerapisi from "./pages/AileTerapisi";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/bireysel-terapi" element={<BireyselTerapi />} />
        <Route path="/cift-terapisi" element={<CiftTerapisi />} />
        <Route path="/aile-terapisi" element={<AileTerapisi />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
