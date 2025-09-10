import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Users, Calendar } from "lucide-react";

const Hakkimda = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl font-bold text-text-primary">
                Hakkımda
              </h1>
              <p className="text-xl text-text-secondary">
                Psikoloji alanındaki deneyimimle size nasıl destek olabileceğimi keşfedin
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    Eğitim Hayatım
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p><strong>Lisans:</strong> İstanbul Üniversitesi Psikoloji Bölümü (2018)</p>
                  <p><strong>Yüksek Lisans:</strong> Klinik Psikoloji (2020)</p>
                  <p><strong>Doktora:</strong> Klinik Psikoloji (Devam ediyor)</p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary" />
                    Sertifikalar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>• Bilişsel Davranışçı Terapi Sertifikası</p>
                  <p>• EMDR Terapi Uzmanı</p>
                  <p>• Çift ve Aile Terapisi Sertifikası</p>
                  <p>• Çocuk ve Ergen Terapisi Uzmanı</p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-card mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Terapi Yaklaşımım
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-text-secondary">
                <p>
                  Her danışanımın eşsiz bir hikayesi olduğuna inanıyorum. Bu nedenle terapi sürecinde 
                  kişiye özel yaklaşımlar geliştiriyorum. Temel amacım, danışanlarımın kendi iç 
                  güçlerini keşfetmelerine ve yaşam kalitelerini artırmalarına yardımcı olmaktır.
                </p>
                <p>
                  Kullandığım başlıca terapi yöntemleri:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Bilişsel Davranışçı Terapi (BDT)</li>
                  <li>EMDR (Eye Movement Desensitization and Reprocessing)</li>
                  <li>Şema Terapi</li>
                  <li>Farkındalık Temelli Yaklaşımlar</li>
                  <li>Çözüm Odaklı Kısa Terapi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Çalışma Alanlarım
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4 text-text-secondary">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Bireysel Terapi</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Depresyon ve Anksiyete</li>
                    <li>• Travma ve PTSD</li>
                    <li>• Öfke Yönetimi</li>
                    <li>• Kişisel Gelişim</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">İlişki Terapisi</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Evlilik Danışmanlığı</li>
                    <li>• İletişim Sorunları</li>
                    <li>• Aile İçi Çatışmalar</li>
                    <li>• Boşanma Süreci Desteği</li>
                  </ul>
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

export default Hakkimda;