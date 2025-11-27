import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Video, ExternalLink, Play, Users } from "lucide-react";

const OnlineContent = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Online İçerikler</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Eğitim & Video İçerikleri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesyonel gelişim için Udemy kursları ve YouTube videolarımızla bilginizi artırın
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Udemy Card */}
          <Card className="relative overflow-hidden border-0 shadow-premium hover:shadow-glow transition-all duration-500 group">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/15 group-hover:to-pink-500/15 transition-all duration-500"></div>
            
            <CardContent className="p-8 relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20">
                  <Users className="w-3 h-3 text-purple-600" />
                  <span className="text-xs font-medium text-purple-600">Süpervizyon Eğitimleri</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Udemy Kursları
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Psikoterapi ve süpervizyon alanında profesyonel gelişim için tasarlanmış kapsamlı online kurslar. 
                TLDP, integratif yaklaşımlar ve klinik uygulamalar.
              </p>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Zaman Sınırlı Dinamik Psikoterapi (TLDP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>İntegratif Psikoterapi Yaklaşımları</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Klinik Süpervizyon Teknikleri</span>
                </li>
              </ul>

              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white h-12"
                asChild
              >
                <a 
                  href="https://www.udemy.com/user/dr-ibrahim-sari/" 
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
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 group-hover:from-red-500/15 group-hover:to-pink-500/15 transition-all duration-500"></div>
            
            <CardContent className="p-8 relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full border border-red-500/20">
                  <Play className="w-3 h-3 text-red-600" />
                  <span className="text-xs font-medium text-red-600">Video İçerikler</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                YouTube Kanalı
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Psikoterapi, ruh sağlığı ve kişisel gelişim konularında ücretsiz video içerikler. 
                Vaka tartışmaları, teorik bilgiler ve pratik uygulamalar.
              </p>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>Terapi Teknikleri ve Uygulamaları</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>Ruh Sağlığı Konuları</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <span>Vaka İncelemeleri</span>
                </li>
              </ul>

              <Button 
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white h-12"
                asChild
              >
                <a 
                  href="https://www.youtube.com/@dribrahimsari" 
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
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent-blue/5 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <Play className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-muted-foreground">
                    YouTube kanalımızı ziyaret ederek videolara ulaşabilirsiniz
                  </p>
                  <Button 
                    variant="outline"
                    asChild
                  >
                    <a 
                      href="https://www.youtube.com/@dribrahimsari" 
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
