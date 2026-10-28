# Les Suites de Catherine

Site public de [suites2catherine.com](https://suites2catherine.com), en quatre langues (fr, en, de, nl).
Site statique, sans étape de build, déployé sur Netlify depuis la racine de ce dépôt.

- `index.html`, `fr/`, `en/`, `de/`, `nl/` : les pages ; `/` redirige selon la langue du navigateur (`_redirects`)
- `style.css`, `app.js`, `img/` : styles, script et photos
- Le livret d'accueil (`/voyageurs/livret/`) reste dans le dépôt `titelive` ; ce site le sert en proxy.
