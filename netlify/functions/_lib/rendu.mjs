// Rendu des pages fr/en/de/nl de suites2catherine.com à partir du contenu (contenu.json, ou la version
// enregistrée par Catherine dans l'espace d'édition). Utilisé par la fonction « page » et par outils/rendu.mjs.
export const SITE = "https://suites2catherine.com";
export const LANGS = ["fr", "en", "de", "nl"];
export const VERSION = "22";
export const ICONS = {
"grid": "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.5\"/>",
"pin": "<path d=\"M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z\"/><circle cx=\"12\" cy=\"9.5\" r=\"2.5\"/>",
"out": "<path d=\"M7 17L17 7M9 7h8v8\"/>",
"tel": "<path d=\"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z\"/>",
"mail": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3 7l9 6 9-6\"/>",
"ig": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"17.3\" cy=\"6.7\" r=\".9\"/>",
"wifi": "<path d=\"M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19.5\" r=\".9\"/>",
"pot": "<path d=\"M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM2 10h2M20 10h2M9.5 7c0-1 1-1 1-2.5M14 7c0-1 1-1 1-2.5\"/>",
"cup": "<path d=\"M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM16 11h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5v3M12 3.5v3\"/>",
"towel": "<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><path d=\"M4 9h16M4 13h16\"/>",
"bottle": "<path d=\"M10 3h4v3h-4zM9 6h6l1 3v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9zM8 13h8\"/>",
"tv": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 21h8M12 17v4\"/>",
"key": "<circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"M11 12l9-9M16 7l3 3M14 9l2 2\"/>",
"people": "<circle cx=\"9\" cy=\"8\" r=\"3\"/><path d=\"M3 20a6 6 0 0 1 12 0\"/><circle cx=\"17\" cy=\"9\" r=\"2.5\"/><path d=\"M15.5 14.5A5 5 0 0 1 21 19\"/>",
"area": "<path d=\"M4 4h16v16H4zM4 9h3M4 14h3M9 4v3M14 4v3\"/>",
"bed": "<path d=\"M3 19V6M21 19v-6a3 3 0 0 0-3-3h-8v6M3 16h18\"/><circle cx=\"6.5\" cy=\"12\" r=\"1.5\"/>",
"door": "<path d=\"M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M3 21h18\"/><circle cx=\"14.5\" cy=\"12\" r=\".9\"/>",
"lift": "<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M9.5 9L12 6.5 14.5 9M9.5 15L12 17.5 14.5 15\"/>",
"stairs": "<path d=\"M3 20h5v-4h4v-4h4V8h5\"/>",
"moon": "<path d=\"M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z\"/>",
"basket": "<path d=\"M4 9h16l-1.5 10a2 2 0 0 1-2 1.7h-9a2 2 0 0 1-2-1.7zM8 9l3-5M16 9l-3-5\"/>",
"gate": "<path d=\"M4 21V10a8 8 0 0 1 16 0v11M8 21v-9a4 4 0 0 1 8 0v9M2 21h20\"/>",
"hall": "<path d=\"M4 21V8l8-4 8 4v13M2 21h20M9 21v-5h6v5M8 11h2M14 11h2\"/>",
"train": "<rect x=\"5\" y=\"3\" width=\"14\" height=\"13\" rx=\"3\"/><path d=\"M5 10h14M8 16l-2 5M16 16l2 5\"/><circle cx=\"9\" cy=\"13\" r=\".8\"/><circle cx=\"15\" cy=\"13\" r=\".8\"/>",
"museum": "<path d=\"M3 9l9-5 9 5M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 21h18M3 18h18\"/>",
"palace": "<path d=\"M3 21V10l3-2 3 2v11M15 21V10l3-2 3 2v11M9 21v-8h6v8M2 21h20M12 13V9\"/>",
"house": "<path d=\"M4 21V11l8-7 8 7v10M2 21h20M10 21v-5h4v5\"/>",
"flower": "<path d=\"M12 21v-8M12 13c-4 0-6-3-6-6 3 0 6 2 6 6zM12 13c4 0 6-3 6-6-3 0-6 2-6 6zM9 21h6\"/>",
"fish": "<path d=\"M3 12c3-5 10-6 15 0-5 6-12 5-15 0zM18 12l3-3v6z\"/><circle cx=\"8\" cy=\"11\" r=\".8\"/>",
"anvil": "<path d=\"M3 7h13a5 5 0 0 1-5 5H9v3h3v3H6v-3h3v-3a6 6 0 0 1-6-5zM16 7h5\"/>",
"leaf": "<path d=\"M5 19c0-9 6-14 15-14 0 9-5 15-14 15M5 19l8-8\"/>",
"tree": "<path d=\"M12 21v-6M12 15c-4 0-6-2-6-5a6 6 0 0 1 12 0c0 3-2 5-6 5zM8 21h8\"/>",
"gift": "<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\"/><path d=\"M5 12v9h14v-9M12 8v13M12 8C10 4 7 4 7 6s3 2 5 2zM12 8c2-4 5-4 5-2s-3 2-5 2z\"/>",
"cal": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/>",
"star": "<path d=\"M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z\"/>",
"car": "<path d=\"M5 17h14M6 17v2M18 17v2M4 13l2-5h12l2 5v4H4z\"/><circle cx=\"8\" cy=\"14.5\" r=\".8\"/><circle cx=\"16\" cy=\"14.5\" r=\".8\"/>"
};
const MARK = "<svg class=\"mark\" viewBox=\"0 0 160 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path pathLength=\"1\" d=\"M2 61H158 M9 61V17 M9 17C9 11 12 8 17 8 M14.5 10.5H19.5V18H14.5Z M26 61V30 M154 61V30 M24 30H156 M26 25H72 M108 25H154 M28 25V21 M41 25V21 M54 25V21 M67 25V21 M113 25V21 M126 25V21 M139 25V21 M152 25V21 M38 61V30 M142 61V30 M74 61V30 M106 61V30 M70 30L90 16L110 30 M90 16V14.5 M90 11m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M30 45V39.5A2 2 0 0 1 34 39.5V45 M29.7 61V55A2.3 2.3 0 0 1 34.3 55V61 M44 45V39.5A2 2 0 0 1 48 39.5V45 M43.7 61V55A2.3 2.3 0 0 1 48.3 55V61 M54 45V39.5A2 2 0 0 1 58 39.5V45 M53.7 61V55A2.3 2.3 0 0 1 58.3 55V61 M64 45V39.5A2 2 0 0 1 68 39.5V45 M63.7 61V55A2.3 2.3 0 0 1 68.3 55V61 M80 45V39.5A2 2 0 0 1 84 39.5V45 M79.7 61V55A2.3 2.3 0 0 1 84.3 55V61 M88 45V39.5A2 2 0 0 1 92 39.5V45 M87.7 61V55A2.3 2.3 0 0 1 92.3 55V61 M96 45V39.5A2 2 0 0 1 100 39.5V45 M95.7 61V55A2.3 2.3 0 0 1 100.3 55V61 M112 45V39.5A2 2 0 0 1 116 39.5V45 M111.7 61V55A2.3 2.3 0 0 1 116.3 55V61 M122 45V39.5A2 2 0 0 1 126 39.5V45 M121.7 61V55A2.3 2.3 0 0 1 126.3 55V61 M132 45V39.5A2 2 0 0 1 136 39.5V45 M131.7 61V55A2.3 2.3 0 0 1 136.3 55V61 M146 45V39.5A2 2 0 0 1 150 39.5V45 M145.7 61V55A2.3 2.3 0 0 1 150.3 55V61\"/></svg>";
const FLG = {
"fr": "<rect width=\"60\" height=\"60\" fill=\"#fff\"/><rect width=\"20\" height=\"60\" fill=\"#2d4fa3\"/><rect x=\"40\" width=\"20\" height=\"60\" fill=\"#d63a3a\"/>",
"en": "<rect width=\"60\" height=\"60\" fill=\"#2c3f8f\"/><path d=\"M0 0L60 60M60 0L0 60\" stroke=\"#fff\" stroke-width=\"10\"/><path d=\"M0 0L60 60M60 0L0 60\" stroke=\"#d1303f\" stroke-width=\"3.5\"/><path d=\"M30 0V60M0 30H60\" stroke=\"#fff\" stroke-width=\"16\"/><path d=\"M30 0V60M0 30H60\" stroke=\"#d1303f\" stroke-width=\"9\"/>",
"de": "<rect width=\"60\" height=\"20\" fill=\"#2b2b2b\"/><rect y=\"20\" width=\"60\" height=\"20\" fill=\"#d63a3a\"/><rect y=\"40\" width=\"60\" height=\"20\" fill=\"#f6cc4d\"/>",
"nl": "<rect width=\"60\" height=\"20\" fill=\"#a52d34\"/><rect y=\"20\" width=\"60\" height=\"20\" fill=\"#f4f4f4\"/><rect y=\"40\" width=\"60\" height=\"20\" fill=\"#2c4fa8\"/>"
};

export const ICON_NAMES = Object.keys(ICONS);
const LNAME = { fr: "Français", en: "English", de: "Deutsch", nl: "Nederlands" };
const LOCALE = { fr: "fr_FR", en: "en_GB", de: "de_DE", nl: "nl_NL" };

const e = (x) => String(x == null ? "" : x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
const rich = (x) => e(x).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
const plain = (x) => String(x == null ? "" : x).replace(/\*\*/g, "");
const ic = (n) => '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[n] || ICONS.star) + "</svg>";
const flag = (k, uid) => `<svg class="flag" viewBox="0 0 60 60" aria-hidden="true"><clipPath id="fc${uid}${k}"><circle cx="30" cy="30" r="30"/></clipPath><g clip-path="url(#fc${uid}${k})">${FLG[k]}</g></svg>`;
/* texte d'une langue, avec repli sur le français */
const tr = (o, L) => (o && typeof o === "object" ? (o[L] != null && o[L] !== "" ? o[L] : o.fr || "") : o == null ? "" : String(o));
const abs = (u) => (/^https?:/.test(u) ? u : SITE + (u && u[0] === "/" ? "" : "/") + (u || ""));
const fmt = (s, v) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in v ? v[k] : m));
const num = (p) => { const n = parseFloat(String(p).replace(/[^\d,.]/g, "").replace(",", ".")); return isNaN(n) ? undefined : n; };
const safeUrl = (u) => (/^(https?:|mailto:|tel:|\/)/i.test(String(u || "").trim()) ? String(u).trim() : "");
const color = (c, d) => (/^#[0-9a-fA-F]{3,8}$/.test(String(c || "")) ? c : d);
const telHref = (t) => String(t || "").replace(/[^\d+]/g, "");

export function renderPage(C, L, opts = {}) {
  const I = C.interface || {}, S = C.suites || [], seo = C.seo || {};
  const stitle = tr(seo.titre, L), sdesc = plain(tr(seo.description, L)), ogalt = tr(seo.imageAlt, L);
  const ogimg = abs(seo.image || "/img/og.jpg");
  const resa = (safeUrl((C.liens || {}).reservation) || "https://www.les-suites-de-catherine.fr").replace(/\/+$/, "");
  const resaHost = resa.replace(/^https?:\/\/(www\.)?/, "");
  const book = `${resa}/${L}/booking/room`;
  const K = C.contact || {}, tel = K.telephone || "", mail = K.email || "";
  const IG = safeUrl((C.liens || {}).instagram), FB = safeUrl((C.liens || {}).facebook);
  const alts = LANGS.map((x) => `<link rel="alternate" hreflang="${x}" href="${SITE}/${x}/">`).join("") + `<link rel="alternate" hreflang="x-default" href="${SITE}/fr/">`;
  const first = S[0] || {};
  const ld = { "@context": "https://schema.org", "@graph": [
    { "@type": "LodgingBusiness", "@id": `${SITE}/#lsdc`, name: "Les Suites de Catherine", url: `${SITE}/${L}/`,
      description: sdesc, inLanguage: L, image: [ogimg].concat(S.slice(0, 2).map((s) => abs(s.photoAccueil || (s.photos || [])[0] || ""))),
      telephone: tel, email: mail, priceRange: "€€",
      address: { "@type": "PostalAddress", streetAddress: first.adresse || "", postalCode: "54000", addressLocality: "Nancy", addressRegion: "Grand Est", addressCountry: "FR" },
      areaServed: "Nancy", knowsLanguage: ["fr", "en"],
      amenityFeature: ((C.equipements || {}).liste || []).map((x) => ({ "@type": "LocationFeatureSpecification", name: plain(tr(x.texte, L)), value: true })),
      makesOffer: S.map((s) => ({ "@type": "Offer", url: book, priceCurrency: "EUR", price: num(tr(s.prix, "fr")), itemOffered: { "@id": `${SITE}/${L}/#${s.ancre}` } })),
      sameAs: [IG, FB, resa + "/"].filter(Boolean) },
  ].concat(S.map((s) => ({ "@type": "Apartment", "@id": `${SITE}/${L}/#${s.ancre}`, name: s.nom, url: `${SITE}/${L}/#${s.ancre}`,
      description: plain(tr(s.texte, L)), image: (s.photos || []).map(abs), containedInPlace: { "@id": `${SITE}/#lsdc` },
      address: { "@type": "PostalAddress", streetAddress: s.adresse || "", postalCode: "54000", addressLocality: "Nancy", addressCountry: "FR" },
      floorSize: s.surface ? { "@type": "QuantitativeValue", value: +s.surface, unitCode: "MTK" } : undefined,
      occupancy: s.personnes ? { "@type": "QuantitativeValue", maxValue: +s.personnes } : undefined,
      numberOfBedrooms: s.chambres ? +s.chambres : undefined }))) };

  const M = I.menu || {};
  const nav = [["suites", M.suites], ["nancy", M.nancy], ["offrir", M.offrir], ["contact", M.contact]].map(([i, n]) => `<a href="#${i}">${e(tr(n, L))}</a>`).join("");
  const langs = `<details class="lang"><summary aria-label="${e(tr(I.langue, L))} : ${LNAME[L]}">${flag(L, "c")}</summary><ul>` +
    LANGS.map((x) => `<li><a href="/${x}/" hreflang="${x}" lang="${x}"` + (x === L ? ' aria-current="true"' : "") + `>${flag(x, "m")}<span>${LNAME[x]}</span></a></li>`).join("") + "</ul></details>";
  const brand = `<a class="brand" href="#top" aria-label="Les Suites de Catherine">${MARK}<span>Les Suites<br>de Catherine</span></a>`;
  const vars = (s) => `--c:${color(s.couleur, "#3F6B5A")};--cl:${color(s.couleurClaire, "#9CC3B2")};--tint:${color(s.couleurFond, "#EEF3F0")}`;
  const note = tr(C.note, L);
  const star = '<svg class="st" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z"/></svg>';
  const dot = " · ";

  /* cartes des suites, façon résultats de recherche */
  const cards = S.map((s, k) => {
    const f = (s.caracteristiques || []).slice(0, 2).map((x) => e(tr(x.texte, L))).join(dot);
    return `<li style="${vars(s)};--i:${k}"><a href="#${e(s.ancre)}"><span class="cph"><img src="${e(s.photoAccueil || (s.photos || [])[0] || "")}" alt="${e(s.nom)}, Nancy" ${k === 0 ? 'fetchpriority="high"' : 'loading="eager"'} decoding="async"><span class="tag"><i></i>${e(s.nomCourt || s.nom)}</span></span>` +
      `<span class="cn">${e(s.nom)}</span><span class="cf">${f}</span><span class="cp">${e(tr(I.des, L))} <b>${e(tr(s.prix, L))}</b> ${e(tr(I.parNuit, L))}</span></a></li>`;
  }).join("");

  const suites = S.map((s, k) => {
    const ph = (s.photos || []).filter(Boolean), n = ph.length;
    const lab = (i) => e(fmt(tr(I.photoN, L), { i: i + 1, n, s: s.nom }));
    const gal = ph.map((im, i) => `<button class="g${i === 0 ? " main" : ""}${i > 4 ? " more" : ""}" type="button" data-full="${e(im)}" aria-label="${lab(i)}"><img src="${e(im)}" alt="${i === 0 ? e(s.nom) + ", Nancy" : ""}" loading="lazy" decoding="async"></button>`).join("");
    const all = n > 1 ? `<button class="all" type="button" data-all>${ic("grid")}${e(fmt(tr(I.afficherPhotos, L), { n }))}</button>` : "";
    const facts = (s.caracteristiques || []).map((f) => `<li>${ic(f.icone)}<span>${e(tr(f.texte, L))}</span></li>`).join("");
    const q = encodeURIComponent((s.adresse || "") + " Nancy").replace(/%20/g, "+");
    const park = tr(s.parking, L);
    return `<article class="suite" id="${e(s.ancre)}" style="${vars(s)}"><div class="wrap">
<header class="sh"><h2><i></i>${e(s.nom)}</h2><a class="addr" href="https://www.google.com/maps/search/?api=1&amp;query=${q}" target="_blank" rel="noopener">${ic("pin")}${e(s.adresse)}, Nancy</a></header>
<div class="gal n${Math.min(n, 5)}" aria-label="${e(fmt(tr(I.photosDe, L), { s: s.nom }))}">${gal}${all}</div>
<div class="sb"><div class="sx">
<ul class="facts">${facts}</ul>
<p class="tx">${rich(tr(s.texte, L))}</p>
${park ? `<p class="park">${ic("car")}<span>${rich(park)}</span></p>` : ""}
</div>
<aside class="book"><p class="pr"><span>${e(tr(I.des, L))}</span> <b>${e(tr(s.prix, L))}</b> <span>${e(tr(I.parNuit, L))}</span></p>
<a class="btn grad" href="${e(book)}" rel="noopener">${ic("cal")}${e(tr(I.reserver, L))}</a>
<p class="sm">${e(tr(I.reservationEnLigne, L))} ${e(resaHost)}</p></aside>
</div></div></article>`;
  }).join("");

  const EQ = C.equipements || {}, N = C.nancy || {}, G = C.cadeau || {};
  const every = (EQ.liste || []).map((x) => `<li>${ic(x.icone)}<span>${e(tr(x.texte, L))}</span></li>`).join("");
  const walk = (N.trajets || []).map((x) => `<li>${ic(x.icone)}<b>${e(tr(x.duree, L))}</b><span>${e(tr(x.lieu, L))}</span></li>`).join("");
  const places = (N.lieux || []).map((p) => {
    const u = safeUrl(p.lien), nm = tr(p.nom, L), info = tr(p.info, L);
    const h = u ? `<a href="${e(u)}" target="_blank" rel="noopener">${e(nm)}${ic("out")}</a>` : e(nm);
    return `<li><span class="pi">${ic(p.icone)}</span><div><h4>${h}</h4><p>${e(tr(p.texte, L))}</p>` + (info ? `<p class="info">${e(info)}</p>` : "") + "</div></li>";
  }).join("");
  const tourism = safeUrl(N.lienOfficeTourisme);
  const mins = S.map((s) => ({ v: num(tr(s.prix, "fr")), t: tr(s.prix, L) })).filter((x) => x.v != null).sort((a, b) => a.v - b.v)[0];

  return `<!doctype html>
<html lang="${L}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${e(stitle)}</title>
<meta name="description" content="${e(sdesc)}">
<meta name="robots" content="${opts.preview ? "noindex, nofollow" : "index, follow, max-image-preview:large"}">
<link rel="canonical" href="${SITE}/${L}/">
${alts}
<meta property="og:type" content="website">
<meta property="og:site_name" content="Les Suites de Catherine">
<meta property="og:title" content="${e(stitle)}">
<meta property="og:description" content="${e(sdesc)}">
<meta property="og:url" content="${SITE}/${L}/">
<meta property="og:locale" content="${LOCALE[L]}">
${LANGS.filter((x) => x !== L).map((x) => `<meta property="og:locale:alternate" content="${LOCALE[x]}">`).join("")}
<meta property="og:image" content="${e(ogimg)}">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${e(ogalt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${e(stitle)}">
<meta name="twitter:description" content="${e(sdesc)}">
<meta name="twitter:image" content="${e(ogimg)}">
<meta name="twitter:image:alt" content="${e(ogalt)}">
<meta name="geo.region" content="FR-54"><meta name="geo.placename" content="Nancy">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700;6..12,800&family=Instrument+Serif:ital@1&display=swap">
<link rel="stylesheet" href="/style.css?v=${VERSION}">
<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>
</head>
<body>
<a class="skip" href="#main">${e(tr(I.allerAuContenu, L))}</a>
<header class="hd" id="hd"><div class="bar">
${brand}
<nav class="nav" aria-label="${e(tr(I.nomDuMenu, L))}">${nav}</nav>
<div class="act">${langs}<a class="btn sm grad" href="${e(book)}" rel="noopener">${e(tr(I.reserver, L))}</a></div>
</div></header>
<main id="main">
<section class="hero" id="top"><div class="wrap">
<h1>${e(tr((C.accueil || {}).titre, L))}</h1>
<p class="sub">${rich(tr((C.accueil || {}).chapo, L))}</p>
${note ? `<p class="rate">${star}<span>${e(note)}</span></p>` : ""}
<ul class="cards" id="suites">${cards}</ul>
</div></section>

<section class="every"><div class="wrap"><h2>${e(tr(EQ.titre, L))}</h2><ul class="amen">${every}</ul></div></section>

<h2 class="vh">${e(tr(M.suites, L))}</h2>
${suites}

<section class="nancy" id="nancy"><div class="wrap">
<h2>${e(tr(N.titre, L))}</h2>
<div class="nn"><div class="nt">
<ul class="walk" aria-label="${e(tr(N.depuis, L))}">${walk}</ul><p class="cap">${e(tr(N.depuis, L))}</p>
<div class="stan"><h3>${e(tr(N.stanislasTitre, L))}</h3><p>${rich(tr(N.stanislas, L))}</p></div></div>
<div class="see"><h3>${e(tr(N.aVoirTitre, L))}</h3><ul class="places">${places}</ul>
${tourism ? `<p><a class="link" href="${e(tourism)}" target="_blank" rel="noopener">${e(tr(N.officeTourisme, L))}${ic("out")}</a></p>` : ""}</div></div>
</div></section>

<section class="duo"><div class="wrap">
<div class="host" id="contact"><div class="hc">${K.photo ? `<img class="av" src="${e(K.photo)}" alt="${e(K.nom || "")}" loading="lazy" decoding="async">` : ""}<div><h2>${e(tr(K.titre, L))}</h2><p class="role">${e(tr(K.role, L))}</p></div></div>
<p>${rich(tr(K.texte, L))}</p>
<p class="cta">${tel ? `<a class="btn" href="tel:${e(telHref(tel))}">${ic("tel")}${e(tel)}</a>` : ""}${mail ? `<a class="btn ghost" href="mailto:${e(mail)}">${ic("mail")}${e(mail)}</a>` : ""}</p></div>
<div class="gift" id="offrir"><span class="gi">${ic("gift")}</span><h2>${e(tr(G.titre, L))}</h2><p>${rich(tr(G.texte, L))}</p><p><a class="btn ghost" href="${e(book)}" rel="noopener">${ic("gift")}${e(tr(G.bouton, L))}</a></p></div>
</div></section>
</main>
<footer class="foot"><div class="wrap">
${brand}
${IG ? `<p><a class="ig" href="${e(IG)}" target="_blank" rel="noopener">${ic("ig")}${e((C.liens || {}).nomInstagram || "Instagram")}</a></p>` : ""}
<p class="small">${e(tr(I.reservationsSur, L))} <a href="${e(resa)}/${L}" rel="noopener">${e(resaHost)}</a><br>Photos © Les Suites de Catherine</p>
</div></footer>
${mins ? `<div class="mbar"><p><span>${e(tr(I.des, L))}</span> <b>${e(mins.t)}</b> <span>${e(tr(I.parNuit, L))}</span></p><a class="btn grad" href="${e(book)}" rel="noopener">${e(tr(I.reserver, L))}</a></div>` : ""}
<div class="lb" id="lb" hidden><button class="x" type="button" aria-label="${e(tr(I.fermer, L))}">×</button><button class="p" type="button" aria-label="${e(tr(I.photoPrecedente, L))}">‹</button><img alt=""><span class="cnt" aria-live="polite"></span><button class="n" type="button" aria-label="${e(tr(I.photoSuivante, L))}">›</button></div>
<script src="/app.js?v=${VERSION}" defer></script>
</body>
</html>
`;
}
