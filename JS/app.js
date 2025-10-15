function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const sections = {
        "om toscana": "#om",
        "byar och städer": "#byar",
        "mat och vin": "#mat",
        "vingårdar": "#vingardar",
        "sevärdheter": "#sevardheter",
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
