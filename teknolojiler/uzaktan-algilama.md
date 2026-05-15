# Uzaktan Algilama Teknolojileri: Uydu ve IHA Tabanli Maden Arama

Uzaktan algilama (Remote Sensing), elektromanyetik spektrumun farkli bantlarini kullanarak yeryuzunu yuzlerce hatta binlerce kilometre uzakliktan analiz etme bilimidir. Maden aramada devrimsel bir rol uslenen bu teknoloji, sahaya gitmeden olasi cevherlesme zonlarini belirlemeye olanak tanir.

---

## 1. Elektromanyetik Spektrum ve Maden Aramasi

### Kullanilan Bantlar ve Hedef Mineraller

| Spektral Bant | Dalga Boyu | Tespit Edilen Mineral/Ozellik |
|:---|:---|:---|
| **Gorünur Isik (VIS)** | 400-700 nm | Demir oksit (kirmizi renk), alterasyon zonlari |
| **Yakin Kizilotesi (NIR)** | 700-1000 nm | Bitki örtüsü anomalisi (zehirli maden uzerine bitkisiz alan) |
| **Kisa Dalga Kizilotesi (SWIR)** | 1000-2500 nm | Kil mineraller, karbonatlar, sülfatlar |
| **Termal Kizilotesi (TIR)** | 8000-14000 nm | Sicaklik anomalisi, jeotermal, silika |
| **Radar (SAR)** | 1-100 cm | Yuzey defekti, heyelan, yer sarsintisi etkisi |

---

## 2. Uydu Sistemleri: Maden Kullanım Perspektifi

### 2.1 Multispektral Uydular

| Uydu | Operator | Cozunurluk | Yeniden Ziyaret | Kanal Sayisi |
|:---|:---|:---|:---|:---|
| **Sentinel-2** | ESA (ucretsiz) | 10-60 m | 5 gun | 13 kanal |
| **Landsat 9** | USGS (ucretsiz) | 15-100 m | 16 gun | 11 kanal |
| **WorldView-3** | Maxar | 0.31 m | 1-4 gun | 29 kanal |
| **SPOT 7** | Airbus | 1.5-6 m | 26 gun | 5 kanal |
| **Turk Gozetim Uydulari** | TURKSAT/TUBITAK | 0.5 m | 2-3 gun | 4-8 kanal |

### 2.2 SAR (Sentetic Apertur Radar) Uydular

| Uydu | Ozellik | Maden Uygulamasi |
|:---|:---|:---|
| **Sentinel-1** | ESA, ucretsiz C-band | Heyelan tespiti, subsidans |
| **COSMO-SkyMed** | X-band, 1m | Zemin deformasyonu mm hassasiyeti |
| **ALOS-2 PALSAR** | L-band | Agac ortusu altinda toprak yapisi |
| **TerraSAR-X** | X-band, 0.25m | Acik ocak deformasyon haritasi |

---

## 3. IHA (Insansiz Hava Araci) Platformlari

### 3.1 Sabit Kanatli vs. Multikopter Karsilastirmasi

| Parametre | Sabit Kanatli (Fixed Wing) | Multikopter (Koptör) |
|:---|:---|:---|
| Ucus Suresi | 2-8 saat | 20-45 dakika |
| Kapsama Alani | 500-5000 ha/ucus | 10-100 ha/ucus |
| Takeoff | Pist/katapult gerektirir | VTOL, her yerden |
| Hassasiyet | Daha az stabil | Hassas hover |
| Maden Kullanimi | Genis saha haritalama | Detay inceleme, yapı kontrol |

### 3.2 Maden IHA Sensor Entegrasyonu

```
[IHA Plaftormu]
      |
      +-- [RGB Kamera]        --> Fotogrametri, 3D model
      +-- [Multispektral]     --> Bitki stresi, alterasyon haritasi
      +-- [Hiperspektral]     --> Mineral haritalama (200+ kanal)
      +-- [LiDAR]             --> Hassas DSM/DTM, hacim olcumu
      +-- [Termal Kamera]     --> Sicaklik anomalisi
      +-- [Gas Sensorleri]    --> CH4, SO2, CO
      +-- [Magnetometre]      --> Manyetik anomali, demir oksit
      +-- [Gravimetre]        --> Yogunluk anomalisi (yogun cevher yatagi)
```

---

## 4. Hiperspektral Uzaktan Algilama: Maden Arama Cumagecesi

Hiperspektral goruntuler, 200-400 kanal spektral bilgi icerdigi icin "mineral parmak izi" olusturulmasina olanak tanir.

### SWIR Mineral Haritalamasinda Tespit Edilen Mineraller

- **Kil Mineral Grubu:** Kaolinit, Illit, Smektit (hidrotermal alterasyon gostergesi)
- **Karbonat Mineraller:** Kalsit, Dolomit, Manyezit
- **Sülfat Mineraller:** Alunit, Jarosit (asit maden dreni potansiyeli)
- **Demir Oksitler:** Hematit, Götit, Limonit (demirli cevherlesme gostergesi)
- **Silikatlar:** Muskovit, Biotit, Hornblend

### Turkiye'de Hiperspektral Kullanim

MTA, 2022'den itibaren EO-1 Hyperion ve PRISMA (ASI) verileriyle Dogu Anadolu'da NTE ve bakir anomali haritalamasi gerceklestirmektedir.

---

## 5. Fotogrametri ve 3D Nokta Bulutu

### Is Akisi

```
IHA Ucusu (GCP ile) --> Ham Fotograf --> Pix4D/Agisoft --> 3D Nokta Bulutu
                                                               |
                         +-------------------+-----------------+
                         |                   |                 |
                    [Ortomozaik]        [Dijital          [3D Mesh
                    (Harita)            Arazi Modeli]     Modeli]
                         |                   |
                    Hacim Hesabi       Heyelan Analizi
```

### Hassasiyet ve GCP Gerekliligi

| GCP Sayisi | Yatay Hassasiyet | Dikey Hassasiyet |
|:---|:---|:---|
| 0 (GPS only) | ±3-5 m | ±5-10 m |
| 3-5 GCP | ±5-10 cm | ±10-20 cm |
| 10+ GCP | ±2-3 cm | ±3-5 cm |

---

## 6. GIS Analiz ve Entegrasyon

### Katmanli Analiz Yaklaşimi

Uzaktan algilama verilerinin GIS platformlarinda (QGIS, ArcGIS, Google Earth Engine) entegrasyonu:

1. **Temel Jeoloji Haritasi:** 1:25.000 ölcekli MTA jeoloji haritasi.
2. **SAR Subsidans:** Deformasyon haritasi (InSAR tekniği).
3. **Multispektral Alterasyon:** Demir oksit ve kil mineral zonlari.
4. **Heyelan Envanter:** Litoloji + egim + yagis kovariasyonu.
5. **Altyapi Katmani:** Yol, elektrik hatti, su kaynaklari mesafe analizi.
6. **Tapu ve Ruhsat:** Tapu Kadastro ve MAPEG ruhsat polilgon ovrlaylari.

**Cikti:** Arama oncelik haritasi (prospect map) — en yuksek potansiyel 10 lokasyon.

---

## 7. Yapay Zeka ile Anomali Tespiti

### CNN Tabanli Maden Anomali Siniflandirmasi

```python
# Ornek: Sentinel-2 verisiyle demir oksit anomali tespiti
import numpy as np

def hesapla_ferric_oxide_index(band4, band2):
    """
    Ferric Oxide Content Index (FOCI)
    Band4 = Kirmizi (Red, 665nm)
    Band2 = Mavi (Blue, 490nm)
    """
    foci = band4 / band2
    return np.clip(foci, 0, 5)

def tespit_alterasyon_zonu(swir1, swir2, nir):
    """
    Clay Mineral Ratio - SWIR bantlari ile kil mineral tespiti
    swir1 = Band 11 (1610 nm), swir2 = Band 12 (2190 nm)
    """
    clay_index = swir1 / swir2
    return clay_index
```

---

## Referanslar

- ESA Copernicus Programme, Sentinel Data Access (sentinel.esa.int)
- USGS, Landsat Science (usgs.gov/landsat)
- MTA Genel Mudurlugu, Uzaktan Algilama ve GIS Uygulamalari Raporu (2023)
- Kuosmanen et al., Hyperspectral Remote Sensing in Mineral Exploration (2022)
- International Journal of Remote Sensing, Mining Applications Review (2024)
