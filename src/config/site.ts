export const SITE = {
  url: "https://integratifenstitu.com",
  name: "İntegratif Enstitü Psikolojik Danışmanlık Merkezi",
  person: "İbrahim Sarı",
  credentials: "MD, PhD",
  email: "dribrahimsari@gmail.com",
  phone: "+905326098044",
  phoneDisplay: "0532 609 80 44",
  city: "İstanbul",
  country: "TR",
  instagram: "https://www.instagram.com/dribrahimsari/",
  youtube: "https://www.youtube.com/@ibrahimsar-integratifpsiko9945",
  udemy: "https://www.udemy.com/user/lale-anna-sari/",
  doktorTakvimi: "https://www.doktortakvimi.com/ibrahim-sari-4/psikoloji/istanbul",
  doktorSitesi: "https://www.doktorsitesi.com/uzm-psk-ibrahim-sari/psikoloji/istanbul",
  sameAs: [
    "https://www.instagram.com/dribrahimsari/",
    "https://www.youtube.com/@ibrahimsar-integratifpsiko9945",
    "https://www.doktortakvimi.com/ibrahim-sari-4/psikoloji/istanbul",
    "https://www.doktorsitesi.com/uzm-psk-ibrahim-sari/psikoloji/istanbul",
  ],
} as const;

export const whatsappUrl = (text = "Merhaba, randevu almak istiyorum.") =>
  `https://wa.me/${SITE.phone.replace("+", "")}?text=${encodeURIComponent(text)}`;

export const THERAPIES = [
  {
    href: "/bireysel-terapi",
    title: "Bireysel Terapi",
    description: "Anksiyete, depresyon ve yaşam zorlukları için psikodinamik temelli, kişiye özel terapi.",
  },
  {
    href: "/cift-terapisi",
    title: "Çift Terapisi",
    description: "İletişimi güçlendirmek ve ilişki zorluklarını birlikte aşmak için destek.",
  },
  {
    href: "/aile-terapisi",
    title: "Aile Terapisi",
    description: "Aile içi çatışmaları anlamak ve daha sağlıklı ilişkiler kurmak için.",
  },
] as const;

export const NAV = [
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/#hizmetler", label: "Terapiler", children: THERAPIES },
  { href: "/psikodinamik-psikoterapi-egitimi", label: "Eğitim Programı" },
  { href: "/iletisim", label: "İletişim" },
] as const;
