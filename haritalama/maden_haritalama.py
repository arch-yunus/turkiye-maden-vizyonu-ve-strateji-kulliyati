import folium
import json
import os

def create_mining_map(data_path, output_name="maden_haritasi.html"):
    """
    Maden koordinatlarını içeren bir GeoJSON dosyasını okur ve interaktif bir harita oluşturur.
    """
    # Turkiye merkezli harita baslat
    m = folium.Map(location=[39.0, 35.0], zoom_start=6, tiles="CartoDB dark_matter")

    if os.path.exists(data_path):
        with open(data_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        folium.GeoJson(
            data,
            name="Maden Sahalari",
            tooltip=folium.GeoJsonTooltip(fields=["ad", "tur", "rezerv"], aliases=["Maden Adı:", "Tür:", "Rezerv:"])
        ).add_to(m)

    m.save(output_name)
    print(f"Harita '{output_name}' olarak kaydedildi.")

if __name__ == "__main__":
    # Ornek veri yolu
    geojson_path = "sample_coordinates.geojson"
    create_mining_map(geojson_path)
