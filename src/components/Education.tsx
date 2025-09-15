import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, ExternalLink, Star, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8 mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            <span className="block">Uzman Eğitim</span>
            <span className="block text-slate-600">Programları</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Uluslararası standartlarda offline eğitimler ve süpervizyon programları sunuyorum.
          </p>
        </div>

        {/* Two prominent education cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* TLDP Süpervizyon Eğitimi */}
          <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-2xl"></div>
            
            <CardHeader className="relative z-10 p-8 pb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-bold mb-2">
                    <Star className="w-4 h-4 mr-2" />
                    UZMAN SEVİYE
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">TLDP Süpervizyon Eğitimi</h3>
                </div>
              </div>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Zaman Sınırlı Dinamik Psikoterapi uzman eğitimi ve süpervizyon programı. 
                Hanna Levenson'dan doğrudan eğitim almış uzmanlardan süpervizyon.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">2 Yıl Program</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">İstanbul & Online</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10 p-8 pt-0">
              <div className="space-y-3 mb-8">
                {[
                  "LIFT Sertifikası",
                  "Hanna Levenson'dan eğitim",
                  "Süpervizör yetkinliği",
                  "Uluslararası standartlar",
                  "Klinik uygulama",
                  "Vaka süpervizyonu"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl">
                Detaylı Bilgi Al
                <ExternalLink className="h-5 w-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Offline Eğitimler */}
          <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-4 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-full blur-2xl"></div>
            
            <CardHeader className="relative z-10 p-8 pb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-700 rounded-full text-sm font-bold mb-2">
                    <Star className="w-4 h-4 mr-2" />
                    OFFLINE EĞİTİMLER
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">İntegratif Psikoterapi</h3>
                </div>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Çok yönlü terapi yaklaşımlarını bir arada kullanma sanatı. 
                Master seviye offline eğitim programları ve workshop'lar.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-green-600" />
                  <span className="text-slate-600">Master Programı</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span className="text-slate-600">İstanbul Merkez</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="relative z-10 p-8 pt-0">
              <div className="space-y-3 mb-8">
                {[
                  "Çoklu yaklaşım entegrasyonu",
                  "Klinik uygulama",
                  "Araştırma temelli eğitim",
                  "Workshop'lar",
                  "Sertifika programları",
                  "Sürekli eğitim"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl">
                Eğitim Programları
                <ExternalLink className="h-5 w-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;