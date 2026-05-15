# Dijital Ikiz (Digital Twin) Teknolojisi: Madencilikte Sanal Gerceklik

Dijital Ikiz, fiziksel bir varligin (maden sahasi, tesis, makine) tam olarak ayni dijital kopyasinin olusturulmasidir. Bu sanal kopya, gercek zamanli sensor verileriyle beslenerek fiziksel varligi birebir yansitir ve "ya olsaydi?" sorularinin gercek ortami etkilemeden test edilmesine olanak tanir.

---

## 1. Dijital Ikiz Mimarisi

```
                    [Fiziksel Maden Sahasi]
                           |
         +--------+--------+---------+--------+
         |        |                  |        |
     [IoT      [LIDAR           [Sondaj   [Hava
     Sensor]   Tarama]          Veri]    Araci]
         |        |                  |        |
         +--------+--------+---------+--------+
                           |
                    [Veri Toplama Katmani]
                    (MQTT / OPC-UA / REST)
                           |
                    [Bulut Isleme Motoru]
                    (AWS IoT / Azure DT)
                           |
               +-----------+----------+
               |                      |
        [3D Model Guncelleme]   [AI Analitik]
        (BIM / IFC / PointCloud) (Anomali / Tahmin)
               |                      |
               +-----------+----------+
                           |
                    [Dijital Ikiz Platformu]
                    (Unity / Cesium / Gemini)
                           |
               +-----------+----------+
               |                      |
        [Kontrol Merkezi]    [Mobil / AR/VR]
        (Dashboard)          (Saha Muhendisi)
```

---

## 2. Uygulama Katmanlari

### 2.1 Jeolojik Model Ikizi
Maden sahasinin tam 3D jeolojik modeli; sondaj loglar, sismik kesitler ve yuzey tarama verileriyle dinamik olarak guncellenir.

- **Rezerv Guncelleme:** Her yeni sondajin ardindan rezerv tahmini otomatik olarak revize edilir.
- **Grade Kontrol:** Cevher kalite haritasi gercek zamanli olarak olusturulur.
- **Heyelan Riski:** Stabilite izlemesi ile potansiyel sev kaymasi erken tespit edilir.

### 2.2 Ekipman Ikizi
Her bir makine ve aracin dijital kopya:

| Veri Kaynaklari | Kullanim Amaci |
|:---|:---|
| Titresim sensoru | Yatakta asınma tahmini |
| Hidrolik basinc | Pompaj sistemi saglik izleme |
| Motor ISI + RPM | Optimal yakit yonetimi |
| GPS Konum | Filo izleme ve rota optimizasyonu |

### 2.3 Proses Ikizi
Kirma-ogutme-flotasyon tesisinin tum dahili akisinin anlık simülasyonu:
- Besleme hizi optimizasyonu.
- Cevher kalirligi degisimlerine gore reagent dozaj ayari.
- Enerji sarfiyati minimizasyonu.

---

## 3. Turkiye'de Dijital Ikiz Uygulamalari

### ETI Maden Kirka Tesisi (Bor)
- Kalkasit flotasyon devresinin proses simülasyonu.
- Anlık cevher verim tahmini ile flotasyon ayarlarinin otomatik optimizasyonu.

### Tupras Rafineri Analogu
Gercik bir maden ornegi olmasa da Turkiye'nin en buyuk endustriyel dijital ikiz projesi olarak referans alinmaktadir.

---

## 4. Maliyet-Fayda Analizi

| Kategori | Yillik Kazanim | Aciklama |
|:---|:---|:---|
| Plansiz Durus Azaltimi | %20-25 | Kestirimci bakim ile erkenden onleme |
| Enerji Verimliligi | %12-18 | Proses optimizasyonu |
| Is Guvenligi | %40 kaza azalimi | Uzak izleme ile riskli bolge eliminasyonu |
| Cevher Verimliligi | +%5-8 | Grade kontrol ve proses optimizasyonu |

---

## 5. Gelecek: Ozerk Dijital Ikiz

Yapay zeka ile desteklenmis dijital ikiz sistemleri, sadece mevcut durumu yansitmakla kalmayip geleceği tahmin eden ve operasyonu kendi kendine optimize eden bir yapiya kavusacaktir.

- **Preditif Analitik:** Bir sonraki 72 saatin simulasyonu.
- **Otonom Karar:** Anormali tespitinde insana gerek kalmadan mudahale baslatan sistem.
- **Doga ile Entegrasyon:** Hava durumu ve sismik veriyi de kapsayan butunlesik model.

---

## Referanslar

- Siemens Digital Industries, Mining Digital Twin Whitepaper (2024)
- Microsoft Azure Digital Twins for Mining (2023)
- CSIRO Australia, Digital Twin in Hard Rock Mining (2024)
- MTA, Sayisal Madencilik Vizyon Belgesi (2023)
