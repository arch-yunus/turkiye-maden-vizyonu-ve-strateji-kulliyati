# IoT ve Sensor Aglari: Madende Sinirsel Sistem

Madencilik 4.0'in "duyu organlari" olan IoT sensor aglari, sahadaki her fiziksel degiskeni dijital veriye donusturur. Bu dokuman, yeralti ve yerustu maden isletmelerinde kullanilan sensor mimarisini, protokolleri ve gercek dunyadan uygulama orneklerini kapsamli sekilde inceler.

---

## 1. Maden IoT Mimarisi: Katmanli Yapi

```
[FIZIKSEL KATMAN]  Gas/Titresim/Basinc Sensorleri, RFID, Kamera
         |
         | (Kablolu: Profibus, EtherNet/IP | Kablosuz: LoRa, ZigBee, 5G)
         v
[KENAR ISLEM KATMANI]  Edge Gateway, PLC, SCADA
         |
         | (VPN / OPC-UA / MQTT)
         v
[BULUT/YEREL SUNUCU]  Zaman serisi DB (InfluxDB, TimescaleDB)
         |
         v
[ANALITIK KATMAN]  AI/ML modelleri, anomali tespiti, dashboard
         |
         v
[SUNUM KATMANI]  Web dashboard, mobil uygulama, kontrol odasi
```

---

## 2. Sensor Turleri ve Olculen Parametreler

### 2.1 Ortam ve Hava Kalitesi Sensorleri

| Sensor | Olculen Parametre | Kritik Esik | Teknoloji |
|:---|:---|:---|:---|
| CO Sensor | Karbonmonoksit | > 25 ppm uyari | Elektrokimyasal |
| CH4 Sensor | Metan (doğal gaz/patlama riski) | > %1 (LEL) | Katalitik boncuk |
| O2 Sensor | Oksijen | < %19.5 veya > %23 | Galvanik pil |
| CO2 Sensor | Karbondioksit | > 5.000 ppm | NDIR optik |
| Toz (PM) | PM2.5 / PM10 | WHO siniri | Lazer saçilim |
| Radon | Radyoaktif gaz | > 1.000 Bq/m3 | Iyon odasi |
| Sicaklik/Nem | T°C, %RH | Kalis kosullari | Kapasitif |

### 2.2 Yapisal ve Jeoteknik Sensorler

| Sensor | Uygulama | Hassasiyet |
|:---|:---|:---|
| MEMS Ivmeolcer | Kaya patlamasi, sarsinti | ±0.001 g |
| Uzama Gostergesi | Destek kirisi gerilmesi | ±1 mikrostrain |
| Inklinometre | Sev egimi, heyelan izleme | ±0.01° |
| Tiltmetre | Insaat yapisallik | ±0.0001° |
| Basinc Hucresi | Zemin gerilmesi | ±0.1 kPa |
| Crack Meter | Kaya catlagi genislemesi | ±0.01 mm |
| TDR Kablo | Su seviyesi, toprak kayisi | Profil bazli |

### 2.3 Ekipman ve Proses Sensorleri

```python
# Tipik bir maden ekipman telemetri veri ornegi (JSON)
{
  "equipment_id": "DUMPTRUCK-07",
  "timestamp": "2025-05-15T12:30:00Z",
  "location": {"lat": 39.43, "lon": 38.78, "elev_m": 1247},
  "engine": {
    "rpm": 1850,
    "oil_temp_c": 94,
    "coolant_temp_c": 87,
    "fuel_level_pct": 62
  },
  "payload": {
    "load_tons": 142.3,
    "cycle_count_today": 18
  },
  "diagnostics": {
    "dtc_codes": [],
    "maintenance_hours_remaining": 234
  }
}
```

---

## 3. Kablosuz Iletisim Protokolleri: Karsilastirma

| Protokol | Menzil | Bant Genisligi | Guç Tuketimi | Maden Kullanim Alani |
|:---|:---|:---|:---|:---|
| **LoRaWAN** | 2-15 km | Dusuk (250 bps-50 kbps) | Cok Dusuk | Gas/cevre sensorleri |
| **ZigBee** | 10-100 m | Orta (250 kbps) | Dusuk | Personel takip |
| **Wi-Fi 6** | 50-200 m | Yuksek (1 Gbps) | Orta | Kamera, yuksek hizli telemetri |
| **5G Private** | 500m-2km | Cok Yuksek (10 Gbps) | Orta-Yuksek | Otonom arac, AR/VR |
| **LEAKY FEEDER** | Tüm galeri | Orta | Yuksek | Yeralti iletisim omurgasi |
| **TETRA** | 5-10 km | Dusuk (28 kbps) | Orta | Sesli/veri acil haberlesme |

---

## 4. Yeralti IoT: Ozel Zorluklar

### 4.1 Elektromanyetik Interferans (EMI)
Metal cevher yataklari ve elektrikli ekipmanlar, kablosuz sinyali bozar.

**Cozum:** Frekans hopping (bluetooth), meshed network toplari, fiber optik omurga.

### 4.2 Fiziksel Dayaniklilik
Toz, nem, titresim ve kimyasal ortam.

**Sertifika Gerekliligi:**
- IP67/IP68 (su ve toz gecirmazlik)
- ATEX Zone 1 (patlayici ortam)
- IECEx (uluslararasi patlayici alan sertifikasi)

### 4.3 Batarya Omru
Uzaktan erisimi zor noktalarda pil degisimi maliyetlidir.

**Cozumler:** Energy harvesting (titresim, sicaklik farki), superkondansator + kucuk gunes paneli, LoRa ile ultra dusuk guç modu.

---

## 5. SCADA Entegrasyonu ve OPC-UA

OPC-UA (Unified Architecture), farkli uretici ve protokol sensorlerinin tek bir veri modeli altinda toplanmasini saglar.

```
[Sonsag PLC]  [Konveyor VFD]  [Pompa RTU]  [Gas Detector]
      |               |              |              |
      +-------+-------+--------------+--------------+
              |
         [OPC-UA Server]  <-- Genis protokol kütüphanesi
              |
         [SCADA / DCS]
              |
        [Historian DB]  -->  [AI Analitik]  -->  [Dashboard]
```

---

## 6. Turkiye Uygulama Ornekleri

### ETI Maden Kirka (Bor): 1.200 Sensörlü Ag
- Tum kalsinasyon firinlarinin 24/7 sicaklik profili.
- Stok silo doluluk orani gercek zamanli izleme.
- Konveyor band hizi ve kayis bütünlügü sensoru.

### TTK Amasra Yeralti Madeni
- Galerilerdeki metan ve CO seviyesi 350+ noktadan izleme.
- Personel ve ekipman RFID lokasyon takibi (her 30 saniyede).
- Acil tahliye sistemi ile entegre alarm agi.

---

## 7. Gelecek: Nesnelerin Interneti'nden Zekanin Interneti'ne (AIoT)

```
2024: Veri toplama (IoT)
2026: Ucta AI analizi (Edge AI + IoT = AIoT)
2028: Otonom aksiyon tetikleme (sensorden mudahaleye insan gecikmesi yok)
2030: Tamamen oz-organize eden akilli maden ag sistemi
```

**Turkiye Firsat Penceresi:** Enerji maliyetleri ve is guvenligi baskisi, IoT yatirimi icin guclu tesvik olusturmaktadir. 2027 hedefi: Tum buyuk maden isletmelerinde ATEX onayli kablosuz sensor ag zorunlulugu.

---

## Referanslar

- IEC 62591 (WirelessHART Endustriyel Standart)
- ATEX Yonetmeligi 2014/34/EU
- Siemens, Industrial IoT for Mining Whitepaper (2024)
- Honeywell, Connected Mine Solution Brief (2024)
- TMMOB Is Guvenligi Dergisi, IoT Uygulamalari Ozel Sayisi (2023)
