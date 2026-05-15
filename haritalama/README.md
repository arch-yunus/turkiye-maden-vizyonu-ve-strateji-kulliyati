# Haritalama ve CBS (GIS) Modülü

Bu dizin, maden sahalarının mekansal analizi ve görselleştirilmesi için kullanılan araçları ve yöntemleri içerir.

## Kullanılan Araçlar
* **QGIS / ArcGIS:** Katmanlı harita oluşturma ve mekansal sorgulama.
* **Python (Geopandas, Folium):** Veri setlerinin harita üzerinde interaktif olarak gösterilmesi.
* **Global Mapper:** Topografik analizler ve 3D modelleme.

## Mevcut Bileşenler

*   **`maden_haritalama.py`:** `folium` kütüphanesini kullanarak `sample_coordinates.geojson` dosyasındaki verileri interaktif bir HTML haritasına dönüştüren Python scripti.
*   **`sample_coordinates.geojson`:** Türkiye'deki önemli maden sahalarının (Altın, Bakır, Bor, NTE, Lityum) koordinatlarını ve meta verilerini içeren örnek veri seti.

## Kullanım Talimatları

### 1. Ortam Kurulumu
Scriptin çalışması için gerekli kütüphaneleri yükleyin:
```bash
pip install folium pandas geopandas
```

### 2. Harita Oluşturma
Scripti çalıştırarak interaktif haritayı (`maden_haritasi.html`) üretin:
```bash
python haritalama/maden_haritalama.py
```

## Analiz Yöntemleri
1. **Mekansal Dağılım Analizi:** Maden yataklarının tektonik hatlar ve volkanik birimlerle ilişkisinin incelenmesi.
2. **Kapasite ve Rezerv Görselleştirme:** Harita üzerindeki işaretçilerin büyüklüğü veya rengi ile rezerv miktarlarının kategorizasyonu.
3. **Lojistik Planlama:** Maden sahalarının limanlara, demiryollarına ve işleme tesislerine olan mesafesinin analizi.

