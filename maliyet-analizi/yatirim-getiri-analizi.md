# Madencilik 4.0: Yatirim Getiri Analizi (ROI ve IRR Cercevesi)

Bu dokuman, Madencilik 4.0 teknoloji yatirimlarinin finansal degerlendirmesi icin kullanilabilecek metodoloji, hesaplama cercevesi ve senaryo analizlerini icerir.

---

## 1. Temel Finansal Metrikler

### 1.1 Net Bugunku Deger (NPV)

```
NPV = SUM[ CFt / (1+r)^t ] - I0

Parametreler:
  CFt = t. yildaki nakit akisi
  r   = iskonto orani (madencilik: %8-12 tipik)
  t   = yil (1'den N'e kadar)
  I0  = baslangic yatirimi
```

**Karar Kurali:** NPV > 0 ise yatirim degerlidir.

### 1.2 Ic Verim Orani (IRR)

Nakit akislarini sifira esitleyen iskonto orani. Madencilik 4.0 projeleri icin beklenti: IRR > %15 (minimum engel orani).

### 1.3 Geri Odeme Suresi (Payback Period)

Madencilik 4.0 alt-teknolojilerine gore geri odeme sureleri:

| Teknoloji | Tipik Geri Odeme | Belirsizlik Araligi |
|:---|:---|:---|
| Kestirimci Bakim | 18-24 ay | Dusuk |
| Enerji Yonetim Sistemi | 12-20 ay | Dusuk |
| Otonom Nakliye (1-2 arac) | 3-4 yil | Orta |
| Tam Dijital Ikiz | 2-3 yil | Orta-Yuksek |
| Blockchain Sertifikasyon | 4-6 yil | Yuksek |

---

## 2. Senaryo Analizi: 10 Yillik Projeksiyon

### Baz Senaryo: Orta Olcekli Linyit Madeni

**Varsayimlar:**
- Uretim: 2M ton/yil
- Kapasite kullanim orani (mevcut): %72
- Enerji maliyeti payi: %28 OPEX
- Teknoloji yatirim paketi: $15M

| Yil | OPEX Tasarrufu ($M) | Verimlilik Artisi ($M) | Kaza Maliyeti Azalimi ($M) | Toplam Fayda ($M) |
|:---|:---|:---|:---|:---|
| 1 | 0,8 | 0,3 | 0,2 | **1,3** |
| 2 | 1,5 | 0,8 | 0,4 | **2,7** |
| 3 | 2,1 | 1,2 | 0,5 | **3,8** |
| 4 | 2,4 | 1,5 | 0,6 | **4,5** |
| 5 | 2,6 | 1,8 | 0,7 | **5,1** |
| 6-10 | 2,8 avg | 2,0 avg | 0,8 avg | **5,6 avg** |

**NPV (r=%10):** ~$18M | **IRR:** ~%22 | **Geri Odeme:** 3,2 yil

---

## 3. Hassasiyet Analizi

Hangi degiskenin NPV'yi en cok etkiledigini gosteren "tornado grafigi" yaklasimi:

```
Degisken               Duyu | Etki Yonu
----------------------+------+-----------
Enerji Fiyati          Yuksek | (+) tasarruf artar
Is Gucu Maliyeti       Yuksek | (+) otomasyon faydasi artar
Ham Maden Fiyati       Orta   | (+/-) verimlilik faydasi degisir
Teknoloji CAPEX        Orta   | (-) yatirim artarsa NPV duser
Kaza Frekansi          Dusuk  | (+) guvenlik faydasi
Iskonto Orani          Orta   | (-) oran artarsa NPV duser
```

---

## 4. Finansman Modelleri

### 4.1 Kamu Destekli Finansman
- **KOSGEB Dijital Donusum Destegi:** KOBi'lere hibe + dusuk faizli kredi.
- **TKI/ETI Maden Modernizasyon Fonu:** Kamuya ait isletmeler icin ozel butce kalemi.
- **Kalkinma Bankasi Yeşil Kredi:** Yeşil madencilik projeleri icin %2 altinda faiz.

### 4.2 Ozel Sermaye Modelleri
- **Equipment-as-a-Service (EaaS):** Otonom arac filosunu satin almak yerine abonelik modeli.
- **Performans Bazli Sozlesme:** Teknoloji saglayicisinin tasarrufa ortak oldugu model.
- **Sektor Konsorsiyumu:** Kucuk isletmelerin ortaklasa dijital altyapi kurulmasi.

---

## 5. Risk Matrisi

| Risk | Olasilik | Etki | Azaltma Onlemi |
|:---|:---|:---|:---|
| Teknoloji Adaptasyon Gecligi | Orta | Yuksek | Pilot proje + egitim programi |
| Siber Guvenlik | Dusuk | Cok Yuksek | IEC 62443 sertifikasyonu |
| Veri Gizliligi | Dusuk | Orta | On-premise veri isleme |
| Yetersiz Baglanti | Orta | Yuksek | Hibrit (5G+Mesh) altyapi |
| Mevzuat Belirsizligi | Dusuk | Orta | Yasal calisma grubu kurulumu |

---

## Referanslar

- PwC Mining Industry Capital Projects (2024)
- EY, Return on Investment for Mining Technology (2023)
- Turkiye Kalkinma Fonu, Yeşil Endustri Yatirim Kilavuzu (2024)
- McKinsey Center for CEO Excellence, Mines of the Future (2024)
