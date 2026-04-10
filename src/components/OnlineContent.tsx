import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Video, ExternalLink, Play, Users, ChevronLeft, ChevronRight } from "lucide-react";
import youtubeBgImage from "@/assets/youtube-card-bg.jpg";

const OnlineContent = () => {
  const udemyUrl =
    "https://www.udemy.com/user/lale-anna-sari/?srsltid=AfmBOopBlAomDmAE8ZZ4MCbtRJKwWw9HqchsO5UtBGGv3qXBQl0lUC3V";
  const youtubeUrl = "https://www.youtube.com/@ibrahimsar-integratifpsiko9945";
  const seminerPhotos = Object.entries(
    import.meta.glob("/src/assets/pro-gelisim-album-*.jpg", {
      eager: true,
      import: "default",
    })
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .filter(([path]) => !path.includes("pro-gelisim-album-01.jpg"))
    .map(([, src], index) => ({
      src: src as string,
      alt: `İntegratif Enstitü seminer görseli ${index + 1}`,
    }));
  const [currentSeminerSlide, setCurrentSeminerSlide] = useState(0);

  const prevSeminerSlide = () => {
    setCurrentSeminerSlide((prev) => (prev - 1 + seminerPhotos.length) % seminerPhotos.length);
  };

  const nextSeminerSlide = () => {
    setCurrentSeminerSlide((prev) => (prev + 1) % seminerPhotos.length);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Seminerler</h3>
          </div>

          <Card className="overflow-hidden border border-border shadow-soft bg-card">
            <div className="relative">
              <img
                src={seminerPhotos[currentSeminerSlide]?.src}
                alt={seminerPhotos[currentSeminerSlide]?.alt ?? "Seminer görseli"}
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-contain bg-white"
                loading="lazy"
                decoding="async"
              />

              <button
                type="button"
                onClick={prevSeminerSlide}
                className="absolute left-4 sm:left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/70 transition"
                aria-label="Önceki seminer görseli"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextSeminerSlide}
                className="absolute right-4 sm:right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/70 transition"
                aria-label="Sonraki seminer görseli"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <CardContent className="py-3 text-center text-sm text-muted-foreground">
              {currentSeminerSlide + 1} / {seminerPhotos.length}
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Online İçerikler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Eğitim & Video İçerikleri
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesyonel gelişim için Udemy kursları ve YouTube videolarımızla bilginizi artırın
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Udemy Card */}
          <Card className="relative overflow-hidden border-0 shadow-premium hover:shadow-glow transition-all duration-500 group">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-blue/10 group-hover:from-primary/15 group-hover:to-accent-blue/15 transition-all duration-500"></div>
            
            <CardContent className="p-5 sm:p-8 relative z-10">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                <div className="w-16 h-16 bg-primary/15 border border-primary/20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-300">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                  <Users className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium text-primary">Süpervizyon Eğitimleri</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Udemy Kursları
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Psikoterapi ve süpervizyon alanında profesyonel gelişim için tasarlanmış kapsamlı online kurslar. 
                TLDP, integratif yaklaşımlar ve klinik uygulamalar.
              </p>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Zaman Sınırlı Dinamik Psikoterapi (TLDP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>İntegratif Psikoterapi Yaklaşımları</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Klinik Süpervizyon Teknikleri</span>
                </li>
              </ul>

              <a
                href={udemyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
              >
                Udemy profilini ziyaret et
                <ExternalLink className="h-4 w-4" />
              </a>

              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent-blue hover:brightness-110 text-white h-12"
                asChild
              >
                <a 
                  href={udemyUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Udemy Kurslarını İncele
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* YouTube Card */}
          <Card className="relative overflow-hidden border-0 shadow-premium hover:shadow-glow transition-all duration-500 group">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-blue/10 group-hover:from-primary/15 group-hover:to-accent-blue/15 transition-all duration-500"></div>
            
            <CardContent className="p-5 sm:p-8 relative z-10">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                <div className="w-16 h-16 bg-primary/15 border border-primary/20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-300">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                  <Play className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium text-primary">Video İçerikler</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                YouTube Kanalı
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Psikoterapi, ruh sağlığı ve kişisel gelişim konularında ücretsiz video içerikler. 
                Vaka tartışmaları, teorik bilgiler ve pratik uygulamalar.
              </p>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Terapi Teknikleri ve Uygulamaları</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Ruh Sağlığı Konuları</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Vaka İncelemeleri</span>
                </li>
              </ul>

              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
              >
                YouTube kanalını ziyaret et
                <ExternalLink className="h-4 w-4" />
              </a>

              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent-blue hover:brightness-110 text-white h-12"
                asChild
              >
                <a 
                  href={youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  YouTube Kanalını Ziyaret Et
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Optional: Embedded YouTube Video Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Son Videolar</h3>
            <p className="text-muted-foreground">YouTube kanalımızdan en güncel içerikler</p>
          </div>
          
          <Card className="border border-border shadow-soft overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video relative flex items-center justify-center overflow-hidden">
                <img
                  src={youtubeBgImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-white/80" />
                <div className="relative z-10 text-center space-y-3 px-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/15 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                    <Play className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    YouTube kanalımızı ziyaret ederek videolara ulaşabilirsiniz
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="px-3 py-1 rounded-full border border-primary/20 bg-white/80 text-xs font-semibold text-foreground">
                      200+ Video
                    </span>
                    <span className="px-3 py-1 rounded-full border border-primary/20 bg-white/80 text-xs font-semibold text-foreground">
                      1500+ Abone
                    </span>
                  </div>
                  <Button 
                    variant="outline"
                    asChild
                  >
                    <a 
                      href={youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Video className="w-4 h-4" />
                      Kanalı Görüntüle
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OnlineContent;
