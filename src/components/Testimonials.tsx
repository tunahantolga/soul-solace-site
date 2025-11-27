import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "D.R.",
    comment: "Terapi sürecinde kendimi güvende hissettim. Profesyonel yaklaşım ve içten destek için teşekkürler."
  },
  {
    name: "E.C.",
    comment: "Yıllardır kaygı ile mücadele ediyordum. Sonunda konuşabileceğim güvenli bir alan buldum."
  },
  {
    name: "H.M.",
    comment: "Kayıp sonrası yaşadığım zorlukta destek oldular. Acıyla baş etmeyi öğrendim."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Danışan Görüşleri
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Terapi sürecinden geçen danışanlarımın deneyimleri
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border border-border hover:shadow-md transition-all duration-300"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.comment}"
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
