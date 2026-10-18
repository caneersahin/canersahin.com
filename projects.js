// Proje listesi. Yeni proje eklemek ya da durumunu değiştirmek için sadece bu diziyi düzenle.
// status: "live" (yayında) | "moving" (sunucuya taşınıyor; sitede "Yakında" yazar)
// icon: index.html içindeki ICONS listesinden biri
window.PROJECTS = [
  {
    name: "Flyscope",
    description: "Uçak bileti fiyat takibi ve bildirim",
    url: "https://flyscope.net",
    status: "live",
    icon: "plane",
  },
  {
    name: "AI Fiş Okuyucu",
    description: "Fiş ve faturayı yapay zekâ ile okur",
    url: "https://ai-fis-okuyucu.canersahin.com",
    status: "live",
    icon: "receipt",
  },
  {
    name: "Online Kura",
    description: "İsim listesinden adil kura çekimi",
    url: "https://kuraapp.canersahin.com",
    status: "live",
    icon: "dice",
  },
  {
    name: "Hava Durumu",
    description: "Yapay zekâ ile SMS & tweet hava durumu",
    status: "moving",
    icon: "cloud",
  },
  {
    name: "Hatırlatıcı",
    description: "Zamanı gelince hatırlatan notlar",
    status: "moving",
    icon: "bell",
  },
  {
    name: "BiGörsel",
    description: "Görsel arama uygulaması",
    status: "moving",
    icon: "camera",
  },
  {
    name: "Fırsat Rotası",
    description: "Ucuz uçak bileti fırsatları",
    status: "moving",
    icon: "route",
  },
];
