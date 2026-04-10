import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import egitimCover from "@/assets/egitimler-cover.jpg";
import egitimCover02 from "@/assets/egitimler-cover-02.jpg";
import egitimCover03 from "@/assets/egitimler-cover-03.jpg";
import tldpEgitim01 from "@/assets/tldp-egitim-01.jpg";
import tldpEgitim02 from "@/assets/tldp-egitim-02.jpg";
import tldpEgitim03 from "@/assets/tldp-egitim-03.jpg";
import tldpEgitim04 from "@/assets/tldp-egitim-04.jpg";
import norobilimArastirma01 from "@/assets/norobilim-arastirma-01.jpg";
import norobilimArastirma02 from "@/assets/norobilim-arastirma-02.jpg";
import norobilimArastirma03 from "@/assets/norobilim-arastirma-03.jpg";
import norobilimArastirma04 from "@/assets/norobilim-arastirma-04.jpg";
import norobilimArastirma05 from "@/assets/norobilim-arastirma-05.jpg";

const programs = [
  {
    icon: BookOpen,
    title: "TLDP Süpervizyon",
    description: "Zaman Sınırlı Dinamik Psikoterapi uzman eğitimi. LIFT sertifikalı program.",
    badge: "Uzman Seviye"
  },
  {
    icon: Users,
    title: "İntegratif Psikoterapi",
    description: "Çok yönlü terapi yaklaşımlarını entegre eden master programı.",
    badge: "Master Program"
  }
];

const Education = () => {
  const norobilimPosterUrl = "/norobilim-arastirma-posteri.pdf";
  const egitimPhotos = [
    { src: egitimCover, alt: "Psikodinamik Psikoterapi Eğitimi afişi 1" },
    { src: egitimCover02, alt: "Psikodinamik Psikoterapi Eğitimi afişi 2" },
    { src: egitimCover03, alt: "Psikodinamik Psikoterapi Eğitimi afişi 3" },
  ];
  const tldpPhotos = [
    { src: tldpEgitim01, alt: "TLDP eğitim fotoğrafı 1" },
    { src: tldpEgitim02, alt: "TLDP eğitim fotoğrafı 2" },
    { src: tldpEgitim03, alt: "TLDP eğitim fotoğrafı 3" },
    { src: tldpEgitim04, alt: "TLDP eğitim fotoğrafı 4" },
  ];
  const norobilimPhotos = [
    { src: norobilimArastirma01, alt: "Nörobilim araştırması fotoğrafı 1" },
    { src: norobilimArastirma02, alt: "Nörobilim araştırması fotoğrafı 2" },
    { src: norobilimArastirma03, alt: "Nörobilim araştırması fotoğrafı 3" },
    { src: norobilimArastirma04, alt: "Nörobilim araştırması fotoğrafı 4" },
    { src: norobilimArastirma05, alt: "Nörobilim araştırması gönüllülük afişi" },
  ];

  const [currentEgitimSlide, setCurrentEgitimSlide] = useState(0);
  const [currentTldpSlide, setCurrentTldpSlide] = useState(0);
  const [currentNorobilimSlide, setCurrentNorobilimSlide] = useState(0);

  const prevEgitimSlide = () => {
    setCurrentEgitimSlide((prev) => (prev - 1 + egitimPhotos.length) % egitimPhotos.length);
  };

  const nextEgitimSlide = () => {
    setCurrentEgitimSlide((prev) => (prev + 1) % egitimPhotos.length);
  };

  const prevTldpSlide = () => {
    setCurrentTldpSlide((prev) => (prev - 1 + tldpPhotos.length) % tldpPhotos.length);
  };

  const nextTldpSlide = () => {
    setCurrentTldpSlide((prev) => (prev + 1) % tldpPhotos.length);
  };

  const prevNorobilimSlide = () => {
    setCurrentNorobilimSlide((prev) => (prev - 1 + norobilimPhotos.length) % norobilimPhotos.length);
  };

  const nextNorobilimSlide = () => {
    setCurrentNorobilimSlide((prev) => (prev + 1) % norobilimPhotos.length);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Eğitim Programları</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Profesyonel Gelişim
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Uluslararası standartlarda süpervizyon ve eğitim programları
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 shadow-premium hover:shadow-glow transition-all duration-700"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-blue/5 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Glow effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <CardContent className="p-5 sm:p-8 relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                  <div className="w-16 h-16 bg-primary/15 border border-primary/20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-300">
                    <program.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">{program.badge}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Sertifikalı</span>
                  </div>
                  <div className="w-px h-4 bg-border"></div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-blue/60 rounded-full animate-pulse"></span>
                    <span>Kayıt Açık</span>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                  <span className="text-sm font-medium">Detaylı Bilgi</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Aktarım Odaklı Psikoterapi Eğitimi (Kernberg Yaklaşımı)
            </h3>
          </div>

          <Card className="overflow-hidden border border-border shadow-soft bg-card">
            <div className="relative">
              <img
                src={egitimPhotos[currentEgitimSlide].src}
                alt={egitimPhotos[currentEgitimSlide].alt}
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-contain bg-white"
                loading="lazy"
                decoding="async"
              />

              <button
                type="button"
                onClick={prevEgitimSlide}
                className="absolute left-4 sm:left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/70 transition"
                aria-label="Önceki eğitim görseli"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextEgitimSlide}
                className="absolute right-4 sm:right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/70 transition"
                aria-label="Sonraki eğitim görseli"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <CardContent className="py-3 text-center text-sm text-muted-foreground">
              {currentEgitimSlide + 1} / {egitimPhotos.length}
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Kısa Süreli Dinamik Psikoterapi (TLDP) Eğitimi
            </h3>
          </div>

          <Card className="overflow-hidden border border-border shadow-soft bg-card">
            <div className="relative">
              <img
                src={tldpPhotos[currentTldpSlide].src}
                alt={tldpPhotos[currentTldpSlide].alt}
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-contain bg-white"
                loading="lazy"
                decoding="async"
              />

              <button
                type="button"
                onClick={prevTldpSlide}
                className="absolute left-4 sm:left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/70 transition"
                aria-label="Önceki TLDP eğitim görseli"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextTldpSlide}
                className="absolute right-4 sm:right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/70 transition"
                aria-label="Sonraki TLDP eğitim görseli"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <CardContent className="py-3 text-center text-sm text-muted-foreground">
              {currentTldpSlide + 1} / {tldpPhotos.length}
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Nörobilim Araştırması
            </h3>
          </div>

          <Card className="overflow-hidden border border-border shadow-soft bg-card">
            <div className="relative">
              <img
                src={norobilimPhotos[currentNorobilimSlide].src}
                alt={norobilimPhotos[currentNorobilimSlide].alt}
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-contain bg-white"
                loading="lazy"
                decoding="async"
              />

              <button
                type="button"
                onClick={prevNorobilimSlide}
                className="absolute left-4 sm:left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/70 transition"
                aria-label="Önceki nörobilim araştırması görseli"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextNorobilimSlide}
                className="absolute right-4 sm:right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/55 text-white flex items-center justify-center hover:bg-black/70 transition"
                aria-label="Sonraki nörobilim araştırması görseli"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <CardContent className="py-3 text-center text-sm text-muted-foreground">
              {currentNorobilimSlide + 1} / {norobilimPhotos.length}
            </CardContent>
          </Card>

          <Card className="mt-6 overflow-hidden border border-border shadow-soft bg-card">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground">
                    Araştırma Posteri
                  </h4>
                  <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                    Effects of Frontal tDCS Applications on Cognitive Functions in Healthy Individuals
                  </p>
                </div>

                <Button variant="outline" asChild>
                  <a
                    href={norobilimPosterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    PDF&apos;i yeni sekmede aç
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-border bg-white">
                <iframe
                  src={`${norobilimPosterUrl}#view=FitH`}
                  title="Nörobilim araştırması posteri"
                  className="h-[420px] w-full sm:h-[620px] md:h-[920px]"
                />
              </div>

              <div className="mt-5 rounded-xl border border-primary/15 bg-primary/5 p-4 sm:p-5">
                <a
                  href="https://www.tandfonline.com/doi/full/10.1080/13803395.2026.2654020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-start gap-2 text-sm sm:text-base font-medium text-primary hover:text-primary-hover transition-colors"
                >
                  <span>
                    Cognitive effects of dorsolateral versus medial prefrontal anodal transcranial direct current stimulation in healthy individuals
                  </span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Education;
