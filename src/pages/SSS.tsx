import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Clock, Phone, Shield, Calendar, CreditCard } from "lucide-react";

const faqData = [
  {
    question: "TLDP (Zaman Sınırlı Dinamik Psikoterapi) nedir?",
    answer: "TLDP, Hanna Levenson tarafından geliştirilen, genellikle 16-20 seans süren, problem odaklı kısa süreli bir psikoterapi yaklaşımıdır. Kişilerarası ilişki kalıplarına odaklanır ve geçmiş deneyimlerin bugünkü ilişkilere nasıl yansıdığını araştırır."
  },
  {
    question: "Seanslar ne kadar sürer ve hangi sıklıkta yapılır?",
    answer: "Her seans 50 dakika sürmektedir. Genellikle haftada bir kez, bazı durumlarda haftada iki kez görüşme yapılır. Terapi sürecinin başında daha sık görüşmeler gerekebilir."
  },
  {
    question: "Terapi süreci ne kadar sürer?",
    answer: "TLDP yaklaşımında genellikle 16-20 seans önerilir. Ancak kişilik bozuklukları gibi daha karmaşık durumlar daha uzun sürebilir. Her danışanın ihtiyacı farklı olduğu için süre kişiye göre belirlenir."
  },
  {
    question: "Online terapi seçeneği var mı?",
    answer: "Evet, güvenli video konferans platformları kullanarak online terapi seansları sunuyorum. Online terapi, yüz yüze terapi kadar etkilidir ve özellikle pandemi sonrası yaygın hale gelmiştir."
  },
  {
    question: "Randevu nasıl alabilirim?",
    answer: "Randevu almak için telefon, e-posta yoluyla veya online takvim sistemimden iletişime geçebilirsiniz. İlk değerlendirme görüşmesi genellikle 1-2 hafta içinde ayarlanabilir."
  },
  {
    question: "Seans ücretleri nelerdir?",
    answer: "Bireysel terapi seansları 1200₺'dir. İlk değerlendirme görüşmesi de aynı ücrettir. Ödeme seansın sonunda nakit veya kredi kartı ile yapılabilir. SGK anlaşmamız bulunmamaktadır."
  },
  {
    question: "Gizlilik nasıl korunur?",
    answer: "Tüm görüşmeler mutlak gizlilik içinde yapılır. Sadece yasal zorunluluklar veya sizin yazılı onayınız olmadan hiçbir bilgi üçüncü kişilerle paylaşılmaz. Bu, psikolog meslek etiği kurallarının temel gereksinimlerinden biridir."
  },
  {
    question: "Hangi konularda yardım alabilirim?",
    answer: "Depresyon, anksiyete, travma (PTSD), kişilik bozuklukları, dissosiyatif bozukluklar, ilişki sorunları, yas süreci, öfke yönetimi, özgüven eksikliği ve kişisel gelişim konularında profesyonel destek sunuyorum."
  },
  {
    question: "İptal politikanız nedir?",
    answer: "Randevular en az 24 saat öncesinden iptal edilmelidir. Geç iptal veya randevuya gelmeme durumunda seans ücreti tahsil edilir. Acil durumlar değerlendirilir."
  },
  {
    question: "İlk görüşmede neler olur?",
    answer: "İlk seansta mevcut durumunuz, geçmiş deneyimleriniz ve terapi hedefleriniz hakkında kapsamlı bir değerlendirme yapılır. Bu, size en uygun terapi yaklaşımını belirlemek için önemlidir."
  }
];

const SSS = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <HelpCircle className="h-4 w-4 mr-2" />
                Sıkça Sorulan Sorular
              </div>
              <h1 className="text-4xl font-bold text-text-primary">
                Merak Ettikleriniz
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Terapi süreci, TLDP yaklaşımı ve hizmetlerimiz hakkında en çok sorulan soruların cevapları
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="shadow-card">
                <CardContent className="text-center p-6">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-text-primary mb-2">Seans Süresi</h3>
                  <p className="text-text-secondary text-sm">50 dakika</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="text-center p-6">
                  <CreditCard className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-text-primary mb-2">Seans Ücreti</h3>
                  <p className="text-text-secondary text-sm">1200₺</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="text-center p-6">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-text-primary mb-2">Terapi Süresi</h3>
                  <p className="text-text-secondary text-sm">16-20 seans (TLDP)</p>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Accordion */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border">
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-text-secondary leading-relaxed pt-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="shadow-card mt-12 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="text-center p-8">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Başka Sorularınız mı Var?
                </h3>
                <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                  Aklınıza takılan başka sorular için benimle iletişime geçmekten çekinmeyin. 
                  Size yardımcı olmaktan memnuniyet duyarım.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+905321234567" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl font-medium transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Telefon ile Ara
                  </a>
                  <a 
                    href="/iletisim" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-medium transition-colors"
                  >
                    İletişim Formu
                  </a>
                </div>
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