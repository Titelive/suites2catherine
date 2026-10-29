// Contenu du site : la version enregistrée par Catherine (Netlify Blobs), sinon contenu.json du dépôt.
import { getStore } from "@netlify/blobs";
import ORIGINAL from "../../../contenu.json";

export const store = () => getStore({ name: "site", consistency: "strong" });
export const medias = () => getStore({ name: "site-media", consistency: "strong" });
export const original = () => JSON.parse(JSON.stringify(ORIGINAL));

export async function contenuActuel() {
  try {
    const c = await store().get("contenu", { type: "json" });
    if (c && typeof c === "object" && Array.isArray(c.suites)) return { contenu: c, modifie: true };
  } catch (e) { /* on retombe sur l'original */ }
  return { contenu: original(), modifie: false };
}
