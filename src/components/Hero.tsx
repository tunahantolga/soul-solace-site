import { BookOpenText, Languages, PencilLine, Quote } from "lucide-react";
import { useMemo } from "react";
import heroRoomImage from "@/assets/hero-chair-optimized.jpg";

const Hero = () => {
  const panels = useMemo(
    () => [
      {
        title: "Özgün Yazılar",
        icon: PencilLine,
        bg: "bg-[#7FB6DA]",
      },
      {
        title: "Çeviriler",
        icon: Languages,
        bg: "bg-[#6FB0D7]",
      },
      {
        title: "Alıntılar",
        icon: Quote,
        bg: "bg-[#66A6CF]",
      },
      {
        title: "Kitap Önerileri",
        icon: BookOpenText,
        bg: "bg-[#5B9DC8]",
      },
    ],
    []
  );

  return (
    <>
      <section className="relative pt-24 md:pt-28 pb-8 min-h-[500px] md:min-h-[540px] overflow-hidden">
        {/* Photo background */}
        <div className="absolute inset-0">
          <img
            src={heroRoomImage}
            alt=""
            className="h-full w-full object-cover object-center"
            draggable={false}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-background" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex w-fit max-w-full items-center px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-3 shadow-lg">
              <span className="text-[11px] sm:text-sm font-medium text-white/90 text-center leading-snug">
                İntegratif Enstitü Psikolojik Danışmanlık Merkezi
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.02] text-balance mb-4">
              Psikoterapist İbrahim Sarı
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-0 max-w-2xl mx-auto">
              MD, MSc
            </p>
          </div>
        </div>
      </section>

      {/* Hero altında 4’lü alan */}
      <section className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/25">
          {panels.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className={`${p.bg} relative overflow-hidden px-6 py-10 md:py-9`}>
                <div className="h-full min-h-[150px] flex flex-col justify-between items-center text-center">
                  <div>
                    <Icon className="w-14 h-14 text-white/90 mx-auto" />
                    <div className="mt-5 text-[#1F3F56] font-semibold text-lg">
                      {p.title}
                    </div>
                  </div>

                  <div className="text-white/70 text-sm">...</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
