import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const doctorTakvimiUrl = "https://www.doktortakvimi.com/ibrahim-sari-4/psikoloji/istanbul";

const testimonials = [
  {
    name: "m.....",
    comment:
      "Bu zamana kadar aldığım en doğru karar İbrahim Hoca'dan destek almak oldu diyebilirim. Terapideki kabul alanı ve kapsayıcılık bana kendimi sorgulama ve çözüm üretme cesareti verdi.",
    rating: 5,
    role: "DoktorTakvimi Yorumu",
    date: "23 Mayıs 2022"
  },
  {
    name: "h.....",
    comment:
      "Yaklaşık 7 ay sonunda olaylara daha sağlıklı yorum yapabildiğimi hissediyorum. Bu terapi süreci hayatımı iyi yönde değiştirdi.",
    rating: 5,
    role: "DoktorTakvimi Yorumu",
    date: "13 Ocak 2022"
  },
  {
    name: "ze...r",
    comment:
      "Yaklaşık 8 aylık süreçte problemlerimi çözme becerisi kazandım. Bu yazıyı okuyorsanız mutlaka deneyin ve kararlı olun derim.",
    rating: 5,
    role: "DoktorTakvimi Yorumu",
    date: "29 Eylül 2021"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Danışan Görüşleri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gerçek Deneyimler
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
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
              
              <CardContent className="p-5 sm:p-6 relative z-10">
                {/* Quote icon */}
                <div className="w-12 h-12 bg-primary/15 border border-primary/20 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-all duration-300">
                  <Quote className="h-6 w-6 text-primary" />
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
                      {testimonial.role} • {testimonial.date}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={doctorTakvimiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
          >
            Tüm yorumları DoktorTakvimi'nde görüntüle
          </a>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
