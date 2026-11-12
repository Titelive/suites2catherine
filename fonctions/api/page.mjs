// Pages publiques /fr/ /en/ /de/ /nl/, rendues à partir du contenu en vigueur.
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
    },
  });
};
