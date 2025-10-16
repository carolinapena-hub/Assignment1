# Assignment1

# 🌿 Toscana Reseguiden

Ett skolprojekt byggt i **HTML, CSS och JavaScript**.  
En enkel webbsida som fungerar som en guide till Toscana, med information om byar, mat, vin, vingårdar och sevärdheter.

## 📁 Projektstruktur
```plaintext
/Assignment1
├── index.html              #Denna fil innehåller strukturen och information
├── om-toscana.html         #Undersida som användare klickar sig fram till
├── byar-och-stader.html    #Undersida som användare klickar sig fram till
├── mat-och-vin.html        #Undersida som användare klickar sig fram till
├── vingardar.html          #Undersida som användare klickar sig fram till
├── sevardheter.html        #Undersida som användare klickar sig fram till
├── karta.html              #Undersida med interaktiv karta
├── css/                    
│   └── style.css           #utseende för html filen
├── js/
│   └── load-components.js  #Gemensam agerande till undersidor
├── components/
│   └── header.html         #Gemensam header och footer till undersida
│   └── footer.html         #Gemensam header och footer till undersida
```

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
- **Subrubriker och knappar** i varje sektion kan användaren klicka sig vidare till en undersida med djupare imformation kring ämnet.
- **Footer** med:
    - Knapp för att scrolla till toppen
    - Länk till kontakt via e-post
    - Kvadratiskt kommentarsfält
