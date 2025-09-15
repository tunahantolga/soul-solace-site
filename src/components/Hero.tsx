import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-semibold">4.7 Puan</span>
              </div>
              <span>Memnun Danışanlar</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              <span className="block">Daha İyi Hissedilmeyi</span>
              <span className="block text-slate-600">Hak Ediyorsunuz</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Yaşamın zorluklarında rehberlik etmek için şefkatli ve kişiselleştirilmiş ruh sağlığı desteği sunuyoruz.
            </p>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Randevu Al
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Client count */}
            <div className="pt-8">
              <p className="text-slate-500 text-lg">
                300+ Kişi İntegratif Psikoterapi'ye güvendi
              </p>
            </div>
          </div>

          {/* Right side - Doctor Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/dr-ibrahim-final.jpg?v=2024" 
                alt="Dr. İbrahim Sarı, MD, MSc - Psikoterapi Uzmanı"
                className="w-full h-[600px] object-cover"
                onLoad={() => console.log('FINAL Dr. İbrahim resmi yüklendi!')}
                onError={(e) => {
                  console.log('Resim yüklenemedi, fallback kullanılıyor');
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </div>
            
            {/* Floating rating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-bold text-lg">4.7 Puan</span>
              </div>
              <p className="text-sm text-slate-600">Memnun Danışanlar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;