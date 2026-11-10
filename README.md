# RESTEV 85 · Prototype VR chasse aux risques

Prototype WebXR 3D inspiré du rendu de référence fourni : entrepôt, chariot, personne, risques balisés, contrôleurs, score et panneaux immersifs.

## Publication GitHub Pages

1. Décompresser l'archive.
2. Déposer `index.html`, `README.md` et `.nojekyll` à la racine du dépôt.
3. Dans **Settings > Pages**, choisir **Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Ouvrir l'adresse HTTPS générée par GitHub Pages.

## Commandes

- Ordinateur : souris + ZQSD ou WASD.
- Casque WebXR : bouton **ENTRER EN VR**, pointer une balise rouge et appuyer sur la gâchette.
- Smartphone : orientation et viseur central, selon compatibilité du navigateur.

## Scénario

8 risques : coactivité chariot-piéton, flaque, câbles, machine sans carter, palette dans l'allée, sortie obstruée, extincteur inaccessible et stockage instable.

## Important

A-Frame 1.8.0 est chargé depuis `aframe.io`; une connexion Internet est nécessaire. Pour une version totalement hors ligne, télécharger la bibliothèque et remplacer le chemin du script.

Ce prototype utilise des objets 3D générés dans le code. Les modèles photoréalistes GLB pourront être ajoutés ensuite sans changer le moteur d'interaction.
