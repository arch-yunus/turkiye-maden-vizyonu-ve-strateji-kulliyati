# Otonom Madencilik Sistemleri: Gelecein Operasyonel Mimarisi

Madencilik 4.0'in en kritik bilesenlerinden biri olan otonom sistemler, insan mudahalesini minimize ederek is guvenligini artirmayi ve operasyonel verimliligi maksimize etmeyi hedefler. Bu dokuman, mevcut teknoloji olgunlugunu, Turkiye'deki uygulanabilirlik potansiyelini ve sistemlerin entegrasyon mimarisini kapsamli bicimiyle ele almaktadir.

---

## 1. Otonom Nakliye Sistemleri (AHS - Autonomous Haulage System)

Acik ocak isletmelerinde kullanilan devasa kamyonlarin GPS, radar ve LIDAR sensorleri ile donatilarak sürücüsüz hale getirilmesidir. Komatsu'nun FrontRunner ve Caterpillar'in Command sistemleri sektorde referans kabul edilmektedir.

### Teknik Bilesenler

| Bilesgen | Teknoloji | Fonksiyon |
|:---|:---|:---|
| **Konumlandirma** | GNSS + RTK GPS (cm hassasiyeti) | Rota takibi ve nokta durdurma |
| **Engel Algilama** | LIDAR + 3D Radar + Stereo Kamera | Dinamik engel/insan tespiti |
| **Haberlesme** | LTE/5G + Mesh Radio | Kontrol merkezi ile surekli baglanti |
| **Karar Motoru** | Rule-based AI + Path Planning | Otonom rota kararlarim |

### Avantajlar

- **Yakit Tasarrufu:** Sabit hiz profili ve optimal rota ile %10-15 yakit azaltimi.
- **Lastik Omru:** Ani frenleme ve ivmelenmemenin azaltilmasiyla %20-30 lastik omru uzamasi.
- **7/24 Kesintisiz Calisma:** Vardiya kaybetmeden aralıksız operasyon.
- **Is Guvenligi:** Surucunun maruz kaldigi titresim ve toz riskinin tamamen elimine edilmesi.

### Turkiye Potansiyeli

Buyuk olcekli bor (Bandirma, Bigadic) ve linyit (Soma, Tuncbilek, Afsin-Elbistan) sahalarinda uygulanabilirlik yuksektir. ETI Maden Isletmeleri ve TKI'nin filo modernizasyon programlariyla entegre edilebilir.

---

## 2. Otonom Sondaj Makinesi (ADS - Autonomous Drilling System)

Yeralti ve yerustu sondaj islemlerinde, formasyon yapisina gore basinc ve donus hizini kendi ayarlayan akilli matkaplardir.

### Temel Yetenekler

- **MWD/LWD Entegrasyonu:** Sondaj sirasinda anlık formasyon verileri (direnc, yogunluk, por basinci).
- **Otonom Hedefleme:** Pre-planlanan jeolojik modele gore sondaj yuzeyi otomatik tanimi.
- **Akilli Bit Optimizasyonu:** Kaya sertligine gore donus hizi ve agirlik optimizasyonu.
- **Gercek Zamanli Veri Aktarimi:** Sondaj verileri jeolojik modelleme yazilimina anlık aktarilir.

---

## 3. Akilli Patlatma Tasarimlari (Smart Blast Design)

Yapay zeka algoritmalarinin kaya sertligini analiz ederek optimum patlayici miktarini ve gecikme surelerini hesaplamasi.

### Hesaplanan Parametreler

```
Kaya tipi (UCS, RQD) + Blok geometrisi + Titresim sinir degeri
         ↓
[ YZ Optimizasyon Motoru ]
         ↓
Optimum delik duzeni + Patlayici miktar + Gecikme sirasi
```

**Sonuc:**
- Minimum sarsinti (%40'a kadar azalma).
- Maksimum paralanma verimliligi (%15 daha ince granulometri).
- Hedef boyut dagiliminin birincil kirici maliyetine etkisi: %8 azalma.

---

## 4. Yer Alti Mobil Ekipman Otomasyonu (ATRS)

Yeraltinda calisan yuk tasiyicilar, bolter makineleri ve scaler cihazlarinin otomasyon entegrasyonu.

| Ekipman | Otomasyon Seviyesi | Kullanim Senaryosu |
|:---|:---|:---|
| Jumbo Delici | SAE Level 3 | Havali ve cicili delme |
| Shotcrete Robot | Level 4 | Beton zirhlama |
| Yuk Tasiyici (LHD) | Level 4 | Cevher tasima |
| Servis Araci | Level 2 | Malzeme lojistigi |

---

## 5. Drone ve Hava Araci Entegrasyonu

### Kullanim Alanlari

- **3D Fotogrametri:** Acik ocak hacim olcumu (haftalik/gunluk).
- **Termal Goruntulemesi:** Konveyorler ve ekipman sicaklik anomalilerinin tespiti.
- **Gas Monitorizasyon:** Yer alti methane/CO haritalaması (otonom drone zonu).
- **Guvenlik Devriyesi:** Cevre guvenligi ve izinsiz giris tespiti.

---

## 6. Gelecek Vizyonu: Karanlik Madenler (Dark Mines)

Tam otonom "karanlik madenler", sifir insan varligi ile en tehlikeli derinliklerde bile uretim yapilmasina olanak tanyacaktir.

```
2025: Yari-otonom filo yonetimi
2027: Tam otonom acik ocak operasyonu
2030: Ilk karanlik yeralti madeni prototipinin devreye alinmasi
2035: Karanlik maden standardinin endüstri normu haline gelmesi
```

Teknolojik engeller: 5G/LTE yeralti kapsama, robotik dokuma sistemleri ve AI karar guvenilirligi. Bu engellerin asimali, Madencilik 4.0'in en kritik AR-GE gundemini olusturmaktadir.

---

## Referanslar

- Komatsu FrontRunner AHS Teknik Dokumantasyonu (2024)
- Caterpillar Command for Hauling Whitepaper (2023)
- MTA Turkiye Maden Sahasi Teknik Raporlari
- TMMOB Maden Muhendisleri Odasi, Otomasyon Calisma Grubu Raporu (2024)
