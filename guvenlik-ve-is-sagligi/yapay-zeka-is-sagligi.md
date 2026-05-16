# Yapay Zeka Destekli İş Sağlığı ve Güvenliği (İSG) Sistemleri

Madencilik-4.0 dönüşümünün en kritik bileşeni, "Sıfır Kaza" (Zero Harm) vizyonudur. Yapay zeka (AI), geleneksel reaktif güvenlik önlemlerini proaktif ve kestirimci bir modele dönüştürür.

---

## 1. Bilgisayarlı Görü ile Personel Takibi

Görüntü işleme algoritmaları (CNN, YOLOv8 vb.), maden sahasındaki kameralardan gelen verileri anlık olarak analiz eder:

- **KKD Denetimi:** Baret, yelek ve emniyet kemeri kullanımının otomatik tespiti.
- **Tehlikeli Bölge İhlali:** İş makinesi çalışma alanına veya yasaklı bölgelere giren personelin anında tespiti ve sesli uyarı.
- **Yorgunluk Analizi:** Operatör kabinlerindeki kameralar aracılığıyla göz kırpma sıklığı ve baş pozisyonundan yorgunluk tespiti.

## 2. Kestirimci Güvenlik Analitiği

Büyük veri (Big Data) analizi ile kazalar henüz gerçekleşmeden risk haritaları oluşturulur:

| Veri Kaynağı | AI Analizi | Çıktı |
|:---|:---|:---|
| Geçmiş Kaza Kayıtları | Doğal Dil İşleme (NLP) | Yüksek riskli vardiya ve bölge tespiti |
| Sensör Verileri (Gaz/Isı) | Zaman Serisi Analizi | Patlama veya yangın riskinin 2 saat önceden tahmini |
| Ekipman Telemetrisi | Anomali Tespiti | Fren arızası veya devrilme riski uyarısı |

## 3. Akıllı Tahliye ve Acil Müdahale

Bir acil durum anında AI tabanlı karar destek sistemleri devreye girer:

- **Dinamik Tahliye Rotaları:** Sensör verilerine göre en güvenli (duman ve gazdan arınmış) çıkış yollarının personel kasklarındaki AR (Artırılmış Gerçeklik) ekranlarına yansıtılması.
- **Personel Konumlama (UWB):** Enkaz altında kalan personelin santimetre hassasiyetinde yerinin belirlenmesi.
- **Otonom Kurtarma Robotları:** İnsan girmesinin tehlikeli olduğu alanlara ilk müdahale için gönderilen AI kontrollü robotlar.

---

## Uygulama Örneği: Risk Skoru Algoritması

```python
def calculate_risk_score(gas_level, fatigue_level, area_density):
    # Basit bir İSG risk skoru hesaplama mantığı
    risk = (gas_level * 0.5) + (fatigue_level * 0.3) + (area_density * 0.2)
    
    if risk > 0.8:
        return "CRITICAL: Immediate Evacuation!"
    elif risk > 0.5:
        return "WARNING: High Risk, Monitor Closely."
    return "SAFE: Normal Operations."
```

---

## Referanslar

- International Council on Mining and Metals (ICMM), Technology for Health and Safety (2024).
- NIOSH Mining Program, Artificial Intelligence in Mine Safety.
- Madencilik-4.0-TR, Güvenlik Katmanı Teknik Raporları.
