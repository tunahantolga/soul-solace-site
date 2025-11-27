import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqData = [
  {
    question: "TLDP nedir?",
    answer: "TLDP, Hanna Levenson tarafından geliştirilen, 16-20 seans süren problem odaklı kısa süreli psikoterapi yaklaşımıdır."
  },
  {
    question: "Seanslar ne kadar sürer?",
    answer: "Her seans 50 dakika sürer, genellikle haftada bir kez yapılır."
  },
  {
    question: "Terapi süreci ne kadar sürer?",
    answer: "TLDP yaklaşımında genellikle 16-20 seans önerilir. Kişiye göre değişiklik gösterebilir."
  },
  {
    question: "Online terapi var mı?",
    answer: "Evet, güvenli video konferans platformları kullanarak online terapi seansları sunuyorum."
  },
  {
    question: "Randevu nasıl alabilirim?",
    answer: "Telefon, e-posta veya online takvim sistemimden iletişime geçebilirsiniz."
  },
  {
    question: "Gizlilik nasıl korunur?",
    answer: "Tüm görüşmeler mutlak gizlilik içinde yapılır. Sadece yasal zorunluluklar veya yazılı onayınız olmadan bilgi paylaşılmaz."
  },
  {
    question: "Hangi konularda yardım alabilirim?",
    answer: "Depresyon, anksiyete, travma, kişilik bozuklukları, ilişki sorunları, yas süreci ve kişisel gelişim konularında destek sunuyorum."
  }
];

const SSS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                Sıkça Sorulan Sorular
              </h1>
              <p className="text-base text-muted-foreground">
                Terapi süreci hakkında merak edilenler
              </p>
            </div>

            {/* FAQ */}
            <Card className="border border-border">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                      <AccordionTrigger className="text-left text-sm hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SSS;
