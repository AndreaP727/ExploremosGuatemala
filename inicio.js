 let map = L.map('mi_mapa').setView([15.507569742294933, -91.60145049202771], 12)
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([15.507569742294933, -91.60145049202771]).addTo(map).bindPopup('Museo Balam').openPopup()
L.marker([15.50932772379888, -91.54958725125013]).addTo(map).bindPopup('Laguna Seca de Ordóñez').openPopup()

map.on('click', onMapClick)

function onMapClick(e) {
    alert("Posición:" + e.latlng)
}