import { Link } from "react-router-dom";
import { BookOpenText, Languages, PencilLine, Quote } from "lucide-react";

const panels = [
  {
    title: "Özgün Yazılar",
    icon: PencilLine,
    href: "#",
    tone: "bg-[#A7D0E4]",
  },
  {
    title: "Çeviriler",
    icon: Languages,
    href: "#",
    tone: "bg-[#9FC9E2]",
  },
  {
    title: "Alıntılar",
    icon: Quote,
    href: "#",
    tone: "bg-[#93C0DB]",
  },
  {
    title: "Kitap Önerileri",
    icon: BookOpenText,
    href: "#",
    tone: "bg-[#88B7D6]",
  },
];

const HeroFourPanels = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {panels.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className={`${p.tone} relative overflow-hidden px-6 py-14 md:py-12 text-center`}
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-14 h-14 text-white/90" />
              </div>
              <div className="text-white/95 font-semibold text-lg">{p.title}</div>
              <div className="text-white/70 mt-2 text-sm">...</div>
              <div className="mt-7 flex justify-center">
                <Link
                  to={p.href}
                  onClick={(e) => {
                    // Placeholder link (projectlerde rota yoksa # kalır)
                    if (p.href === "#") e.preventDefault();
                  }}
                  className="inline-flex items-center justify-center px-7 py-2 rounded-full bg-[#6B4B33] text-white text-xs font-semibold hover:brightness-110 transition"
                >
                  DETAY
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroFourPanels;

