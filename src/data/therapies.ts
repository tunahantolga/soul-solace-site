// Content for the therapy pages, rendered by src/pages/[therapy].astro.
export type TherapyIcon =
  | "brain"
  | "heart"
  | "shield"
  | "users"
  | "message"
  | "target"
  | "trending"
  | "home"
  | "smile";

export interface Therapy {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  description: string;
  lead: string;
  introTitle: string;
  intro: string[];
  topics: { icon: TherapyIcon; title: string; description: string }[];
  benefits: string[];
  audience?: { title: string; items: string[] };
  facts?: { title: string; text: string }[];
  cta: { title: string; text: string };
}

export const therapies: Therapy[] = [
  {
    slug: "bireysel-terapi",
    eyebrow: "Bireysel Terapi",
    title: "Bireysel Psikoterapi",
    metaTitle: "Bireysel Psikoterapi",
    description:
      "Kişisel gelişim, duygusal zorluklar ve yaşam problemleri için psikanalitik ve psikodinamik yaklaşımlarla bireysel psikoterapi. İbrahim Sarı, İstanbul.",
    lead: "Kişisel gelişim, duygusal zorluklar ve yaşam problemleriniz için profesyonel psikolojik destek. Psikanalitik ve psikodinamik yaklaşımlarla derinlemesine iyileşme yolculuğu.",
    introTitle: "Bireysel terapi nedir?",
    intro: [
      "Bireysel psikoterapi, kişinin iç dünyasını, duygularını, düşüncelerini ve davranışlarını anlamak ve değiştirmek için terapist ile bire bir yapılan profesyonel bir süreçtir. Bu süreçte, güvenli ve gizli bir ortamda kendi deneyimlerinizi keşfeder, yaşam zorluklarınızla başa çıkma becerilerinizi geliştirirsiniz.",
      "TLDP (Time-Limited Dynamic Psychotherapy) yaklaşımı ile 16-20 seans süren odaklı terapi sürecinde, belirli hedefler doğrultusunda çalışırız. Psikanalitik ve psikodinamik temelli bu yaklaşım, bilinçdışı süreçleri anlama ve içgörü kazanma üzerine kuruludur.",
    ],
    topics: [
      { icon: "brain", title: "Depresyon", description: "Duygu durum bozuklukları ve depresif belirtilerin tedavisi" },
      { icon: "heart", title: "Anksiyete Bozuklukları", description: "Panik atak, yaygın anksiyete, sosyal fobi tedavisi" },
      { icon: "shield", title: "Travma ve PTSD", description: "Travmatik yaşantıların işlenmesi ve iyileşme süreci" },
      { icon: "users", title: "Kişilerarası İlişkiler", description: "İlişki sorunları ve bağlanma problemleri" },
    ],
    benefits: [
      "Kişiselleştirilmiş terapi yaklaşımı",
      "Gizlilik ve güvenli ortam",
      "Kanıta dayalı yöntemler",
      "Esneklik ve destek",
      "Uzun vadeli iyileşme odaklı",
    ],
    facts: [
      {
        title: "Seans süresi",
        text: "Her seans 45 dakika sürer ve haftada bir kez yapılır. TLDP yaklaşımında toplam 16-20 seans önerilir.",
      },
      {
        title: "Gizlilik",
        text: "Tüm görüşmeler mutlak gizlilik içinde yapılır. Kişisel bilgileriniz yasal zorunluluklar dışında paylaşılmaz.",
      },
    ],
    cta: {
      title: "İlk adımı atmaya hazır mısınız?",
      text: "Size özel terapi sürecinizi birlikte planlayalım. Ücretsiz ön görüşme için hemen iletişime geçin.",
    },
  },
  {
    slug: "cift-terapisi",
    eyebrow: "Çift Terapisi",
    title: "Çift Terapisi ve İlişki Danışmanlığı",
    metaTitle: "Çift Terapisi ve İlişki Danışmanlığı",
    description:
      "İletişimi güçlendirmek ve ilişki zorluklarını birlikte aşmak için profesyonel çift terapisi ve ilişki danışmanlığı. İbrahim Sarı, İstanbul.",
    lead: "İlişkinizi güçlendirin, iletişimi geliştirin ve birlikte daha mutlu bir gelecek inşa edin. Profesyonel terapi desteği ile çatışmaları fırsata dönüştürün.",
    introTitle: "Çift terapisi nedir?",
    intro: [
      "Çift terapisi, romantik ilişkilerde yaşanan zorlukları aşmak, iletişimi güçlendirmek ve ilişkinin kalitesini artırmak için profesyonel destek sunan bir psikoterapi sürecidir. Bu süreçte, çiftler güvenli bir ortamda birlikte çalışarak ilişkilerindeki dinamikleri anlar ve değiştirir.",
      "Psikodinamik yaklaşım ile, ilişki örüntülerinin kökenlerini keşfeder, bilinçdışı süreçleri anlar ve daha sağlıklı bir ilişki dinamiği oluşturmak için birlikte çalışırız. Her iki partnerin ihtiyaçları ve perspektifleri eşit önemle ele alınır.",
    ],
    topics: [
      { icon: "message", title: "İletişim Sorunları", description: "Etkili iletişim tekniklerini öğrenerek anlaşmazlıkları azaltma" },
      { icon: "heart", title: "Duygusal Bağ", description: "İlişkide intimite ve duygusal yakınlığı yeniden inşa etme" },
      { icon: "target", title: "Çatışma Çözümü", description: "Sağlıklı anlaşmazlık yönetimi ve problem çözme becerileri" },
      { icon: "trending", title: "İlişki Gelişimi", description: "Birlikte büyüme ve ilişkiyi güçlendirme stratejileri" },
    ],
    benefits: [
      "İletişim becerilerini geliştirme",
      "Çatışma çözme stratejileri",
      "Duygusal bağ güçlendirme",
      "Güven ve intimite artırma",
      "Ortak hedefler belirleme",
    ],
    audience: {
      title: "Ne zaman çift terapisine başlanmalı?",
      items: [
        "Sürekli tekrarlayan anlaşmazlıklar ve çatışmalar yaşıyorsanız",
        "İletişim kopukluğu ve anlaşılamama hissi varsa",
        "Güven kırılması veya sadakatsizlik yaşandıysa",
        "Duygusal veya fiziksel yakınlık azaldıysa",
        "Önemli yaşam değişiklikleri (evlilik, bebek, taşınma) sürecindeyseniz",
        "İlişkinizi güçlendirmek ve gelişim için fırsatlar yaratmak istiyorsanız",
      ],
    },
    cta: {
      title: "Birlikte daha güçlü bir ilişki inşa edin",
      text: "İlişkiniz için bugün ilk adımı atın. Ücretsiz ön görüşme için iletişime geçin.",
    },
  },
  {
    slug: "aile-terapisi",
    eyebrow: "Aile Terapisi",
    title: "Aile Terapisi ve Aile Danışmanlığı",
    metaTitle: "Aile Terapisi ve Aile Danışmanlığı",
    description:
      "Aile içi çatışmaları çözmek ve sağlıklı ilişkiler kurmak için tüm aile üyelerinin ihtiyaçlarına odaklanan aile terapisi. İbrahim Sarı, İstanbul.",
    lead: "Ailenizi bir araya getirin, iletişimi güçlendirin ve sağlıklı ilişkiler kurun. Tüm aile üyelerinin ihtiyaçlarına odaklanan profesyonel terapi desteği.",
    introTitle: "Aile terapisi nedir?",
    intro: [
      "Aile terapisi, aile üyeleri arasındaki ilişkileri iyileştirmek, iletişimi güçlendirmek ve aile içi sorunları çözmek için tasarlanmış bir psikoterapi yaklaşımıdır. Bu süreçte, aile bir sistem olarak ele alınır ve her üyenin katkısı ve deneyimi önemle dinlenir.",
      "Sistemik ve psikodinamik yaklaşımlar kullanılarak, aile içi roller, örüntüler ve dinamikler anlaşılır. Terapide, ailenin güçlü yönleri vurgulanır ve zorlukları birlikte aşmak için stratejiler geliştirilir. Her yaş grubundan aile üyesi sürece dahil edilebilir.",
    ],
    topics: [
      { icon: "home", title: "Aile İçi Çatışmalar", description: "Nesiller arası anlaşmazlıkları çözme ve uyumu sağlama" },
      { icon: "users", title: "Ebeveynlik Sorunları", description: "Çocuk yetiştirme, disiplin ve sınır koyma konularında destek" },
      { icon: "shield", title: "Aile Travmaları", description: "Kayıp, boşanma veya kriz dönemlerinde aileyi destekleme" },
      { icon: "smile", title: "İletişim Dinamikleri", description: "Aile üyeleri arasında sağlıklı iletişim kurma" },
    ],
    benefits: [
      "Aile içi iletişimin güçlendirilmesi",
      "Çatışma çözme becerilerinin geliştirilmesi",
      "Sağlıklı sınırların belirlenmesi",
      "Aile dinamiklerinin anlaşılması",
      "Duygusal bağların yeniden kurulması",
    ],
    audience: {
      title: "Kimler faydalanabilir?",
      items: [
        "Ebeveynler ve çocuklar arası iletişim sorunları",
        "Kardeşler arası çatışmalar",
        "Ergenlik dönemi zorlukları",
        "Boşanma sürecinde aileler",
        "Kayıp ve yas sürecindeki aileler",
        "Yeniden kurulan aileler (üvey aileler)",
        "Kronik hastalık ile yaşayan aileler",
        "Nesiller arası travma ve çatışmalar",
      ],
    },
    cta: {
      title: "Ailenizle daha güçlü bağlar kurun",
      text: "Aileniz için huzurlu ve sağlıklı bir ortam yaratın. Ücretsiz ön görüşme için iletişime geçin.",
    },
  },
];
