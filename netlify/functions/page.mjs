// Pages publiques /fr/ /en/ /de/ /nl/, rendues à partir du contenu en vigueur.
// Mises en cache par Netlify et vidées dès que Catherine enregistre (étiquette « pages »).
import { renderPage, LANGS } from "./_lib/rendu.mjs";
import { contenuActuel } from "./_lib/contenu.mjs";

export const config = { path: ["/fr/", "/en/", "/de/", "/nl/", "/fr", "/en", "/de", "/nl"] };

export default async (req) => {
  const L = new URL(req.url).pathname.split("/")[1];
  if (!LANGS.includes(L)) return new Response("Page introuvable", { status: 404 });
  const { contenu } = await contenuActuel();
  return new Response(renderPage(contenu, L), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Netlify-CDN-Cache-Control": "public, durable, max-age=86400, stale-while-revalidate=60",
      "Netlify-Cache-Tag": "pages",
    },
  });
};
