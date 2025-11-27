import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "D.R.",
    comment: "Terapi sürecinde kendimi güvende hissettim. Profesyonel yaklaşım ve içten destek için teşekkürler.",
    rating: 5,
    role: "Bireysel Terapi"
  },
  {
    name: "E.C.",
    comment: "Yıllardır kaygı ile mücadele ediyordum. Sonunda konuşabileceğim güvenli bir alan buldum.",
    rating: 5,
    role: "Anksiyete Terapisi"
  },
  {
    name: "H.M.",
    comment: "Kayıp sonrası yaşadığım zorlukta destek oldular. Acıyla baş etmeyi öğrendim.",
    rating: 5,
    role: "Yas Terapisi"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Danışan Görüşleri</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gerçek Deneyimler
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Terapi sürecinden geçen danışanlarımızın deneyimleri
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-premium overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-6 relative z-10">
                {/* Quote icon with gradient */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-xl flex items-center justify-center mb-4 shadow-button group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Quote className="h-6 w-6 text-white" />
                </div>
                
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform duration-300" 
                      style={{transitionDelay: `${i * 50}ms`}}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-300">
                  "{testimonial.comment}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent-blue/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.split('')[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full hover:border-primary/50 hover:shadow-soft transition-all duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">%100 Gizlilik</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full hover:border-primary/50 hover:shadow-soft transition-all duration-300">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm font-medium text-foreground">4.9/5 Ortalama</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full hover:border-primary/50 hover:shadow-soft transition-all duration-300">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">300+ Mutlu Danışan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
