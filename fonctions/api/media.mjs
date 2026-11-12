// Photos envoyées depuis l'espace d'édition : /media/<id>.jpg
import { medias } from "./_lib/contenu.mjs";

export const config = { path: "/media/*" };

export default async (req) => {
  const key = new URL(req.url).pathname.replace(/^\/media\//, "");
  if (!/^[a-z0-9-]{8,64}\.(jpg|png|webp)$/.test(key)) return new Response("Introuvable", { status: 404 });
  const r = await medias().getWithMetadata(key, { type: "arrayBuffer" }).catch(() => null);
  if (!r || !r.data) return new Response("Introuvable", { status: 404 });
  return new Response(r.data, { headers: { "Content-Type": (r.metadata && r.metadata.type) || "image/jpeg", "Cache-Control": "public, max-age=31536000, immutable" } });
};
