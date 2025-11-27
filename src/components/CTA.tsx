import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            İlk adımı atmaya hazır mısınız?
          </h2>
          
          <p className="text-base text-primary-foreground/80 mb-6">
            Randevu almak için iletişime geçin
          </p>
          
          <Button 
            size="default" 
            className="bg-background text-foreground hover:bg-background/90 h-11 px-6"
          >
            Randevu Al
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
