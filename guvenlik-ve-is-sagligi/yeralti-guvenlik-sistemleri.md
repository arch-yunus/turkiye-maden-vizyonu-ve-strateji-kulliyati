# Yeralti Madenciliğinde Güvenlik Sistemleri ve Madencilik 4.0

Madencilik, dünyanın en tehlikeli meslekleri arasında yer almaya devam etmektedir. Madencilik 4.0 teknolojileri, bu tehlikeyi köklü bicimde azaltma potansiyeli tasimaktadir. Bu dokuman, modern güvenlik mimarisini, Türkiye istatistiklerini ve dijital güvenlik araçlarini kapsamli şekilde ele almaktadir.

---

## 1. Türkiye İş Güvenliği İstatistikleri

### Madencilik Sektörü Kaza Verileri (SGK)

| Yil | Is Kazası | Olum | Agir Yaralanma | LTIFR* |
|:---|:---|:---|:---|:---|
| 2019 | 4.821 | 78 | 312 | 14.2 |
| 2020 | 3.940 | 61 | 287 | 12.1 |
| 2021 | 4.210 | 69 | 301 | 13.4 |
| 2022 | 4.580 | 74 | 328 | 14.8 |
| 2023 | 4.320 | 71 | 315 | 13.9 |
| **AB Ort.** | — | — | — | **2.1** |

*LTIFR: Lost Time Injury Frequency Rate (1.000.000 çalışma saati başına)

**Kritik Bulgu:** Türkiye'nin LTIFR değeri AB ortalamasinin **6,6 katı** — bu açık dijital güvenlik yatırımının aciliyetini ortaya koymaktadır.

### Kaza Türleri Dağılımı

```
Göçük/Heyelan    ████████████████ 31%
Makina/Ekipman   ████████████ 24%
Düşme            █████████ 18%
Gaz/Patlama      ███████ 14%
Elektrik         ████ 8%
Diğer            ██ 5%
```

---

## 2. Kişisel Koruyucu Ekipman 4.0 (Akıllı KKD)

### Bağlı Kask (Connected Helmet)

Modern akıllı kask; tek bir başlık içinde onlarca sensör barındırır:

| Sensör | İşlev | Alarm Koşulu |
|:---|:---|:---|
| Gas Sensörü | CO, CH4, O2 | Eşik aşılınca titreşim + ses |
| İvmeölçer | Çarpma/düşme tespiti | > 4G ivme = otomatik acil çağrı |
| Biyometrik | Nabız, cilt sıcaklığı | Kalp ritmi anomalisi |
| GPS/UWB | Konum takibi | Yasaklı bölge girişi |
| Kamera | Görüntü kaydı | Anlık akış + AI analiz |
| Mikrofon | Ses kayıt/komut | Sesli SOS komutu |

### Akıllı Yelek ve Çizme

- **Düşme Koruyucu Yelek:** İvmeölçer ile düşme tespit → hava yastığı tetikleme (< 0.2 sn).
- **Basınç Sensörlü Çizme:** Yorgunluk tespiti, gece vardiyasında ayakta durma süresi izleme.

---

## 3. Personel Konumlama Sistemi (PTS)

### Teknoloji Seçenekleri

| Teknoloji | Hassasiyet | Kapsama | Maliyet | Yeralti Uyumu |
|:---|:---|:---|:---|:---|
| RFID Pasif | Oda düzeyi (~10m) | Kontrol noktaları | Çok düşük | Yüksek |
| RFID Aktif | ~3m | Ağ gerektirir | Düşük | Yüksek |
| UWB | 10-30 cm | Sınırlı alan | Orta | Orta |
| BLE (Bluetooth LE) | ~1-3m | Geniş alan | Düşük | Orta |
| Wi-Fi RTT | ~1-2m | Wi-Fi altyapısı | Orta | Orta |

### Tahliye Senaryosu Simülasyonu

```
Acil Durum Tetikleme (gaz/göçük)
         |
         v
[PTS Sistemi] → Tüm personel konumu haritada anlık
         |
         v
[AI Tahliye Planlayıcı] → Engel analizi → Optimal tahliye rotası
         |
         v
[Personele Yönlendirme] → Akıllı kasklarda ışıklı ok göstergesi
         |
         v
[Sayım Noktası] → Otomatik personel sayımı → Eksik kişi alarm
```

---

## 4. Yeralti Haberleşme Güvenlik Altyapısı

### Leaky Feeder (Sızdıran Koaksiyel Kablo) Sistemi

Yeralti madenciliğinde iletişimin omurgası:

- Galerilerin tüm uzunluğunda döşenen özel koaksiyel kablo.
- Kablo boyunca sürekli sinyal yayımı (her noktada haberleşme).
- Ses + veri entegrasyonu (VoIP + IoT veri trafiği).
- Yangın dayanıklı kablo (IEC 60332): 30 dakika yangın direnci.

### Çift Yedekli İletişim

```
[Ana Leaky Feeder Ağı]
         |
         + [Yedek Telsiz Ağı (TETRA)]
         |
         + [Fiber Optik Omurga]
         |
         v
[Komuta Merkezi] ← 3 bağımsız yol ile kesintisiz bağlantı
```

---

## 5. Kaya Patlaması (Rockburst) ve Göçük Önleme

### Mikrosismik İzleme ile Erken Uyarı

Kaya patlaması öncesinde birkaç saat-gün içinde artan mikrosismik aktivite AI ile tespit edilebilir:

```python
import numpy as np

def rockburst_risk_skoru(sismik_olaylar, pencere_saati=24):
    """
    Birim zamandaki sismik olay frekansı ve büyüklüğünü
    risk skoruna dönüştürür.
    """
    son_olaylar = [o for o in sismik_olaylar if o['saat'] <= pencere_saati]
    frekans = len(son_olaylar)
    toplam_enerji = sum(10**(1.5 * o['magnitüd'] + 9.1) for o in son_olaylar)
    
    # Ağırlıklı risk skoru (0-100)
    skor = min(100, (frekans * 2) + (np.log10(toplam_enerji + 1) * 10))
    return {
        'skor': round(skor, 1),
        'risk_seviyesi': 'KRITIK' if skor > 75 else 'YUKSEK' if skor > 50 else 'ORTA' if skor > 25 else 'DUSUK'
    }
```

---

## 6. Havalandırma Güvenliği (VoD - Ventilation on Demand)

### Geleneksel vs. Akıllı Havalandırma

| Parametre | Geleneksel | VoD (AI Kontrollü) |
|:---|:---|:---|
| Fan Çalışması | 7/24 tam kapasite | Personel varlığına göre % ayar |
| Enerji Tüketimi | Baz | **%20-35 azalma** |
| Gaz Seviyesi | Manuel ölçüm | Anlık 200+ sensör |
| Patlama Sonrası | Manuel değerlendirme | Otomatik zonlama + bypass |

---

## 7. Dijital Güvenlik Yönetim Sistemi (DGYS)

Tüm güvenlik sistemlerini tek platformda birleştiren yazılım çerçevesi:

- Gerçek zamanlı kaza raporlama (mobil uygulama).
- İş izni (permit-to-work) dijital onay akışı.
- Ekipman denetim checklist'i (kağıtsız).
- Acil tatbikat yönetimi ve simülasyonu.
- KPI dashboard: LTIFR, TRIFR, Near-miss oranı.

---

## Referanslar

- SGK, İş Kazası İstatistikleri Yıllık Raporu (2023)
- Soma Kömür Madeni Faciası Soruşturma Komisyonu Raporu (2014)
- ISO 45001:2018, İş Sağlığı ve Güvenliği Yönetim Sistemi
- Eurostat, European Mining Safety Statistics (2023)
- ICM (International Council on Mining), Health and Safety Protocol (2023)
- TMMOB MMO, Türkiye Madencilik İş Güvenliği Özel Raporu (2024)
