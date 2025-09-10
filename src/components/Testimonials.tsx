import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "A.Y.",
    comment: "Dr. Ayşe Hanım ile çalışmaya başladıktan sonra hayatımda çok önemli değişiklikler yaşadım. Kendime güvenim arttı ve ilişkilerimde daha sağlıklı iletişim kurabiliyorum.",
    rating: 5,
    therapy: "Bireysel Terapi"
  },
  {
    name: "M.K. & S.K.",
    comment: "Evlilik hayatımızda yaşadığımız sorunları çözme konusunda bize çok yardımcı oldu. Artık birbirimizi daha iyi anlıyoruz ve daha mutlu bir evliliğimiz var.",
    rating: 5,
    therapy: "Çift Terapisi"
  },
  {
    name: "E.D.",
    comment: "Online terapi seçeneği sayesinde evden çıkmadan destek alabilmek harika. Dr. Ayşe Hanım çok anlayışlı ve profesyonel yaklaşımı ile güven veriyor.",
    rating: 5,
    therapy: "Online Terapi"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-text-primary">
            Danışan <span className="text-primary">Görüşleri</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Terapi sürecinden geçen danışanlarımın geri bildirimlerini okuyarak, size nasıl destek olabileceğim hakkında fikir edinebilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-muted/20 border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-primary opacity-50" />
                  
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>

                  <p className="text-text-secondary italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-text-primary">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.therapy}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary">
            * Danışan gizliliği nedeniyle isimler gizlenmiştir. Tüm yorumlar gerçek deneyimleri yansıtmaktadır.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;