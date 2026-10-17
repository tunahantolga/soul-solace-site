// Psikodinamik Psikoterapi Eğitim Programı — curriculum and program facts.
// Sources: the program brochure and the "Genel Dersler" / "Klinik Dersler"
// curriculum documents (Klinik Dersler revision of June 2026). Titles are kept
// as in the source with spelling normalized.

export const programFacts = [
  { label: "Süre", value: "10 ay teorik eğitim + 10 ay süpervizyon" },
  { label: "Takvim", value: "Her ayın son hafta sonu, 3 gün (Cumartesi–Pazar–Pazartesi), 10.00–17.00" },
  { label: "Format", value: "Online; tüm dersler video kaydıyla tekrar izlenebilir" },
  { label: "Müfredat", value: "10 modül: 55 klinik ders, 45 genel ders ve kuramsal ek dersler" },
];

export const supervision = [
  "Süpervizyon da online olarak, ayda 3 gün yapılır.",
  "Grup süpervizyonudur; her kursiyere ayda 1 saat düşecek şekilde planlanır.",
  "Bireysel çalışmak isteyenler kapalı süpervizyon talep edebilir.",
];

export const certificates = [
  {
    title: "Teorik Eğitim Sertifikası",
    description: "10 aylık teorik eğitimi tamamlayan, süpervizyon yılına katılmayan katılımcılara verilir.",
  },
  {
    title: "Uygulayıcı Sertifikası",
    description: "Teorik eğitim ve süpervizyon programının ikisini birden tamamlayan katılımcılara verilir.",
  },
];

type Module = { clinical: string[]; general: string[] };

export const modules: Module[] = [
  {
    clinical: [
      "Psikodinamik Psikoterapiye Genel Bakış-1",
      "Psikodinamik Psikoterapiye Genel Bakış-2",
      "Normal ve Normal Dışı Kişilik Örgütlenmesinin Yapısı",
      "Gelişimsel Nesne İlişkileri Kuramı-1",
      "Gelişimsel Nesne İlişkileri Kuramı-2: Bağlanma ve Selfin İnşası",
      "Gelişimsel Nesne İlişkileri Kuramı-3",
      "Gelişim Duraklaması ve Nesne Sürekliliği-1",
    ],
    general: [
      "Freud'un Hayatı ve Psikanalizin Doğuşu",
      "Self Psikolojisi-1, H. Kohut",
      "Self Psikolojisi-2, H. Kohut",
      "Adleryan Terapi",
    ],
  },
  {
    clinical: [
      "Gelişimsel Süreç-1, Mahler & Stern",
      "Gelişimsel Süreç-2, Mahler",
      "Gelişim Duraklaması ve Nesne Sürekliliği-2",
      "Borderline Kişilik Organizasyonu-1",
      "Borderline Kişilik Organizasyonu-2: Nesne İlişkilerine Odaklanma",
      "Nesne İlişkileri Kuramı, M. Klein",
      "Müdahale Odağını Tanımlamak",
    ],
    general: [
      "Psikoloji Tarihi",
      "Psikoloji Bilimi",
      "Virginia Satir'in Aile Sistemleri",
      "Psikanalitik Çerçeve-1",
      "Psikanalitik Çerçeve-2",
    ],
  },
  {
    clinical: [
      "Terapötik Süreç-1",
      "Terapötik Süreç-2",
      "Bağlanma ve Kişilik Patolojisi",
      "Borderline Kişilik Organizasyonu-3: Nefretin Psikopatolojisi",
    ],
    general: ["Ego Savunma Mekanizmaları-1", "Ego Savunma Mekanizmaları-2", "Ego Durumları-1", "Ego Durumları-2"],
  },
  {
    clinical: [
      "STIPO-R Yapısal Görüşme: Kullanma Kılavuzu",
      "STIPO-R Yapısal Görüşme: Uygulama",
      "Ayrılma-Bireyleşme Sürecinin Öncülleri",
      "Kimlik Dağınıklığı",
      "Aktarım Odaklı Psikoterapi ve Borderline Kişilik Bozukluğu",
      "Psikodinamik Görüşme Tarzı",
    ],
    general: [
      "Kumar Bağımlılığının Anatomisi",
      "Psikodinamik Çocuk Terapisi",
      "Jung Analitik Psikoterapi",
      "Montana Katz, Alan Kuramı",
    ],
  },
  {
    clinical: [
      "Nesne İlişkilerinde Temel Kavramlar",
      "Dinamik Grup Psikoterapisi",
      "Borderline Kişilik Bozukluğunda Terapötik Eylem",
      "Aktarım Odaklı Psikoterapide Değişim Süreçleri",
      "A Grubu Kişilik Bozukluklarının Psikoterapisi",
      "Aktarım Odaklı Psikoterapide Karşı Aktarım",
    ],
    general: [
      "Psikoz ve Tedavisi",
      "E. Erikson-1",
      "E. Erikson-2",
      "E. Erikson-3",
      "E. Erikson-4",
      "Ekran Kaydırmanın Anatomisi",
      "Lichtenberg'e Göre Psikanaliz ve Güdülenme",
    ],
  },
  {
    clinical: [
      "Yorumlama Süreci-1, O. Kernberg",
      "Yorumlama Süreci-2, O. Kernberg",
      "Yorumlama Süreci-3, O. Kernberg",
      "Yorumlama Süreci-4, O. Kernberg",
    ],
    general: [
      "Histerik Nevroz, Gencay Doğan",
      "Nevrotik Depresyon",
      "İngiliz Nesne İlişkileri Okulu",
      "Öznelliğin Yapıları-1",
      "Öznelliğin Yapıları-2",
    ],
  },
  {
    clinical: [
      "Aktarımın Yorumlanması-1, O. Kernberg",
      "Aktarımın Yorumlanması-2, O. Kernberg",
      "Aktarımın Yorumlanması-3, O. Kernberg",
      "Aktarımın Yorumlanması-4, O. Kernberg",
      "Aktarımın Yorumlanması-5, O. Kernberg",
    ],
    general: [
      "Psikodinamik Yönelimli Sanat Terapisi",
      "Yaşamı Yorumlama Biçimleri",
      "Bağımlılık",
      "Yeme Bozuklukları",
      "John G. Gunderson",
    ],
  },
  {
    clinical: [
      "Narsisistik Kişilik Bozukluğu-1",
      "Narsisistik Kişilik Bozukluğu-2",
      "Antisosyal Kişilik Bozukluğu",
      "Erken Travma",
      "Ölüm Dürtüsü Kavramına Genel Bakış",
      "Bilinç ve Kişilik Bozuklukları",
    ],
    general: ["Psikopatoloji-1", "Psikopatoloji-2", "Psikopatoloji-3", "İlişkisel Psikoterapi"],
  },
  {
    clinical: [
      "C Kümesi Kişilik Bozukluklarının Psikoterapisi",
      "Histriyonik Kişilik Bozukluğunun Psikoterapisi",
      "Borderline Kişilik Bozukluğunda İntrapsişik Yapı ve Ayırıcı Tanı",
      "Narsisistik ve Şizoid Kişilik Bozukluklarında İntrapsişik Yapı ve Ayırıcı Tanı",
      "Yas Süreci",
    ],
    general: ["Lacan", "Panksepp"],
  },
  {
    clinical: [
      "Vaka Formülasyonu",
      "Yetişkin İlişkilerde Bağlanma",
      "Tedavinin İleri Evresi ve Sonlandırma",
      "Terapistin Yeterliliği",
      "Süpervizyon ve Süpervizörün Görevleri",
    ],
    general: [
      "Psikanalitik Alan Kuramı",
      "Varoluşçu Psikoterapi-1",
      "Kendilik ve Güdülenme",
      "Varoluşçu Psikoterapi-2",
      "Psikoterapide Etik",
    ],
  },
];

export const extraCourses = [
  { title: "Psikanaliz Teorisi", names: "Freud, Adler, Jung" },
  { title: "Ego Psikolojisi Kuramı", names: "A. Freud, Erikson, Jacobson, Hartmann, Kris, Loewenstein, Rapaport" },
  { title: "Self Psikolojisi", names: "H. Kohut" },
  { title: "Ego Durumları Kuramı", names: "P. Federn" },
  { title: "Nesne İlişkileri Kuramı", names: "R. Fairbairn, Masterson, D. Winnicott, H. Guntrip, S. Stuart, M. Balint" },
  { title: "İlişkisel Kuram", names: "H. S. Sullivan, S. Mitchell, J. Greenberg" },
  { title: "Öznelerarası Alan Kuramı", names: "R. Stolorow" },
  { title: "Varoluşçu Psikoterapi Kuramı", names: "I. Yalom" },
  { title: "Zihinselleştirme Kuramı", names: "P. Fonagy" },
  { title: "Güdülenme Kuramı", names: "J. Lichtenberg" },
];
