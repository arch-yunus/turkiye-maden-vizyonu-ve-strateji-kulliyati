# Yapay Zeka Destekli Sismik Veri Yorumlama

Sismik yontem, madencilikte ve petrol/gaz arastirmalarinda yeralti yapısini goruntulemenin en guclu araclarindan biridir. Yapay zeka ve derin ogrenme algoritmalarinin sismik veri isle entegrasyonu, yorumlama surecini hem hizlandirmakta hem de dogrulugunu koklü bicimde artirmaktadir.

---

## 1. Sismik Yontemin Temelleri

### 1.1 Sismik Dalga Turleri

| Dalga Tipi | Sembol | Hareket Sekli | Kullanim |
|:---|:---|:---|:---|
| **P Dalgasi** | P (Primary) | Sıkıştırma-genisletme | Derin yapı arama |
| **S Dalgasi** | S (Secondary) | Kayma | Litoloji ayirimi |
| **Yuzey Dalgasi** | R, L | Yuzey boyunca | Sığ zemin etüdu |
| **Dönüstürülmüs Dalga** | PS, SP | P-->S veya S-->P | Fracture analizi |

### 1.2 Sismik Refleksiyon vs. Kirinim

- **Refleksiyon:** Derin (100m-10km), kesin tabaka siniri goruntuleme. NTE, bakir, petrol arama.
- **Kirinim:** Sığ (0-200m), mühendislik jeofizigi, temel kaya derinligi.

---

## 2. Geleneksel Veri Isleme Pipeline'i

```
Ham Sismik --> Filtrele --> NMO Duzeltmesi --> Stack --> Migrasyon --> Yorumlama
  (Field)   (dekonv.)   (Normal Moveout)   (Toplama)  (Goruntuye cevirme)
```

**Gecmisteki Sorun:** Yorumlama asamasi tamamen uzman jeofizikci tarafindan manual yapilir, haftalar-aylar surer.

---

## 3. Yapay Zeka Uygulamalari

### 3.1 Otomatik Fay ve Katman Siniri Tespiti

Konvolusyonel Sinir Aglari (CNN), egitilmis verilerle sismik kesitten otomatik olarak:
- Fay hatlarini (faults)
- Stratigrafik katman sinirlarini (horizons)
- Tuz kubbeleri ve diger anomalileri
tespit eder.

```python
# Ornek: Sismik veri uzerinde fay tespiti
import numpy as np
from scipy.signal import convolve2d

def hesapla_semblance(sismik_matris, pencere=5):
    """
    Semblance koherens hesaplama - fay zonlarini dusuk koherensle belirler.
    Fay bolgeleri: semblance ~ 0 (dusuk)
    Duzgun katmanlar: semblance ~ 1 (yuksek)
    """
    m, n = sismik_matris.shape
    semblance = np.zeros((m, n))
    yaricap = pencere // 2
    for i in range(yaricap, m - yaricap):
        for j in range(yaricap, n - yaricap):
            pencere_verisi = sismik_matris[i-yaricap:i+yaricap+1, j-yaricap:j+yaricap+1]
            pay = np.sum(pencere_verisi) ** 2
            payda = pencere ** 2 * np.sum(pencere_verisi ** 2) + 1e-10
            semblance[i, j] = pay / payda
    return semblance

def tespit_fay_zonlari(semblance_haritasi, esik=0.3):
    """Dusuk semblance bolgelerini fay zonu olarak isaretler."""
    return semblance_haritasi < esik
```

### 3.2 Sismik Fasiyes Siniflandirmasi

Unsupervised ML (k-means, GMM) ile sismik dalgacik morfolojisi bazında litoloji gruplaması:

| Fasiyes | Sismik Karakteristik | Litoloji Yorumu |
|:---|:---|:---|
| 1 | Yuksek amplitud, karisik polarite | Cevher/metal yatagi |
| 2 | Dusuk amplitud, surekli | Shal/kil |
| 3 | Yuksek amplitud, tek polarite | Kireçtasi, yogun kaya |
| 4 | Kaotik | Fay/kirik zonu |
| 5 | Yansima yok | Kristalen temel kaya |

### 3.3 Sismik Inversion (Akustik Empedans)

AI destekli sismik inversion, sismik veriyi kaya ozelligi verisine (P-dalga hizi, younlugu) donusturur. Boylece:
- **Cevher litolojisi:** Yogun metalik cevher → yuksek akustik empedans
- **Por basinci:** Asiribasinc alanları → dusuk hiz anomalisi
- **Gaz doygunlugu:** Bright spot, flat spot

---

## 4. Makine Ogrenmesi Modelleri Karsilastirmasi

| Model | Guclu Yonu | Zayif Yonu | Sismik Uygulamasi |
|:---|:---|:---|:---|
| **Random Forest** | Yorumlanabilir, hizli | Buyuk veri performansi sinirli | Litoloji siniflandirma |
| **CNN (2D/3D)** | Gorsel desen tespiti | Cok veri gerektirir | Fay/horizon tespiti |
| **LSTM / RNN** | Zaman serisi tahmini | Uzun egitim suresi | Sismik dalga tahmini |
| **GAN** | Sentetik veri uretimi | Egitim istikarsizligi | Eksik veri tamamlama |
| **Transformer** | Global korelasyon | Yuksek hesaplama maliyeti | Bütünsel 3D yorum |

---

## 5. Passif Sismik Izleme (Microseismics)

Aktif kaynak kullanmadan, cevrenin dogal veya operasyonel titresimlerini kaydeden sistem.

### Maden Uygulamalari

- **Rockburst Tespiti (Kaya Patlamasi):** Sismik olay katalogu ile tehlikeli yuzey belirleme.
- **Hydrofracture Izleme:** Fracking sismik yaymi gercek zamanli haritalama.
- **Rezervuar Izleme:** Enjeksiyon basincinin sismik etkisi.
- **Baraj Sagliği:** Toprak dolgu barajda mikrosismik aktivite izleme.

### Passif Sismik Ag Tasarimi

```
Hassas Sismometre (3-bilesenli)
         |
    [Dijital Kayitci]  <-- GPS ile senkronize zaman damgasi
         |
    [Telemetri]  <-- Saha-sunucu canlı aktarim
         |
    [Merkez Islem]
    - Otomatik faz belirleme (P/S)
    - Hiposantir lokasyon (GridSearch/Bayesian)
    - Magnitüd hesaplama
    - ML tabanli olay siniflandirma (patlama vs. dogal sismik)
```

---

## 6. Turkiye Sismik Aktivitesi ve Madencilik

Turkiye, dunyenin en aktif sismik bolgelerin ucundadir. DAFZ (Dogu Anadolu Fay Zonu) ve KAFZ (Kuzey Anadolu Fay Zonu) boyunca pek cok maden isletmesi bulunmaktadir.

| Maden Bolgesi | Yakin Fay | Sismik Risk | Onlem |
|:---|:---|:---|:---|
| Erzincan (Copler) | DAFZ | Yuksek | Mikrosismik ag + reel zamanli alarm |
| Biga Yarimadasif | NAFZ kolu | Orta | Sismik izleme istasyonu |
| Adiyaman | DAFZ alt sube | Yuksek | ÇED'de sismik risk analizi zorunlu |
| Usak (Kisladag) | Graben zonlari | Orta | Sev stabilitesi mikrosismik |

---

## Referanslar

- SEG (Society of Exploration Geophysicists), Machine Learning in Seismic (2024)
- Mosser et al., Seismic Facies Classification with Deep Learning (2018)
- AFAD, Turkiye Deprem Tehlikesi Haritasi (2024)
- MTA Sismik Proje Raporlari, Anadolu Havzalari (2023)
- Chevron, AI-Driven Seismic Interpretation (2024)
