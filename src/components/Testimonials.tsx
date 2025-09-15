import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Daniel Rivera",
    comment: "Çok zor bir ayrılık yaşıyordum ve danışmanlık bana iyileşme araçları verdi. İlk günden itibaren kendimi güvende, duyulmuş ve saygı görmüş hissettim.",
    rating: 5
  },
  {
    name: "Emily Carson",
    comment: "Terapi hayatımı değiştirdi. Yıllarca kaygımı gizledikten sonra nihayet açıldım - ve bunu yaptığım için çok minnettarım. Danışmanım inanılmaz derecede nazik ve destekleyiciydi.",
    rating: 5
  },
  {
    name: "Hannah Mitchell",
    comment: "Babama kaybettikten sonra derinden mücadele ediyordum. Yas terapistim acıya yer açmama, onun beni tanımlamasına izin vermememe yardım etti.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            <span className="block">Gerçek Deneyimler</span>
            <span className="block text-slate-600">Gerçek Sonuçlar</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Terapi sürecinden geçen danışanlarımın geri bildirimlerini okuyarak, size nasıl destek olabileceğim hakkında fikir edinebilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote icon */}
                  <Quote className="h-10 w-10 text-slate-300 group-hover:text-slate-400 transition-colors duration-300" />
                  
                  {/* Comment */}
                  <p className="text-slate-600 leading-relaxed text-lg italic group-hover:text-slate-800 transition-colors duration-300">
                    "{testimonial.comment}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-900 group-hover:scale-110 transition-all duration-500">
                      <span className="text-slate-600 font-semibold text-lg group-hover:text-white transition-colors duration-500">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg group-hover:text-slate-700 transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 100}ms`}} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-slate-50 rounded-2xl p-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <span className="text-slate-900 font-semibold">%100 Gizlilik</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <span className="text-slate-900 font-semibold">4.7/5 Ortalama</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              <span className="text-slate-900 font-semibold">300+ Mutlu Danışan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;