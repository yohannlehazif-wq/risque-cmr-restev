# RESTEV 85 WebXR Visual Pro

Cette version implémente l'architecture de production demandée : décor GLB principal, matériau sol PBR, emplacements pour personnage riggé, animations, lightmaps, audio spatial, contrôleurs WebXR, hitboxes invisibles, dangers liés aux objets, trois niveaux de qualité, mode ordinateur, mode Meta Quest/PICO et publication GitHub Pages.

## Fonctionnement immédiat
Le prototype s'ouvre même sans les actifs locaux : un décor WebXR de secours se charge. Dès que `assets/models/atelier-complet.glb` ou `assets/models/personnage-rigge.glb` sont ajoutés, l'application remplace automatiquement les versions de secours.

## Publication
Déposer tout le contenu à la racine du dépôt. Conserver les dossiers `assets`. Activer GitHub Pages sur `main / root`.

## Qualité
- QUEST/PICO : shader simplifié et précision moyenne.
- ÉQUILIBRÉ : éclairage physique, textures 2K.
- PC ULTRA : rendu haute précision et canevas jusqu'à 4K.

## Cible de production
- 150 000 à 350 000 triangles visibles sur Quest/PICO.
- 60 à 120 appels de rendu.
- Textures principales 2K, accessoires 1K.
- 72 FPS minimum sur le casque cible.
- Lightmaps 2K avec UV2.
