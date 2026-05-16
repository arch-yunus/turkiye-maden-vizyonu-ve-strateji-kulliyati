// Madencilik 4.0 - Komuta Kontrol Merkezi Mantığı

document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    updateDateTime();
    simulateData();
    initAlerts();
    initBlockchain();
    initNavigation();
});

// Navigasyon Mantığı
function initNavigation() {
    const navItems = document.querySelectorAll('.sidebar nav ul li');
    const bcPanel = document.getElementById('blockchain-panel');
    const overviewSections = document.querySelectorAll('section:not(#blockchain-panel)');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            if (item.id === 'nav-blockchain') {
                overviewSections.forEach(s => s.style.display = 'none');
                bcPanel.style.display = 'block';
            } else {
                overviewSections.forEach(s => s.style.display = 'grid');
                bcPanel.style.display = 'none';
            }
        });
    });
}

// Tarih ve Saat Güncelleme
function updateDateTime() {
    const dateEl = document.getElementById('current-date');
    const update = () => {
        const now = new Date();
        dateEl.innerText = now.toLocaleDateString('tr-TR', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };
    setInterval(update, 1000);
    update();
}

// Grafiklerin Hazırlanması
let iotChart;
function initCharts() {
    const ctxIot = document.getElementById('iot-chart').getContext('2d');
    const ctxReserve = document.getElementById('reserve-chart').getContext('2d');
    const ctxHealth = document.getElementById('health-chart').getContext('2d');

    // Chart.js Global Ayarları
    Chart.defaults.color = '#a0a0a0';
    Chart.defaults.font.family = "'Outfit', sans-serif";

    // IoT Hava Kalitesi Grafiği
    iotChart = new Chart(ctxIot, {
        type: 'line',
        data: {
            labels: Array(20).fill(''),
            datasets: [{
                label: 'Metan Seviyesi (%)',
                data: Array(20).fill(0).map(() => Math.random() * 0.5 + 0.1),
                borderColor: '#f39c12',
                backgroundColor: 'rgba(243, 156, 18, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Oksijen (%)',
                data: Array(20).fill(0).map(() => Math.random() * 1 + 20.5),
                borderColor: '#2ecc71',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: false },
                x: { display: false }
            },
            plugins: {
                legend: { position: 'top' }
            }
        }
    });

    // Rezerv Dağılımı (Doughnut)
    new Chart(ctxReserve, {
        type: 'doughnut',
        data: {
            labels: ['Seryum', 'Lantan', 'Neodimyum', 'Diğer'],
            datasets: [{
                data: [45, 30, 15, 10],
                backgroundColor: ['#f39c12', '#3498db', '#9b59b6', '#7f8c8d'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            },
            cutout: '70%'
        }
    });

    // Ekipman Sağlığı (Radar)
    new Chart(ctxHealth, {
        type: 'radar',
        data: {
            labels: ['Motor', 'Hidrolik', 'Lastikler', 'Elektronik', 'Yazılım'],
            datasets: [{
                label: 'Filo Ortalaması',
                data: [92, 88, 75, 98, 100],
                borderColor: '#f39c12',
                backgroundColor: 'rgba(243, 156, 18, 0.2)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255,255,255,0.1)' },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    pointLabels: { color: '#a0a0a0' },
                    ticks: { display: false }
                }
            }
        }
    });
}

// Veri Simülasyonu
function simulateData() {
    setInterval(() => {
        // Grafiği Güncelle
        if (iotChart) {
            iotChart.data.datasets[0].data.shift();
            iotChart.data.datasets[0].data.push(Math.random() * 0.5 + 0.1);
            iotChart.data.datasets[1].data.shift();
            iotChart.data.datasets[1].data.push(Math.random() * 1 + 20.5);
            iotChart.update('none');
        }

        // Stat Değerlerini Güncelle
        const yieldEl = document.getElementById('yield-value');
        if (yieldEl) yieldEl.innerText = (94 + Math.random()).toFixed(1) + '%';
        
        const energyEl = document.getElementById('energy-value');
        if (energyEl) energyEl.innerText = (1200 + Math.random() * 100).toFixed(0) + ' kWh';
        
        // Filo Hareketini Simüle Et
        const units = document.querySelectorAll('.fleet-unit');
        units.forEach(unit => {
            const top = parseFloat(unit.style.top);
            const left = parseFloat(unit.style.left);
            unit.style.top = (top + (Math.random() - 0.5) * 2) + '%';
            unit.style.left = (left + (Math.random() - 0.5) * 2) + '%';
        });
    }, 2000);
}

// Uyarı Paneli
function initAlerts() {
    const alerts = [
        { type: 'info', msg: 'Otonom T-101 boşaltma sahasına ulaştı.', time: 'Şimdi' },
        { type: 'warning', msg: 'D-204 delici ucu aşınma tespiti (%75).', time: '5 dk önce' },
        { type: 'danger', msg: 'Sektör 3B havalandırma fanı düşük devir!', time: '12 dk önce' }
    ];

    const list = document.getElementById('alert-list');
    if (!list) return;
    alerts.forEach(a => {
        const item = document.createElement('div');
        item.className = 'alert-item';
        item.innerHTML = `
            <div class="alert-icon ${a.type}"></div>
            <div class="alert-content">
                <p style="font-size: 0.85rem;">${a.msg}</p>
                <small style="color: #777;">${a.time}</small>
            </div>
        `;
        list.appendChild(item);
    });
}

// Blokzincir Takip Simülasyonu
function initBlockchain() {
    const bcList = document.getElementById('blockchain-list');
    if (!bcList) return;

    const batches = [
        { id: 'BTCH-8821', mineral: 'Bor', mine: 'Kırka', qty: '450 Ton', status: 'Onaylandı', hash: '000x4f2...a1' },
        { id: 'BTCH-8822', mineral: 'Altın', mine: 'Kışladağ', qty: '8 kg', status: 'Yolda', hash: '000x9e1...b4' },
        { id: 'BTCH-8823', mineral: 'Bakır', mine: 'Murgul', qty: '120 Ton', status: 'İşleniyor', hash: '000xc32...f9' }
    ];

    function addBatch(b) {
        const item = document.createElement('div');
        item.className = 'alert-item';
        item.style.padding = '15px';
        item.innerHTML = `
            <div class="alert-icon info"></div>
            <div class="alert-content" style="flex: 1;">
                <div style="display: flex; justify-content: space-between;">
                    <strong style="color: #f39c12;">${b.id}</strong>
                    <span class="status-badge online" style="font-size: 0.65rem;">${b.status}</span>
                </div>
                <p style="font-size: 0.8rem; margin: 4px 0;">${b.mineral} - ${b.mine} (${b.qty})</p>
                <small style="font-family: monospace; color: #555;">Hash: ${b.hash}</small>
            </div>
        `;
        bcList.prepend(item);
    }

    batches.forEach(addBatch);

    // Yeni işlem simülasyonu
    setInterval(() => {
        const id = 'BTCH-' + Math.floor(Math.random() * 9000 + 1000);
        const minerals = ['Bor', 'Lityum', 'Krom', 'Altın'];
        const mines = ['Bigadiç', 'Emet', 'Kestelek', 'Eskişehir'];
        
        const newBatch = {
            id: id,
            mineral: minerals[Math.floor(Math.random() * minerals.length)],
            mine: mines[Math.floor(Math.random() * mines.length)],
            qty: (Math.random() * 500).toFixed(0) + ' Ton',
            status: 'Yeni Kayıt',
            hash: '000x' + Math.random().toString(16).substr(2, 8) + '...'
        };
        
        addBatch(newBatch);
        if (bcList.children.length > 8) bcList.lastChild.remove();
    }, 8000);
}
