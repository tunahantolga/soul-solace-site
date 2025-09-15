import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="block">İyileşme yolculuğunuz</span>
            <span className="block text-slate-300">küçük bir adımla başlar —</span>
            <span className="block text-slate-300">ulaşmak.</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            İyileşme yolculuğunuz küçük bir adımla başlar — ulaşmak.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Randevu Al
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;