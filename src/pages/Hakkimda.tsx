import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";

const Hakkimda = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                Hakkımda
              </h1>
              <p className="text-base text-muted-foreground">
                Dr. İbrahim Sarı MD., MSc.
              </p>
            </div>

            {/* Bio */}
            <Card className="border border-border mb-8">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  İstanbul Üniversitesi Tıp Fakültesini bitirdim. Lyon, Fransa'da psikanaliz eğitimi aldım. 
                  Klinik Psikoloji Yüksek Lisansı eğitimini tamamladım.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Hanna Levenson'dan (LIFT, San Francisco, USA) TLDP (Zaman Sınırlı Dinamik Psikoterapi) 
                  süpervizyon eğitimi aldım. SEPI (Society Exploration of Psychotherapy Integration) 29. 
                  yıllık konferansında araştırmam kabul edildi.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Kısa Süreli Dinamik Psikoterapinin (TLDP) beyin serotonin reseptörlerine etkisi" konulu 
                  nörobilim doktora tezim üzerinde çalışıyorum.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-foreground" />
                <h2 className="text-lg font-semibold text-foreground">Eğitim</h2>
              </div>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• İntegratif Psikoterapi Master Programı</li>
                    <li>• John Clarkin - Aktarım Odaklı Psikoterapi</li>
                    <li>• Jeffrey J. Magnavita - Unified Psychotherapy</li>
                    <li>• Allan N. Schore - Gelişimsel Nörobiyoloji ve Bağlanma Teorisi</li>
                    <li>• John C. Norcross - Bütüncül Psikoterapi</li>
                    <li>• Otto F. Kernberg - Aktarım Odaklı Psikoterapi</li>
                    <li>• Leslie S. Greenberg - Duygu Odaklı Psikoterapi</li>
                    <li>• Paul L. Watchel - İlişkisel Psikoterapi</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Work Areas */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-foreground" />
                <h2 className="text-lg font-semibold text-foreground">Çalışma Alanları</h2>
              </div>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Depresyon Bozuklukları</li>
                    <li>• Kaygı (Anksiyete) Bozuklukları</li>
                    <li>• Takıntı-Zorlantı Bozukluğu (OKB)</li>
                    <li>• Travma ve Stresle İlişkili Bozukluklar</li>
                    <li>• Çözülme (Dissosiyasyon) Bozuklukları</li>
                    <li>• Kayıp ve Yas Bozuklukları</li>
                    <li>• Bedensel Belirti Bozuklukları</li>
                    <li>• Beslenme ve Yeme Bozuklukları</li>
                    <li>• Uyku-Uyanıklık Bozuklukları</li>
                    <li>• Cinsel İşlev Bozuklukları</li>
                    <li>• Madde ile İlişkili Bozukluklar ve Bağımlılık</li>
                    <li>• Kişilik Bozuklukları</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Hakkimda;
