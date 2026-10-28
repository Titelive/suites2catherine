#!/usr/bin/env python3
"""Génère fr/en/de/nl/index.html pour suites2catherine.com à partir d'un seul gabarit.
Usage : python3 outils/pages.py   (depuis la racine du dépôt)"""
import json, sys, os, html
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://suites2catherine.com"
LANGS = ["fr", "en", "de", "nl"]
TEL, TEL_SHOW, MAIL = "+33662068640", "+33 6 62 06 86 40", "lsdc54000@gmail.com"
IG = "https://www.instagram.com/les_suites_de_catherine/"
FB = "https://www.facebook.com/les.suites.de.catherine"
e = html.escape

MARK = open(os.path.join(os.path.dirname(__file__), "marque.svg")).read().strip()

def ic(name):
    P = {
        "pin": '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
        "out": '<path d="M7 17L17 7M9 7h8v8"/>',
        "tel": '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
        "mail": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
        "ig": '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".9"/>',
        "car": '<path d="M5 17h14M6 17v2M18 17v2M4 13l2-5h12l2 5v4H4z"/><circle cx="8" cy="14.5" r=".8"/><circle cx="16" cy="14.5" r=".8"/>',
    }
    return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">' + P[name] + "</svg>"

SUITES = [
    dict(id="suite-35", name="La Suite 35", short="Suite 35", c="#B4577A", cl="#E49AB2", tint="#F7E6EC", hero="suites-03.jpg",
         addr="35 rue des Carmes", q="35+rue+des+Carmes+Nancy", price={"fr": "53,95 €", "en": "€53.95", "de": "53,95 €", "nl": "€ 53,95"},
         imgs=["suites-06.jpg", "suites-03.jpg", "suites-07.jpg", "suites-01.jpg", "suites-09.jpg", "suites-02.jpg", "suites-10.jpg", "suites-05.jpg", "suites-04.jpg"]),
    dict(id="suite-si-calme", name="La Suite Si Calme", short="Si Calme", c="#3F8466", cl="#8CC7A9", tint="#E1F0E7", hero="sicalme-fauteuil.jpg",
         addr="3 rue Guerrier de Dumast", q="3+rue+Guerrier+de+Dumast+Nancy", price={"fr": "65 €", "en": "€65", "de": "65 €", "nl": "€ 65"},
         imgs=["sicalme-lit.jpg", "sicalme-fauteuil.jpg", "sicalme-fleurs.jpg", "sicalme-radio.jpg", "parking-sicalme.jpg"]),
    dict(id="suite-saint-georges", name="La Suite Saint Georges", short="Saint Georges", c="#4F5DB8", cl="#98A3E6", tint="#E4E7F8", hero="stgeorges-ampoule.jpg",
         addr="66 rue Saint Georges", q="66+rue+Saint+Georges+Nancy", price={"fr": "40,30 €", "en": "€40.30", "de": "40,30 €", "nl": "€ 40,30"},
         imgs=["stgeorges-lit.jpg", "stgeorges-table.jpg", "stgeorges-ampoule.jpg"]),
]

T = {
"fr": dict(
    title="Les Suites de Catherine, location de suites au cœur de Nancy",
    desc="Trois suites équipées à quelques minutes à pied de la place Stanislas, pour une nuit ou pour un mois.",
    skip="Aller au contenu", menu="Menu", langl="Langue",
    nav=["Les suites", "Nancy", "Offrir", "Contact"], book="Réserver",
    h1="Trois suites au cœur de Nancy",
    lead="À quelques minutes à pied de la place Stanislas, pour une nuit ou pour un mois.",
    from_="dès", night="la nuit",
    every="Dans chaque suite",
    every_l=["Wifi rapide", "Cuisine équipée", "Nespresso", "Linge de lit et de toilette", "Produits de bain", "Télévision", "Arrivée autonome ou accueil par Catherine"],
    award="9,1/10 sur Booking.com en 2023",
    photo="Photo {i} sur {n}, {s}", photos="Photos de {s}",
    s={
     "suite-35": dict(facts=["2 personnes", "33 m²", "Lit queen", "3e étage, ascenseur"],
        txt="En plein centre : la place Stanislas, le marché central et la gare se font à pied. Un salon au mobilier chiné, une cuisine complète.",
        park="Parkings Dom Calmet et Charles III tout proches, avec bornes de recharge."),
     "suite-si-calme": dict(facts=["3 personnes", "55 m²", "2 chambres", "Lit queen et lit simple", "4e étage, ascenseur"],
        txt="Plein ouest, côté jardin : le calme en centre-ville. Séjour avec cuisine ouverte, lave-linge, lave-vaisselle, salle de bains et WC séparés.",
        park="Place de parking sécurisée en option."),
     "suite-saint-georges": dict(facts=["2 personnes", "35 m²", "Lit double", "2e étage, escalier en colimaçon", "2 nuits minimum"],
        txt="Des murs en pierre, près de la place Stanislas et de la cathédrale. Un vrai salon, un bureau pour télétravailler et un lave-linge.",
        park="Parking Stanislas, rue Maurice Barrès."),
    },
    nancy="Nancy à pied", walk_cap="Depuis la Suite 35",
    walk=[("2 min", "Marché central"), ("5 min", "Place Stanislas"), ("5 min", "Centre Prouvé"), ("10 min", "Gare")],
    stan_h="La place Stanislas",
    stan="Achevée en 1755, classée à l’UNESCO depuis 1983. Les grilles dorées de Jean Lamour, des terrasses et, les soirs d’été, le son et lumière « Rendez-vous ».",
    see="À voir aussi",
    places=[
     ("Musée des Beaux-Arts", "https://musee-des-beaux-arts.nancy.fr/accueil-145.html", "Du Pérugin à Delacroix, la collection Daum et Jean Prouvé.", "Fermé le mardi"),
     ("Musée lorrain", "https://www.musee-lorrain.nancy.fr", "Le palais ducal, Georges de La Tour et les Gueux de Callot.", "Fermé lundi et mardi"),
     ("Villa Majorelle", "https://musee-ecole-de-nancy.nancy.fr/la-villa-majorelle-2887.html", "La première maison entièrement Art nouveau de Nancy.", ""),
     ("Musée de l’École de Nancy", "https://musee-ecole-de-nancy.nancy.fr/accueil-2676.html", "Le grand rendez-vous de l’Art nouveau.", ""),
     ("Muséum-Aquarium", "https://www.museumaquariumdenancy.eu/accueil", "Aquariums et galerie zoologique dans un immeuble Art déco.", "Fermé le lundi"),
     ("Musée de l’Histoire du Fer", "https://www.museehistoiredufer.fr/accueil/", "Le fer de la tour Eiffel a été coulé ici.", "Jarville, fermé le mardi"),
     ("Jardin botanique Jean-Marie Pelt", "https://www.jardinbotaniquedenancy.eu/accueil", "12 000 espèces et 2 500 m² de serres tropicales.", "Villers-lès-Nancy"),
     ("Parc de la Pépinière", "", "Le grand parc du centre-ville.", ""),
    ],
    tourism="Office de tourisme",
    gift_h="Offrir un séjour",
    gift="Une carte cadeau pour l’une des trois suites, valable 12 mois et envoyée par e-mail dès le paiement.",
    gift_b="Commander une carte cadeau",
    contact_h="Écrire à Catherine",
    contact="Une question, un accueil sur mesure : elle vous répond.",
    foot="Réservations sur", close="Fermer", prev="Photo précédente", next="Photo suivante",
),
"en": dict(
    title="Les Suites de Catherine, suites to rent in the heart of Nancy",
    desc="Three fully equipped suites a few minutes’ walk from Place Stanislas, for one night or one month.",
    skip="Skip to content", menu="Menu", langl="Language",
    nav=["The suites", "Nancy", "Gift cards", "Contact"], book="Book",
    h1="Three suites in the heart of Nancy",
    lead="A few minutes’ walk from Place Stanislas, for one night or one month.",
    from_="from", night="per night",
    every="In every suite",
    every_l=["Fast wifi", "Equipped kitchen", "Nespresso", "Bed linen and towels", "Toiletries", "TV", "Self check-in or a welcome from Catherine"],
    award="Rated 9.1/10 on Booking.com in 2023",
    photo="Photo {i} of {n}, {s}", photos="Photos of {s}",
    s={
     "suite-35": dict(facts=["2 guests", "33 m²", "Queen bed", "3rd floor, lift"],
        txt="Right in the centre: Place Stanislas, the covered market and the station are all on foot. A living room with vintage furniture and a full kitchen.",
        park="Dom Calmet and Charles III car parks nearby, with EV charging."),
     "suite-si-calme": dict(facts=["3 guests", "55 m²", "2 bedrooms", "Queen bed and single bed", "4th floor, lift"],
        txt="West-facing, over the garden: quiet in the middle of town. Living room with open kitchen, washing machine, dishwasher, bathroom and separate toilet.",
        park="Secure parking space on request."),
     "suite-saint-georges": dict(facts=["2 guests", "35 m²", "Double bed", "2nd floor, spiral staircase", "2-night minimum"],
        txt="Exposed stone walls, close to Place Stanislas and the cathedral. A real living room, a desk for remote work and a washing machine.",
        park="Stanislas car park, rue Maurice Barrès."),
    },
    nancy="Nancy on foot", walk_cap="From La Suite 35",
    walk=[("2 min", "Covered market"), ("5 min", "Place Stanislas"), ("5 min", "Prouvé centre"), ("10 min", "Station")],
    stan_h="Place Stanislas",
    stan="Completed in 1755, a UNESCO World Heritage site since 1983. Jean Lamour’s gilded gates, café terraces and, on summer nights, the “Rendez-vous” light show.",
    see="Also worth a visit",
    places=[
     ("Museum of Fine Arts", "https://musee-des-beaux-arts.nancy.fr/accueil-145.html", "From Perugino to Delacroix, the Daum collection and Jean Prouvé.", "Closed Tuesdays"),
     ("Musée lorrain", "https://www.musee-lorrain.nancy.fr", "The Ducal Palace, Georges de La Tour and Callot’s Beggars.", "Closed Mondays and Tuesdays"),
     ("Villa Majorelle", "https://musee-ecole-de-nancy.nancy.fr/la-villa-majorelle-2887.html", "Nancy’s first house built entirely in Art Nouveau.", ""),
     ("Musée de l’École de Nancy", "https://musee-ecole-de-nancy.nancy.fr/accueil-2676.html", "The essential stop for Nancy’s Art Nouveau.", ""),
     ("Museum-Aquarium", "https://www.museumaquariumdenancy.eu/accueil", "Aquariums and a natural history gallery in an Art Deco building.", "Closed Mondays"),
     ("Iron History Museum", "https://www.museehistoiredufer.fr/accueil/", "The Eiffel Tower’s iron was cast here.", "Jarville, closed Tuesdays"),
     ("Jean-Marie Pelt Botanical Garden", "https://www.jardinbotaniquedenancy.eu/accueil", "12,000 species and 2,500 m² of tropical greenhouses.", "Villers-lès-Nancy"),
     ("Parc de la Pépinière", "", "The big city-centre park.", ""),
    ],
    tourism="Tourist office",
    gift_h="Give a stay",
    gift="A gift card for any of the three suites, valid for 12 months and emailed as soon as it’s paid.",
    gift_b="Order a gift card",
    contact_h="Contact Catherine",
    contact="A question, or a personal welcome? She’ll get back to you.",
    foot="Bookings on", close="Close", prev="Previous photo", next="Next photo",
),
"de": dict(
    title="Les Suites de Catherine, Suiten im Herzen von Nancy",
    desc="Drei voll ausgestattete Suiten, wenige Gehminuten von der Place Stanislas. Für eine Nacht oder einen Monat.",
    skip="Zum Inhalt", menu="Menü", langl="Sprache",
    nav=["Die Suiten", "Nancy", "Verschenken", "Kontakt"], book="Buchen",
    h1="Drei Suiten im Herzen von Nancy",
    lead="Wenige Gehminuten von der Place Stanislas, für eine Nacht oder einen Monat.",
    from_="ab", night="pro Nacht",
    every="In jeder Suite",
    every_l=["Schnelles WLAN", "Ausgestattete Küche", "Nespresso", "Bettwäsche und Handtücher", "Pflegeprodukte", "Fernseher", "Self-Check-in oder Empfang durch Catherine"],
    award="9,1/10 auf Booking.com im Jahr 2023",
    photo="Foto {i} von {n}, {s}", photos="Fotos: {s}",
    s={
     "suite-35": dict(facts=["2 Personen", "33 m²", "Queensize-Bett", "3. Stock, Aufzug"],
        txt="Mitten im Zentrum: Place Stanislas, Markthalle und Bahnhof erreichen Sie zu Fuß. Ein Wohnzimmer mit Vintage-Möbeln und eine komplette Küche.",
        park="Parkhäuser Dom Calmet und Charles III in der Nähe, mit Ladestationen."),
     "suite-si-calme": dict(facts=["3 Personen", "55 m²", "2 Schlafzimmer", "Queensize- und Einzelbett", "4. Stock, Aufzug"],
        txt="Nach Westen, zum Garten hin: Ruhe mitten in der Stadt. Wohnzimmer mit offener Küche, Waschmaschine, Geschirrspüler, Bad und separates WC.",
        park="Gesicherter Parkplatz auf Anfrage."),
     "suite-saint-georges": dict(facts=["2 Personen", "35 m²", "Doppelbett", "2. Stock, Wendeltreppe", "Mindestens 2 Nächte"],
        txt="Wände aus Naturstein, nahe der Place Stanislas und der Kathedrale. Ein echtes Wohnzimmer, ein Schreibtisch fürs Homeoffice und eine Waschmaschine.",
        park="Parkhaus Stanislas, Rue Maurice Barrès."),
    },
    nancy="Nancy zu Fuß", walk_cap="Ab La Suite 35",
    walk=[("2 Min.", "Markthalle"), ("5 Min.", "Place Stanislas"), ("5 Min.", "Centre Prouvé"), ("10 Min.", "Bahnhof")],
    stan_h="Die Place Stanislas",
    stan="1755 vollendet, seit 1983 UNESCO-Welterbe. Die vergoldeten Gitter von Jean Lamour, Caféterrassen und an Sommerabenden die Lichtshow „Rendez-vous“.",
    see="Ebenfalls sehenswert",
    places=[
     ("Musée des Beaux-Arts", "https://musee-des-beaux-arts.nancy.fr/accueil-145.html", "Von Perugino bis Delacroix, die Daum-Sammlung und Jean Prouvé.", "Dienstags geschlossen"),
     ("Musée lorrain", "https://www.musee-lorrain.nancy.fr", "Der Herzogspalast, Georges de La Tour und Callots Bettler.", "Montags und dienstags geschlossen"),
     ("Villa Majorelle", "https://musee-ecole-de-nancy.nancy.fr/la-villa-majorelle-2887.html", "Das erste reine Jugendstilhaus in Nancy.", ""),
     ("Musée de l’École de Nancy", "https://musee-ecole-de-nancy.nancy.fr/accueil-2676.html", "Der wichtigste Ort für Nancys Jugendstil.", ""),
     ("Muséum-Aquarium", "https://www.museumaquariumdenancy.eu/accueil", "Aquarien und zoologische Galerie in einem Art-déco-Bau.", "Montags geschlossen"),
     ("Eisengeschichtliches Museum", "https://www.museehistoiredufer.fr/accueil/", "Hier wurde das Eisen des Eiffelturms gegossen.", "Jarville, dienstags geschlossen"),
     ("Botanischer Garten Jean-Marie Pelt", "https://www.jardinbotaniquedenancy.eu/accueil", "12.000 Arten und 2.500 m² Tropengewächshäuser.", "Villers-lès-Nancy"),
     ("Parc de la Pépinière", "", "Der große Park im Stadtzentrum.", ""),
    ],
    tourism="Tourismusbüro",
    gift_h="Einen Aufenthalt verschenken",
    gift="Ein Gutschein für eine der drei Suiten, 12 Monate gültig und nach der Zahlung per E-Mail verschickt.",
    gift_b="Gutschein bestellen",
    contact_h="Catherine schreiben",
    contact="Eine Frage oder ein persönlicher Empfang? Sie antwortet Ihnen.",
    foot="Buchungen auf", close="Schließen", prev="Vorheriges Foto", next="Nächstes Foto",
),
"nl": dict(
    title="Les Suites de Catherine, suites te huur in het hart van Nancy",
    desc="Drie volledig ingerichte suites op een paar minuten lopen van de Place Stanislas. Voor één nacht of een maand.",
    skip="Naar de inhoud", menu="Menu", langl="Taal",
    nav=["De suites", "Nancy", "Cadeaubon", "Contact"], book="Boeken",
    h1="Drie suites in het hart van Nancy",
    lead="Op een paar minuten lopen van de Place Stanislas, voor één nacht of een maand.",
    from_="vanaf", night="per nacht",
    every="In elke suite",
    every_l=["Snelle wifi", "Ingerichte keuken", "Nespresso", "Bedlinnen en handdoeken", "Verzorgingsproducten", "Televisie", "Zelf inchecken of ontvangst door Catherine"],
    award="9,1/10 op Booking.com in 2023",
    photo="Foto {i} van {n}, {s}", photos="Foto’s van {s}",
    s={
     "suite-35": dict(facts=["2 personen", "33 m²", "Queensize bed", "3e verdieping, lift"],
        txt="Midden in het centrum: Place Stanislas, de markthal en het station liggen op loopafstand. Een woonkamer met vintage meubels en een complete keuken.",
        park="Parkeergarages Dom Calmet en Charles III vlakbij, met laadpalen."),
     "suite-si-calme": dict(facts=["3 personen", "55 m²", "2 slaapkamers", "Queensize en eenpersoonsbed", "4e verdieping, lift"],
        txt="Op het westen, aan de tuinkant: rust midden in de stad. Woonkamer met open keuken, wasmachine, vaatwasser, badkamer en apart toilet.",
        park="Beveiligde parkeerplaats op aanvraag."),
     "suite-saint-georges": dict(facts=["2 personen", "35 m²", "Tweepersoonsbed", "2e verdieping, wenteltrap", "Minimaal 2 nachten"],
        txt="Muren van natuursteen, vlak bij de Place Stanislas en de kathedraal. Een echte woonkamer, een bureau om thuis te werken en een wasmachine.",
        park="Parkeergarage Stanislas, rue Maurice Barrès."),
    },
    nancy="Nancy te voet", walk_cap="Vanaf La Suite 35",
    walk=[("2 min", "Markthal"), ("5 min", "Place Stanislas"), ("5 min", "Centre Prouvé"), ("10 min", "Station")],
    stan_h="De Place Stanislas",
    stan="Voltooid in 1755, sinds 1983 UNESCO-werelderfgoed. De vergulde hekken van Jean Lamour, terrasjes en op zomeravonden de lichtshow „Rendez-vous”.",
    see="Ook de moeite waard",
    places=[
     ("Musée des Beaux-Arts", "https://musee-des-beaux-arts.nancy.fr/accueil-145.html", "Van Perugino tot Delacroix, de Daum-collectie en Jean Prouvé.", "Dinsdag gesloten"),
     ("Musée lorrain", "https://www.musee-lorrain.nancy.fr", "Het hertogelijk paleis, Georges de La Tour en Callots Bedelaars.", "Maandag en dinsdag gesloten"),
     ("Villa Majorelle", "https://musee-ecole-de-nancy.nancy.fr/la-villa-majorelle-2887.html", "Het eerste volledige art-nouveauhuis van Nancy.", ""),
     ("Musée de l’École de Nancy", "https://musee-ecole-de-nancy.nancy.fr/accueil-2676.html", "Dé plek voor de art nouveau van Nancy.", ""),
     ("Muséum-Aquarium", "https://www.museumaquariumdenancy.eu/accueil", "Aquaria en een zoölogische galerij in een art-decogebouw.", "Maandag gesloten"),
     ("Museum van de geschiedenis van het ijzer", "https://www.museehistoiredufer.fr/accueil/", "Hier werd het ijzer van de Eiffeltoren gegoten.", "Jarville, dinsdag gesloten"),
     ("Botanische tuin Jean-Marie Pelt", "https://www.jardinbotaniquedenancy.eu/accueil", "12.000 soorten en 2.500 m² tropische kassen.", "Villers-lès-Nancy"),
     ("Parc de la Pépinière", "", "Het grote stadspark.", ""),
    ],
    tourism="VVV Nancy",
    gift_h="Een verblijf cadeau doen",
    gift="Een cadeaubon voor een van de drie suites, 12 maanden geldig en per e-mail verstuurd zodra hij betaald is.",
    gift_b="Cadeaubon bestellen",
    contact_h="Catherine schrijven",
    contact="Een vraag, of een persoonlijke ontvangst? Ze antwoordt u.",
    foot="Boekingen op", close="Sluiten", prev="Vorige foto", next="Volgende foto",
),
}

def page(L):
    t = T[L]
    book = f"https://www.les-suites-de-catherine.fr/{L}/booking/room"
    alts = "".join(f'<link rel="alternate" hreflang="{x}" href="{SITE}/{x}/">' for x in LANGS) + f'<link rel="alternate" hreflang="x-default" href="{SITE}/fr/">'
    ld = {"@context": "https://schema.org", "@type": "LodgingBusiness", "name": "Les Suites de Catherine", "url": f"{SITE}/{L}/",
          "telephone": TEL_SHOW, "email": MAIL, "image": f"{SITE}/img/suites-03.jpg",
          "address": {"@type": "PostalAddress", "streetAddress": "35 rue des Carmes", "postalCode": "54000", "addressLocality": "Nancy", "addressCountry": "FR"},
          "sameAs": [IG, FB]}
    ids = ["suites", "nancy", "offrir", "contact"]
    nav = "".join(f'<a href="#{i}">{e(n)}</a>' for i, n in zip(ids, t["nav"]))
    langs = "".join(f'<a href="/{x}/" hreflang="{x}" lang="{x}"' + (' aria-current="true"' if x == L else "") + f">{x}</a>" for x in LANGS)
    brand = f'<a class="brand" href="#top" aria-label="Les Suites de Catherine">{MARK}<span>Les Suites<br>de Catherine</span></a>'

    arches = "".join(
        f'<li style="--c:{s["c"]};--cl:{s["cl"]};--i:{k}"><a href="#{s["id"]}"><span class="arch"><img src="/img/{s["hero"]}" alt="" '
        f'{"fetchpriority=\"high\"" if k == 0 else "loading=\"eager\""} decoding="async"></span><span class="nm">{e(s["short"])}</span></a></li>'
        for k, s in enumerate(SUITES))

    suites = []
    for k, s in enumerate(SUITES):
        d = t["s"][s["id"]]; n = len(s["imgs"])
        lab = lambda i: e(t["photo"].format(i=i + 1, n=n, s=s["name"]))
        main = f'<button class="g main" type="button" data-full="/img/{s["imgs"][0]}" aria-label="{lab(0)}"><img src="/img/{s["imgs"][0]}" alt="" loading="lazy" decoding="async"></button>'
        strip = "".join(f'<li><button class="g" type="button" data-full="/img/{im}" aria-label="{lab(i + 1)}"><img src="/img/{im}" alt="" loading="lazy" decoding="async"></button></li>'
                        for i, im in enumerate(s["imgs"][1:]))
        facts = "".join(f"<li>{e(f)}</li>" for f in d["facts"])
        suites.append(f'''<article class="suite{' rev' if k % 2 else ''}" id="{s["id"]}" style="--c:{s["c"]};--cl:{s["cl"]};--tint:{s["tint"]}">
<div class="gal">{main}<ul class="strip" aria-label="{e(t["photos"].format(s=s["name"]))}">{strip}</ul></div>
<div class="tx"><h3>{e(s["name"])}</h3>
<p class="addr"><a href="https://www.google.com/maps/search/?api=1&amp;query={s["q"]}" target="_blank" rel="noopener">{ic("pin")}{e(s["addr"])}, Nancy</a></p>
<ul class="facts">{facts}</ul>
<p>{e(d["txt"])}</p>
<p class="park">{ic("car")}{e(d["park"])}</p>
<div class="buy"><p class="pr">{e(t["from_"])} <b>{e(s["price"][L])}</b> {e(t["night"])}</p><a class="btn" href="{book}" rel="noopener">{e(t["book"])}</a></div></div>
</article>''')

    every = "".join(f"<li>{e(x)}</li>" for x in t["every_l"])
    walk = "".join(f"<li><b>{e(a)}</b><span>{e(b)}</span></li>" for a, b in t["walk"])
    places = ""
    for nm, url, txt, info in t["places"]:
        h = f'<a href="{url}" target="_blank" rel="noopener">{e(nm)}{ic("out")}</a>' if url else e(nm)
        places += f'<li><h4>{h}</h4><p>{e(txt)}</p>' + (f'<p class="info">{e(info)}</p>' if info else "") + "</li>"

    return f'''<!doctype html>
<html lang="{L}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(t["title"])}</title>
<meta name="description" content="{e(t["desc"])}">
<link rel="canonical" href="{SITE}/{L}/">
{alts}
<meta property="og:type" content="website">
<meta property="og:site_name" content="Les Suites de Catherine">
<meta property="og:title" content="{e(t["title"])}">
<meta property="og:description" content="{e(t["desc"])}">
<meta property="og:url" content="{SITE}/{L}/">
<meta property="og:image" content="{SITE}/img/suites-03.jpg">
<meta name="theme-color" content="#13221C">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Hanken+Grotesk:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/style.css?v=7">
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script>
</head>
<body>
<a class="skip" href="#main">{e(t["skip"])}</a>
<header class="hd" id="hd"><div class="bar">
{brand}
<nav class="nav" aria-label="{e(t["menu"])}">{nav}</nav>
<div class="act"><nav class="lang" aria-label="{e(t["langl"])}">{langs}</nav><a class="btn sm" href="{book}" rel="noopener">{e(t["book"])}</a></div>
</div></header>
<main id="main">
<section class="hero" id="top"><div class="wrap">
<h1>{e(t["h1"])}</h1>
<p class="lead">{e(t["lead"])}</p>
<ul class="arches">{arches}</ul>
</div></section>

<section class="every"><div class="wrap"><h2>{e(t["every"])}</h2><ul>{every}</ul></div></section>

<section class="suites" id="suites"><h2 class="vh">{e(t["nav"][0])}</h2><div class="wrap">
{"".join(suites)}
<p class="award">{e(t["award"])}</p>
</div></section>

<section class="nancy" id="nancy"><div class="wrap">
<div class="nt"><h2>{e(t["nancy"])}</h2>
<ul class="walk" aria-label="{e(t["walk_cap"])}">{walk}</ul><p class="cap">{e(t["walk_cap"])}</p>
<h3>{e(t["stan_h"])}</h3><p class="stan">{e(t["stan"])}</p></div>
<div class="see"><h3>{e(t["see"])}</h3><ul class="places">{places}</ul>
<p><a class="link" href="https://www.nancy-tourisme.fr/" target="_blank" rel="noopener">{e(t["tourism"])}{ic("out")}</a></p></div>
</div></section>

<section class="duo"><div class="wrap">
<div class="gift" id="offrir"><h2>{e(t["gift_h"])}</h2><p>{e(t["gift"])}</p><p><a class="btn gold" href="{book}" rel="noopener">{e(t["gift_b"])}</a></p></div>
<div class="contact" id="contact"><h2>{e(t["contact_h"])}</h2><p>{e(t["contact"])}</p>
<p class="cta"><a class="btn" href="tel:{TEL}">{ic("tel")}{TEL_SHOW}</a><a class="btn ghost" href="mailto:{MAIL}">{ic("mail")}{MAIL}</a></p></div>
</div></section>
</main>
<footer class="foot"><div class="wrap">
{brand}
<p><a class="ig" href="{IG}" target="_blank" rel="noopener">{ic("ig")}@les_suites_de_catherine</a></p>
<p class="small">{e(t["foot"])} <a href="https://www.les-suites-de-catherine.fr/{L}" rel="noopener">les-suites-de-catherine.fr</a><br>Photos © Les Suites de Catherine</p>
</div></footer>
<div class="lb" id="lb" hidden><button class="x" type="button" aria-label="{e(t["close"])}">×</button><button class="p" type="button" aria-label="{e(t["prev"])}">‹</button><img alt=""><button class="n" type="button" aria-label="{e(t["next"])}">›</button></div>
<script src="/app.js?v=6" defer></script>
</body>
</html>
'''

for L in LANGS:
    open(os.path.join(OUT, L, "index.html"), "w").write(page(L))
print("ok")
