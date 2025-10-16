function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const sections = {
        "om toscana": "#om",
        "byar och stader": "#byar",
        "mat och vin": "#mat",
        "vingardar": "#vingardar",
        "sevardheter": "#sevardheter",
        "karta": "#karta"
    };

    if (sections[input]) {
        window.location.href = sections[input];
    } else {
        alert("Kategorin hittades inte. Försök igen.");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/*Interaktiv karta*/
// Skapa kartan och centrera den över Toscana
const map = L.map('map').setView([43.7711, 11.2486], 8); // Lat, Long, Zoom

// Lägg till OpenStreetMap som bakgrund
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Lägg till en markör
L.marker([43.7711, 11.2486]).addTo(map)
    .bindPopup('Florens – Toscanas hjärta')
    .openPopup();
