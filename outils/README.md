# Outils

Les pages `/fr/`, `/en/`, `/de/` et `/nl/` ne sont plus des fichiers : elles sont rendues par la fonction
`fonctions/api/page.mjs` à partir du contenu.

- `contenu.json` (à la racine) : le contenu d'origine, versionné dans Git.
- La version modifiée par Catherine dans `/admin/` est enregistrée sur le serveur (magasin `site`,
  clé `contenu`) ; elle prime sur `contenu.json`. Le bouton « Revenir à l'original » la supprime.
- Le gabarit HTML est dans `fonctions/api/_lib/rendu.mjs`.
