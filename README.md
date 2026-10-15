# Flow Nocturne — fond d'écran animé

Trois scènes, un moteur : Three.js dans une page HTML, lue par **Lively Wallpaper** (gratuit, open source).
Tout est embarqué dans `dist/wallpaper.js` (Three.js, images, polices) : aucune requête réseau, ça tourne hors ligne.

| Scène | Pour quoi |
|---|---|
| **Nuit Flow (neutre)** | Le thème pour travailler : encre, poussière en profondeur, sol holographique discret, marque Flow. |
| **Uchiha (hommage)** | La composition du fond d'origine en version nuit : lune douce, silhouette, corbeaux 3D qui se dissolvent, braises orange Flow. |
| **Jarvis (holo)** | HUD holographique : cœur fresnel, anneaux segmentés, graduations, filaire, étiquettes mono. |

## Installation (5 minutes)

1. Installer **Lively Wallpaper** : Microsoft Store (« Lively Wallpaper », éditeur rocksdanister) ou
   <https://github.com/rocksdanister/lively/releases>.
2. Ouvrir Lively, puis **glisser-déposer `Flow-Nocturne-lively.zip`** dans la fenêtre (ou le bouton « + » → le dossier `flow-wallpaper`, fichier `index.html`).
3. Clic sur la vignette « Flow Nocturne » → le fond s'applique. Clic droit → **Personnaliser** pour les réglages.
4. Multi-écrans : Lively → onglet « Écrans » → choisir *Dupliquer* ou un fond par écran.

Conseils :
- Paramètres Lively → *Performance* : mettre « Pause » quand une application est en plein écran (jeux, vidéo).
- Paramètres Lively → *Wallpaper input* : « Souris » (par défaut) pour la parallaxe.

## Réglages (onglet Personnaliser)

| Réglage | Effet |
|---|---|
| Scène | Nuit Flow / Uchiha / Jarvis |
| Luminosité | Exposition globale (70 = nuit, 100 = jour) |
| Mouvement | 0 = image fixe, aucun rendu en continu |
| Particules | Densité de la poussière, des braises et des corbeaux |
| Parallaxe à la souris | La caméra suit doucement le curseur ; sinon dérive lente |
| Logo Flow holographique | Affiche / masque la marque |
| Afficher l'heure | Horloge Bebas Neue + date en bas à gauche |
| Couleur d'accent | Orange Flow par défaut, libre |
| Confort nuit | Lune ivoire chaude, moins de bleu |
| Lueur (bloom) | Halo lumineux post-traitement |
| Mode éco | 30 i/s, sans bloom, résolution 1× |

Accessibilité : `prefers-reduced-motion` du système est respecté (image fixe), « Mouvement » à 0 fait la même chose à la main,
« Luminosité » descend jusqu'à 20 %.

## Développement

```bash
npm install
npm run build        # bundle dist/wallpaper.js
npm run watch        # rebuild à chaque modification
npm run serve        # http://127.0.0.1:8787/index.html
```

Paramètres d'URL pour tester sans Lively : `?scene=2&brightness=90&showClock=1&bloom=0`, et `?t=14` fige la simulation
à t = 14 s pour une capture déterministe (graine fixe).

Arborescence :

```
index.html             page du fond (chargée par Lively)
dist/wallpaper.js      bundle unique (Three.js + scènes + images + polices)
src/main.js            rendu, boucle, parallaxe, pont Lively
src/scenes.js          les trois scènes
src/fx.js              briques : ciel, points, lune, corbeaux, holo, anneaux…
src/shaders.js         GLSL
src/settings.js        réglages (clés = LivelyProperties.json)
assets/                silhouette (masque alpha extrait du fond d'origine), logo Flow
fonts/                 Bebas Neue, DM Mono (OFL)
LivelyInfo.json        métadonnées Lively
LivelyProperties.json  panneau Personnaliser
maquette/              page de présentation + captures
```

## Crédits et droits

- Silhouette : masque extrait du fond d'écran Itachi fourni par l'utilisateur, **usage personnel**. Pour une diffusion
  (banque de thèmes Flow), la remplacer par une silhouette vectorielle originale.
- Three.js — MIT. Bebas Neue, DM Mono — SIL Open Font License (textes dans `fonts/`).
- Logo et couleurs Flow : <https://flow-consulting.fr>.
