# Assignment1

# 🌿 Toscana Reseguiden

Ett skolprojekt byggt i **HTML, CSS och JavaScript**.  
En enkel webbsida som fungerar som en guide till Toscana, med information om byar, mat, vin, vingårdar och sevärdheter.

## 📁 Projektstruktur
```plaintext
Assignment1/
├── .idea/                         → Inställningar från utvecklingsmiljön (IDE)
│
├── css/
│   ├── .gitkeep                  → Håller mappen i versionshantering även om den är tom
│   └── style.css                → Gemensam stilfil för hela webbplatsen
│
├── img/                          → (Tom eller reservmapp för framtida bilder)
│
├── img-components/
│   ├── bannerbyarochstader.png  → Bannerbild för "Byar och städer"
│   ├── bannermatchochvin.png    → Bannerbild för "Mat och vin"
│   ├── bannermontoscana.png     → Bannerbild för "Om Toscana"
│   ├── bannersevardheter.png    → Bannerbild för "Sevärdheter"
│   └── vindruvor.png            → Bild för "Vingårdar"
│
├── components/
│   ├── .gitkeep                 → Håller mappen i versionshantering
│   ├── byar-och-stader.html     → Undersida om byar och städer
│   ├── index.html               → Startsida för komponentmappen (ej huvudstartsidan)
│   ├── karta.html               → Undersida med karta över Toscana
│   ├── mat-och-vin.html         → Undersida om mat och vin
│   ├── om-Toscana.html          → Undersida med introduktion till Toscana
│   ├── sevardheter.html         → Undersida om sevärdheter
│   └── vindruvor.html           → Undersida om vingårdar
│
├── js/
│   ├── .gitkeep                 → Håller mappen i versionshantering
│   └── (Plats för framtida JavaScript-filer)
│
├── index.html                   → Huvudstartsidan för hela webbplatsen
```

## Syfte med strukturen
- css/: Samlar all stilkod för att hålla designen konsekvent.

- img-components/: Innehåller alla bilder som används som banners eller illustrationer.

- components/: Varje HTML-fil representerar en egen undersida med innehåll om Toscana.

-js/: Förberedd för eventuell JavaScript-funktionalitet.

-index.html: Webbplatsens huvudsida som länkar till alla undersidor.

## Funktioner 
-**Startsidan** (index.html) innehåller en banner, navigeringsmeny och sektioner för varje kategori.

-**Navigeringsmenyn** använder href="#id" för att hoppa till rätt sektion på samma sida.

-**Rubrikerna** i varje sektion är klickbara knappar som leder till en separat undersida med mer information.

-**Undersidorna** (om-toscana.html, mat-och-vin.html, etc.) innehåller en rubrik, text och en "Tillbaka till startsidan"-knapp.
- **Bannerbild** med rubrik och sökruta med rundade kanter
- **Sökfunktion** som navigerar till rätt sektion baserat på användarens sökord

## Komponenter
-Gemensam header och footer laddas automatiskt på varje sida med JavaScript:

-components/header.html innehåller sidans rubrik och meny.
    
-components/footer.html innehåller sidfot med kontaktinformation.

js/load-components.js laddar in dessa komponenter med fetch().

## All CSS finns i css/style.css.
-Leaflet används på karta.html för att visa en interaktiv karta över Toscana.


- **Navigeringsmeny** med kategorier: När användaren klickar i den hoppar den till önskad kategori
    - Om Toscana
    - Byar och städer
    - Mat och vin
    - Vingårdar
    - Sevärdheter
    - Karta
- **Subrubriker och knappar** i varje sektion kan användaren klicka sig vidare till en undersida med djupare information kring ämnet.
- **Footer** med:
    - Knapp för att scrolla till toppen
    - Länk till kontakt via e-post
    - Kvadratiskt kommentarsfält med skicka knapp
