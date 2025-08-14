// Crear el mapa (por defecto, centrado en algún lugar)
let map = L.map('mi_mapa').setView([15.507569742294933, -91.60145049202771], 12);

// Cargar mosaicos de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marcadores iniciales
L.marker([14.500678509650223, -90.87565520317887]).addTo(map).bindPopup('Volcán Acatenango');
L.marker([14.383013672632051, -90.60137843072906]).addTo(map).bindPopup('Volcán Pacaya');
L.marker([14.736004684532324, -91.15814290487135]).addTo(map).bindPopup('Parapente en Atitlán');
L.marker([15.57001192272038, -89.91113440485621]).addTo(map).bindPopup('Raffting en el Río Cahabón');
L.marker([15.427085499880969,  -90.28231192020142]).addTo(map).bindPopup('Grutas del Rey Marcos');
L.marker([14.559622848586255, -90.73428767953159]).addTo(map).bindPopup('Antigua Guatemala');
L.marker([17.11966422098088, -89.67660327662165]).addTo(map).bindPopup('Parque Nacional Tikal');
L.marker([15.2691468388100023, -89.04031614349155]).addTo(map).bindPopup('Quirigua');
L.marker([15.827093109486373, -88.75228480534317]).addTo(map).bindPopup('Livingston');
L.marker([17.751983679541073, -89.90265225923221]).addTo(map).bindPopup('El Mirador, La Danta');
L.marker([15.533956249938948, -89.95896677602123]).addTo(map).bindPopup('Semuc Champey');
L.marker([15.91659642092153, -90.67508390007569]).addTo(map).bindPopup('Laguna Lachuá');
L.marker([16.640904863030187, -90.3698091010962]).addTo(map).bindPopup('Cráter Azul');
L.marker([15.5432271900959, -91.39539203770286 ]).addTo(map).bindPopup('Laguna Magdalena');
L.marker([15.149897897933611,  -90.12406620415358]).addTo(map).bindPopup('Catarata de Chilasco');

// Intentar obtener ubicación del usuario
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Centrar mapa en la ubicación del usuario
      map.setView([lat, lng], 14);

      // Añadir marcador en la ubicación
      L.marker([lat, lng]).addTo(map)
        .bindPopup("📍 Estás aquí")
        .openPopup();
    },
    function (error) {
      console.error("Error al obtener ubicación: ", error);
      alert("No se pudo obtener tu ubicación");
    }
  );
} else {
  alert("Tu navegador no soporta geolocalización");
}

// Evento clic en el mapa
map.on('click', function (e) {
  alert("Posición: " + e.latlng);
});
