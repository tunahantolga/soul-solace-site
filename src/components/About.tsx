import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Star, ArrowRight, CheckCircle } from "lucide-react";
import psychologistPortrait from "@/assets/psychologist-portrait.jpg";

const About = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              <span className="block">İntegratif Psikoterapi</span>
              <span className="block text-slate-600">Merkezi</span>
            </h2>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              İntegratif Psikoterapi Merkezi'nde yaklaşımımız sadece profesyonel değil - aynı zamanda derinlemesine kişiseldir. 
              Temel değerlerimiz her seansı şekillendirir.
            </p>

            {/* Values */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Heart className="h-6 w-6 text-slate-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-slate-700 transition-colors duration-300">Şefkat</h3>
                  <p className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">Her danışanımıza karşı derin bir anlayış ve şefkat gösteriyoruz.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Heart className="h-6 w-6 text-slate-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-slate-700 transition-colors duration-300">Bağlantı</h3>
                  <p className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">Güçlü terapötik ilişkiler kurarak iyileşme sürecini destekliyoruz.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Heart className="h-6 w-6 text-slate-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-slate-700 transition-colors duration-300">Güçlendirme</h3>
                  <p className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">Danışanlarımızın kendi güçlerini keşfetmelerine yardımcı oluyoruz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={psychologistPortrait} 
                alt="Dr. İbrahim Sarı - Psikanaliz ve Nörobilim Uzmanı"
                className="w-full h-[600px] object-cover"
              />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">0+</div>
                <div className="text-sm text-slate-600">Lisanslı Danışman</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">0+</div>
                <div className="text-sm text-slate-600">Yıl Birleşik Deneyim</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-slate-600" />
              <span className="text-slate-900 font-semibold">%100 Gizlilik Garantisi</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <Star className="h-6 w-6 text-slate-600" />
              <span className="text-slate-900 font-semibold">Esnek Randevu Saatleri</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-slate-600" />
              <span className="text-slate-900 font-semibold">Uzman Sertifikalı</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;