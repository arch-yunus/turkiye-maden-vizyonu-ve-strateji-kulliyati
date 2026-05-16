def calculate_mining_roi(initial_investment, annual_savings, annual_efficiency_gain, safety_savings, years=10, discount_rate=0.10):
    """
    Madencilik 4.0 Yatırım Getiri (ROI) ve Net Bugünkü Değer (NPV) Hesaplayıcı.
    """
    cash_flows = []
    npv = -initial_investment
    
    print(f"{'Yıl':<5} | {'Toplam Tasarruf':<15} | {'Nakit Akışı':<15} | {'İskontolu Akış':<15}")
    print("-" * 60)
    
    for year in range(1, years + 1):
        # Yıllık tasarrufların (savings) teknoloji adaptasyonu ile arttığı varsayılır (öğrenme eğrisi)
        adaptation_factor = min(1.0, 0.6 + (year * 0.1))
        
        yearly_benefit = (annual_savings + annual_efficiency_gain + safety_savings) * adaptation_factor
        discounted_benefit = yearly_benefit / ((1 + discount_rate) ** year)
        
        npv += discounted_benefit
        
        print(f"{year:<5} | {yearly_benefit:>14.2f}$ | {yearly_benefit:>14.2f}$ | {discounted_benefit:>14.2f}$")
        
    roi = (npv / initial_investment) * 100
    
    print("-" * 60)
    print(f"Başlangıç Yatırımı: {initial_investment:,.2f}$")
    print(f"Net Bugünkü Değer (NPV): {npv:,.2f}$")
    print(f"Yatırım Getirisi (ROI): %{roi:.2f}")
    
    if npv > 0:
        print("KARAR: Yatırım Finansal Olarak Mantıklı (NPV > 0)")
    else:
        print("KARAR: Yatırım Finansal Olarak Riskli (NPV < 0)")

if __name__ == "__main__":
    # Örnek senaryo: Otonom Filo Dönüşümü
    investment = 5000000  # 5 Milyon USD
    savings = 800000      # 800 Bin USD yakıt/işçilik tasarrufu
    efficiency = 500000   # 500 Bin USD verim artışı
    safety = 200000       # 200 Bin USD kaza maliyeti düşüşü
    
    calculate_mining_roi(investment, savings, efficiency, safety)
