import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, BookOpen, Sparkles } from "lucide-react";
import drIbrahimImage from "@/assets/dr-ibrahim-sari.png";

const Hakkimda = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header with Image */}
            <div className="mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Image */}
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-premium border border-border">
                    <img 
                      src={drIbrahimImage} 
                      alt="Dr. İbrahim Sarı MD., MSc. - Psikoterapi Uzmanı"
                      className="w-full h-auto object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white border border-border rounded-2xl p-6 shadow-premium floating">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">15+</div>
                        <div className="text-xs text-muted-foreground">Yıl Deneyim</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Title & Intro */}
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                    <span className="text-sm font-medium text-primary">Profesyonel Profil</span>
                  </div>
                  
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Dr. İbrahim Sarı
            <span className="block gradient-text text-3xl mt-2">MD, MSc</span>
          </h1>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Psikanaliz, nörobilim ve integratif psikoterapi alanlarında uzmanlaşmış, 
                    uluslararası eğitimler almış deneyimli bir terapist olarak size hizmet veriyorum.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
                      <span className="text-sm font-medium text-primary">MD</span>
                    </div>
                    <div className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
                      <span className="text-sm font-medium text-primary">MSc</span>
                    </div>
                    <div className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
                      <span className="text-sm font-medium text-primary">TLDP Süpervizör</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <Card className="border border-border mb-8 shadow-soft hover:shadow-premium transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent-blue rounded-full"></div>
                  <h2 className="text-2xl font-bold text-foreground">Eğitim & Deneyim</h2>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">İstanbul Üniversitesi Tıp Fakültesi</strong>'ni bitirdim. 
                    Lyon, Fransa'da psikanaliz eğitimi aldım. Klinik Psikoloji Yüksek Lisansı eğitimini tamamladım.
                  </p>
                  <p>
                    Hanna Levenson'dan (LIFT, San Francisco, USA) <strong className="text-foreground">TLDP 
                    (Zaman Sınırlı Dinamik Psikoterapi)</strong> süpervizyon eğitimi aldım. SEPI 
                    (Society Exploration of Psychotherapy Integration) 29. yıllık konferansında 
                    araştırmam kabul edildi.
                  </p>
                  <p>
                    "Kısa Süreli Dinamik Psikoterapinin (TLDP) beyin serotonin reseptörlerine etkisi" 
                    konulu <strong className="text-foreground">nörobilim doktora tezim</strong> üzerinde çalışıyorum.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Training */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Aldığım Eğitimler</h2>
              </div>
              <Card className="border border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                    {[
                      "İntegratif Psikoterapi Master Programı",
                      "John Clarkin - Aktarım Odaklı Psikoterapi",
                      "Jeffrey J. Magnavita - Unified Psychotherapy",
                      "Allan N. Schore - Gelişimsel Nörobiyoloji",
                      "John C. Norcross - Bütüncül Psikoterapi",
                      "Otto F. Kernberg - Aktarım Odaklı Psikoterapi",
                      "Leslie S. Greenberg - Duygu Odaklı Psikoterapi",
                      "Paul L. Watchel - İlişkisel Psikoterapi"
                    ].map((education, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 group"
                      >
                        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {education}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Sertifikalar & Başarılar</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-border hover:border-primary/50 shadow-soft hover:shadow-premium transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-button">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">LIFT Sertifikası</h3>
                    <p className="text-sm text-muted-foreground">
                      2011-2013 LIFT (Levenson Institute for Training, San Francisco) 
                      TLDP süpervizör eğitimi
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border hover:border-primary/50 shadow-soft hover:shadow-premium transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-button">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">SEPI 2013</h3>
                    <p className="text-sm text-muted-foreground">
                      29th Annual Conference, Barcelona 2013 - "A New Approach to TLDP Practice" 
                      araştırması sunumu
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Work Areas */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Çalışma Alanları</h2>
              </div>
              <Card className="border border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {[
                      "Depresyon Bozuklukları",
                      "Kaygı (Anksiyete) Bozuklukları",
                      "Takıntı-Zorlantı Bozukluğu (OKB)",
                      "Travma ve Stresle İlişkili Bozukluklar",
                      "Çözülme (Dissosiyasyon) Bozuklukları",
                      "Kayıp ve Yas Bozuklukları",
                      "Bedensel Belirti Bozuklukları",
                      "Beslenme ve Yeme Bozuklukları",
                      "Uyku-Uyanıklık Bozuklukları",
                      "Cinsel İşlev Bozuklukları",
                      "Madde ile İlişkili Bozukluklar",
                      "Kişilik Bozuklukları"
                    ].map((area, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 group"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <div className="w-2 h-2 bg-primary group-hover:bg-white rounded-full transition-colors duration-300"></div>
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
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
