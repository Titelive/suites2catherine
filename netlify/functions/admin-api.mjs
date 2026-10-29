// Espace d'édition de Catherine : POST /admin/api  (Basic auth, mêmes identifiants que le livret)
//   connexion | lire | enregistrer | original | historique | restaurer | photo | apercu
// Le mot de passe est vérifié par l'administration du livret (titelive.me), seul endroit où il est défini.
import { purgeCache } from "@netlify/functions";
import { randomBytes, createHash } from "node:crypto";
import { store, medias, original, contenuActuel } from "./_lib/contenu.mjs";
import { renderPage, LANGS, ICON_NAMES, ICONS } from "./_lib/rendu.mjs";

export const config = { path: "/admin/api" };

const LIVRET_API = process.env.LIVRET_ADMIN_API || "https://titelive.me/livret/admin/api";
const J = (code, o) => new Response(JSON.stringify(o), { status: code, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" } });
const ok = new Map(); // empreinte des identifiants -> date de validité

async function authOk(req) {
  const h = req.headers.get("authorization") || "";
  if (!/^Basic /i.test(h)) return false;
  const k = createHash("sha256").update(h).digest("hex");
  if ((ok.get(k) || 0) > Date.now()) return true;
  try {
    const r = await fetch(LIVRET_API, { method: "POST", headers: { Authorization: h, "Content-Type": "application/json" }, body: JSON.stringify({ action: "ping" }) });
    if (r.status === 200) { ok.set(k, Date.now() + 5 * 60 * 1000); return true; }
  } catch (e) { /* refus */ }
  return false;
}

/* contrôle léger : on garde la forme du contenu d'origine */
function valide(c) {
  if (!c || typeof c !== "object" || Array.isArray(c)) return "Contenu illisible.";
  if (!Array.isArray(c.suites) || !c.suites.length) return "Il faut au moins une suite.";
  if (JSON.stringify(c).length > 400000) return "Contenu trop long.";
  return "";
}
const purge = async () => { try { await purgeCache({ tags: ["pages"] }); } catch (e) { console.log("purge", e && e.message); } };

export default async (req) => {
  if (req.method !== "POST") return J(405, { error: "Méthode non autorisée." });
  if (!(await authOk(req))) return J(401, { error: "Identifiant ou mot de passe incorrect." });
  let b; try { b = await req.json(); } catch (e) { return J(400, { error: "Requête illisible." }); }
  const act = b && b.action, S = store();

  if (act === "connexion") return J(200, { ok: true });
  if (act === "icones") return J(200, { icones: ICONS });

  if (act === "lire") {
    const { contenu, modifie } = await contenuActuel();
    return J(200, { contenu, original: original(), modifie, icones: ICON_NAMES, langues: LANGS });
  }

  if (act === "enregistrer" || act === "restaurer") {
    let c = b.contenu;
    if (act === "restaurer") {
      if (!/^h-\d+$/.test(String(b.cle || ""))) return J(400, { error: "Version inconnue." });
      c = await S.get("historique/" + b.cle, { type: "json" }).catch(() => null);
      if (!c) return J(404, { error: "Version introuvable." });
    }
    const err = valide(c); if (err) return J(400, { error: err });
    const prev = await S.get("contenu", { type: "json" }).catch(() => null);
    if (prev) {
      await S.setJSON("historique/h-" + Date.now(), prev);
      const { blobs } = await S.list({ prefix: "historique/" });
      const keys = blobs.map((x) => x.key).sort();
      for (const k of keys.slice(0, Math.max(0, keys.length - 30))) await S.delete(k);
    }
    await S.setJSON("contenu", c);
    await purge();
    return J(200, { ok: true });
  }

  if (act === "original") {
    const prev = await S.get("contenu", { type: "json" }).catch(() => null);
    if (prev) await S.setJSON("historique/h-" + Date.now(), prev);
    await S.delete("contenu");
    await purge();
    return J(200, { ok: true, contenu: original() });
  }

  if (act === "historique") {
    const { blobs } = await S.list({ prefix: "historique/" });
    return J(200, { versions: blobs.map((x) => x.key.replace("historique/", "")).sort().reverse() });
  }

  if (act === "photo") {
    const m = /^data:(image\/(jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/.exec(String(b.data || ""));
    if (!m) return J(400, { error: "Format de photo non pris en charge (JPEG, PNG ou WebP)." });
    const buf = Buffer.from(m[3], "base64");
    if (buf.length > 5 * 1024 * 1024) return J(400, { error: "Photo trop lourde (5 Mo maximum)." });
    const ext = m[2] === "jpeg" ? "jpg" : m[2];
    const key = randomBytes(9).toString("hex") + "." + ext;
    await medias().set(key, buf, { metadata: { type: m[1], nom: String(b.nom || "").slice(0, 120), date: new Date().toISOString() } });
    return J(200, { url: "/media/" + key });
  }

  if (act === "apercu") {
    const err = valide(b.contenu); if (err) return J(400, { error: err });
    const L = LANGS.includes(b.langue) ? b.langue : "fr";
    return J(200, { html: renderPage(b.contenu, L, { preview: true }) });
  }

  return J(400, { error: "Action inconnue." });
};
