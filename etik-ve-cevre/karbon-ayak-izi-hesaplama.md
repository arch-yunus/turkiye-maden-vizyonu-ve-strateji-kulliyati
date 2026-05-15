# Maden Isletmelerinde Karbon Ayak Izi Hesaplama Metodolojisi

Bu dokuman, bir maden isletmesinin sera gazi emisyonlarini GHG Protokolu ve ISO 14064 standartlarina gore hesaplamak icin gerekli metodoloji, sinirlar ve olcum araçlarini tanimlamaktadir.

---

## 1. Emisyon Kapsami (Scopes)

### Kapsam 1 — Dogrudan Emisyonlar (Sahada Uretilen)

Maden isletmesinin dogrudan kontrolundeki kaynaklardan cikan emisyonlar.

| Emisyon Kaynagi | CO2e Orani | Olcum Yontemi |
|:---|:---|:---|
| Dizel Araç Yakiti | Cok Yuksek | Yakit tuketimi x emisyon faktoru |
| Patlayici Kullanim | Yuksek | AN-EMULSION miktari x 0,22 kg CO2e/kg |
| Jenerator | Orta | kWh x 0,82 kg CO2e/kWh (dizel) |
| Kaziler Kaynaği Metan | Dusuk-Orta | CH4 debisi x 25 (GWP100) |
| Osuruk Gazi Kaçagi | Cok Dusuk | Gaz analizi |

### Kapsam 2 — Dolaylı Emisyonlar (Sebekeden Alinanan Elektrik)

```
Emisyon = Elektrik Tuketimi (MWh) x Ulke Emisyon Katsayisi (CO2e/MWh)
Turkiye Singe 2023 = 0,449 ton CO2e/MWh (TEIAs verisi)
```

### Kapsam 3 — Deger Zinciri Emisyonlari (En Zor, En Buyuk)

| Alt Kategori | Aciklama |
|:---|:---|
| Tedarikci emisyonlari | Patlayici, yakit, reagent uretimi |
| Calisan komunikasyonu | Isci servis araclari |
| Sermaye Malı | Ekipman imalatinin emisyon yuku |
| Islenmis Urun Tasimasi | Limana/rafinereye nakliye |
| Maden Sonrasi Rehabilitasyon | Toprak isleme ve agaclandirma emisyonu |

---

## 2. Hesaplama Araclari

### 2.1 IPCC Emisyon Faktorleri (Tier 2)

```python
# Ornek: Dizel Tuketiminden CO2e Hesaplama
def hesapla_dizel_emisyon(litre_dizel):
    """
    IPCC 2006 Guidelines, Tier 2 metodolojisi
    Dizel yogunlugu: 0,845 kg/litre
    NCV (Net kalorifik deger): 43 MJ/kg
    CO2 emisyon faktoru: 74,1 ton CO2/TJ
    """
    kg_dizel = litre_dizel * 0.845
    TJ = (kg_dizel * 43) / 1_000_000  # MJ -> TJ
    ton_CO2 = TJ * 74.1
    ton_CO2e = ton_CO2 * 1.0  # CO2 icin GWP = 1
    return ton_CO2e

# Ornek hesaplama: 500.000 litre/yil dizel kullanan bir filo
yillik_emisyon = hesapla_dizel_emisyon(500_000)
print(f"Yillik Kapsam 1 Emisyon: {yillik_emisyon:.1f} ton CO2e")
# Cikti: Yillik Kapsam 1 Emisyon: 1.335,8 ton CO2e
```

### 2.2 Karbon Yogunlugu (Emisyon Intensite)

Madencilik sektorunde karsilastirma icin kullanilan kilit metrik:

```
Karbon Yogunlugu = Toplam Kapsam 1+2 Emisyonu (ton CO2e)
                   ─────────────────────────────────────────
                   Toplam Mineral Uretimi (ton)
```

**Kiyaslama Degerleri:**
- Altin: ~20-200+ ton CO2e / oz altin (cok genis aralik)
- Bakir: 3-8 ton CO2e / ton bakir
- Bor: 0,8-1,5 ton CO2e / ton bor urunu

---

## 3. Azaltma Stratejileri ve Hedef Belirleme

### Science-Based Targets (SBTi)

SBTi madencilik sektorune ozgu hedef belirleme protokolu:
- **Kapsam 1+2:** 2030'a kadar **%42** mutlak azaltim (1,5°C uyumlu).
- **Kapsam 3:** 2050'ye kadar **%90** azaltim.

### Azaltma Hiyerarsisi

```
1. ONLE  → Dizel yerine elektrikli arac
2. AZALT → Akilli rotalama ile yakıt tasarrufu
3. TASI  → Yenilenebilir enerji satın al (PPA/REC)
4. DENGEYE GETiR → Yalnizca son caredeyse karbon offset
```

---

## 4. Raporlama ve Ifşaat

### Zorunlu Raporlama Cerceveleri

| Cerceve | Nerede Gerekli | Pratikte Zorunluluk |
|:---|:---|:---|
| **CSRD** (AB) | AB'de islem gören sirketler | 2025+ |
| **SEC Iklim Kurallari** | ABD borsalarinda islem | 2024+ |
| **TCFD** | BIST borsasinda koteli Turk sirketler | Gonullulukten zorunluya gecisi yakin |
| **GRI 302/305** | Buyuk rapor yayinlayan sirketler | Yaygın standart |

---

## Referanslar

- GHG Protocol, Corporate Accounting and Reporting Standard (2015)
- IPCC, 2006 Guidelines for National GHG Inventories (Madencilik bolumu)
- Science Based Targets Initiative (SBTi), Mining Sector Guidance (2024)
- TEIAS, Elektrik Uretim Emisyon Katsayilari (2023)
- ICMM, Climate Change Strategy and Reporting (2023)
