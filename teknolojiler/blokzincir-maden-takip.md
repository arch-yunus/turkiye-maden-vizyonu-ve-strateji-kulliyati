# Blokzincir Tabanli Maden Takip ve Etik Sertifikasyon Sistemi

Madencilik sektorunde blokzincir (blockchain) teknolojisinin entegrasyonu; saydamlik, izlenebilirlik ve etik sertifikasyon alanlarinda devrimsel bir donusum vadeder. Bu dokuman, maden cikarma noktasindan son kullaniciya uzanan tum tedarik zincirinin dijital kimlik altyapisini ele almaktadir.

---

## 1. Temel Sorun: Tedarik Zinciri Opakliği

Geleneksel maden tedarik zincirinde:

```
Maden --> Ihracatci --> Rafiner --> Uretici --> Tuketici
    (Kimlik kaybi)  (Tracability sifir)  (Etik bilinmiyor)
```

Bu opaklık; "catisma madenleri" (conflict minerals), cocuk isciligi ve cevre ihlalleri gibi sorunlarin gizlenmesine zemin hazirlamaktadir. AB'nin CRMA ve OECD Due Diligence Kilavuzu bu problemi yasal zemine tasimaktadir.

---

## 2. Blokzincir Cozum Mimarisi

### 2.1 Akillı Sozlesmeler (Smart Contracts)

```javascript
// Ornek: Maden Partisi Sertifikasyon Sozlesmesi
contract MineralCertification {
    struct MineralBatch {
        string batchId;        // Parti kimlik numarasi
        string mineName;       // Maden adi
        string country;        // Ulke
        uint256 extractionDate; // Unix timestamp
        string mineralType;    // NTE / Bor / Altin vb.
        uint256 quantityTons;  // Ton cinsinden miktar
        string esgScore;       // ESG uyum skoru
        bool conflictFree;     // Catisma-bağimsiz onayi
        address certifier;     // Sertifike veren kurum adresi
    }

    mapping(string => MineralBatch) public batches;

    function certifyBatch(MineralBatch memory batch) public onlyCertifier {
        batches[batch.batchId] = batch;
        emit BatchCertified(batch.batchId, block.timestamp);
    }
}
```

### 2.2 Veri Akisi

```
[Sahadan Sensor Verisi] --> [IoT Gateway] --> [Oracle Servisi]
                                                    |
                                           [Blockchain Agi]
                                           (Hyperledger/Polygon)
                                                    |
                      +------------------+----------+----------+
                      |                  |                     |
              [Regulator Node]  [Alici Firma Node]    [Sertifikasyon Org]
              (MAPEG/MTA)       (Otomotiv/Elektronik)  (RJC/GRI)
```

---

## 3. NFT Tabanli Dijital Pasaport

Her maden partisi icin olusturulan benzersiz NFT (Non-Fungible Token) asagidaki verileri icermektedir:

| Veri Alani | Aciklama |
|:---|:---|
| **Cografik Koordinat** | GPS bazli cikarim noktasi |
| **Ekstraksiyon Tarihi** | Damgali zaman (timestamp) |
| **ESG Skoru** | Cevre/Sosyal/Yonetisim puanlari |
| **ISO Sertifika No** | ISO 14001/45001 referansi |
| **Carbon Footprint** | Ton CO2e/ton mineral |
| **Isci Kosu Uyumu** | ILO konvansiyonlari uyumlulugu |
| **Su Kullanim Orani** | m3/ton mineral |

---

## 4. Kuresel Protokol Cercevesi

| Protokol/Standart | Kapsam | Turkiye'ye Etkisi |
|:---|:---|:---|
| **OECD DDG** | 3TG mineralleri (Kalay, Tantal, Tungsten, Altin) | Altin ihracatcilari icin zorunlu |
| **AB CRMA (2024)** | 34 kritik mineral | 2026'dan itibaren AB'ye ihracatta zorunlu |
| **RJC (Responsible Jewellery)** | Altin-Platin-Elmas | Kuyumculuk sektoru |
| **Initiative for Responsible Mining** | Buyuk maden projeleri | Uluslararasi kredi icin sart |

---

## 5. Pilot Proje Onerisi: Turkiye Bor Sertifikasyon Zinciri

Turkiye, dunya bor rezervlerinin %72'sine sahip oldugu icin **"Etik Bor" sertifika zinciri** kuresel bir rekabet avantaji olusturabilir.

### Implementasyon Adilmlari

1. **Altyapi Kurulumu:** ETI Maden fabrikalarina IoT sensor entegrasyonu (3 ay).
2. **Blockchain Agi:** Permissioned Hyperledger Fabric uzerinde node aktivasyonu (1 ay).
3. **Pilot:** Bandirma'dan Avrupa'ya ihrac edilen ilk sertifikali bor partisi (6 ay).
4. **Genisletme:** Tum aktif bor tesislerine kademeli yayilim (12 ay).
5. **Uluslararasi Tanik:** AB, Japonya ve ABD ticaret ortaklarina node erisimi.

### Beklenen Ciktilar

- Etik bor sertifikasi icin premium fiyat (~%8-12 artis).
- AB Critical Raw Materials Act uyumu.
- "Yesil tedarik zinciri" markasi ile Asya-Pasifik pazarinda yer edinme.

---

## Referanslar

- RCS Global, Blockchain for Responsible Minerals (2024)
- AB Kritik Hammadde Yasasi (CRMA) Resmi Metni (2024)
- Hyperledger Foundation, Mining Industry Use Cases
- ETI Maden Isletmeleri Kurumsal Surdurulebilirlik Raporu (2023)
