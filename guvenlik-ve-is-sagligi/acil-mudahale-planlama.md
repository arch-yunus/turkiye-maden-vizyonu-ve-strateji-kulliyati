# Maden Acil Müdahale Planlaması ve Kriz Yönetimi

Madencilik kazaları, doğası gereği hızlı ve koordineli müdahale gerektiren kompleks acil durumlardır. Bu dokuman, modern acil müdahale planlama çerçevesini, dijital araçları ve Türkiye özgü senaryoları ele almaktadır.

---

## 1. Acil Durum Türleri ve Öncelik Matrisi

| Acil Durum | Olasılık | Etki | Öncelik | Birincil Tehdit |
|:---|:---|:---|:---|:---|
| Yeralti Göçüğü | Orta | Çok Yüksek | KRİTİK | Personel hapsolması |
| Gaz Patlaması (CH4) | Düşük | Çok Yüksek | KRİTİK | Toplu ölüm riski |
| Yangın (Yeralti) | Düşük | Yüksek | KRİTİK | Zehirli duman |
| Sel/Su Baskını | Orta | Yüksek | YÜKSEK | Tünel sular altında |
| Sev Kayması (Açık Ocak) | Orta | Yüksek | YÜKSEK | Ekipman kaybı |
| Kimyasal Sızıntı | Düşük | Orta | ORTA | Çevre + personel |
| Elektrik Çarpması | Yüksek | Değişken | ORTA | Bireysel |

---

## 2. ICS (Incident Command System) Uyarlaması

Maden acil durumları için önerilen komuta yapısı:

```
[Olay Komutanı - Maden Müdürü]
         |
    +----+----+----+----+
    |    |    |    |    |
[Ops] [Log] [Plan] [Mal] [Güv]
(Operasyon)(Lojistik)(Planlama)(Mali)(Güvenlik)
    |
    +-- [Kurtarma Ekibi]
    +-- [Tıbbi Ekip]
    +-- [Çevre Ekibi]
    +-- [Medya İlişkileri]
```

---

## 3. Madencilikte Kurtarma Teknolojileri

### 3.1 Sığınak Odaları (Refuge Chambers)

Göçük veya yangın durumunda personelin sığınabileceği zırhlı odalar:

| Parametre | Standart | Açıklama |
|:---|:---|:---|
| Kapasite | 20-50 kişi | Saha büyüklüğüne göre |
| Hava Stoku | 96 saat (4 gün) | Basınçlı O2 + CO2 absorban |
| İletişim | Kablolu telefon + ELF radyo | Göçük altında çalışır |
| Su + Gıda | 72 saatlik | Standart stok |
| Tıbbi | İlk yardım seti + defibrilatör | — |
| Yapısal Dayanım | 200 ton üst yük | Çöküş altında sağlam |

### 3.2 Kurtarma Robotu

Göçük sonrası insan girişinin imkânsız olduğu alanlarda:

- **Borehole Camera:** Sığınak veya hapsolmuş personeli görüntülemek için 100-200mm çaplı kuyudan kamera indirme.
- **MOLE Robotu:** Küçük çaplı tünel içinde ilerleyip iletişim kablosu döşeyebilen paletli robot.
- **Akustik Kurtarma:** Hayatta olan personelin vuruş sinyallerini tespit eden sismik anten dizisi.

---

## 4. Dijital Acil Müdahale Araçları

### 4.1 Acil Yönetim Yazılımı

```
[Alarm Tetikleme] → [Otomatik Bildirim] → [Komuta Platformu]
                          |
              +-----------+-----------+
              |           |           |
        [SMS/Uygulama] [E-posta] [Ses Çağrısı]
              |
        [Tüm Paydaşlar]: AFAD, SGK Müfettişi, Hastane, Aileler
```

### 4.2 Dijital Çift ile Tahliye Simülasyonu

- Maden dijital ikizinde farklı kaza senaryoları simüle edilir.
- En hızlı tahliye rotaları hesaplanır.
- Sığınak kapasite optimizasyonu yapılır.
- Yıllık tatbikat bu simülasyon üzerinden planlanır.

---

## 5. Türkiye'de Zorunlu Gereksinimler

### 6331 Sayılı İş Sağlığı ve Güvenliği Kanunu

| Gereklilik | Kapsam | Periyot |
|:---|:---|:---|
| Risk Değerlendirmesi | Tüm işyerleri | Her 5 yıl veya değişimde |
| Acil Eylem Planı | Tüm işyerleri | Güncel tutulacak |
| İSG Uzmanı | 50+ çalışan | Tam zamanlı |
| İşyeri Hekimi | 50+ çalışan | Tam zamanlı |
| Kurtarma Tatbikatı | Maden işyerleri | Yılda 2 kez |
| KVKK / Veri | Kaza kayıtları | 10 yıl saklama |

### Maden İşyerlerinde Özel Yönetmelik

- Yeraltı madeni: Her vardiya başlangıcında gaz ölçümü zorunluluğu.
- Patlayıcı kullanımında: Yetkili ateşleyici + clearance prosedürü.
- Tahlisiye (kurtarma) ekibi: 50+ kişilik maden için tam donanımlı 6 kişilik ekip.

---

## Referanslar

- 6331 Sayılı İSG Kanunu ve Madencilik Yönetmelikleri
- MSHA (ABD), Mine Emergency Response Procedures (2024)
- ICMM, Emergency Preparedness and Response (2023)
- AFAD, Türkiye Kriz Yönetimi Kılavuzu (2023)
- Soma Madeninin Ardından: Bağımsız Kaza Soruşturma Raporu (2015)
