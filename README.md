# Atelier Bio-Inspiration — Support Web Interactif (TNI)

Application web éducative conçue pour animer un atelier de sensibilisation au biomimétisme auprès d'élèves de 5e année du primaire (Collège Stanislas).

## Fonctionnalités
* **Page 1 — Présentation :** Introduction au biomimétisme et démarche scientifique en 3 étapes (Observer → Comprendre → Inventer).
* **Page 2 — Galerie d'exemples interactifs :** 6 études de cas filtrables par domaine (*Transport*, *Matériaux*, *Architecture*, *Robotique*) avec bascule interactive entre le modèle naturel et l'invention humaine.
* **Page 3 — Quiz collectif TNI :** 6 questions à choix multiples avec indices pédagogiques, rétroaction immédiate, score en direct et bouton **Mode TNI** pour agrandir l'affichage en classe.
* **Sources pédagogiques :** chaque exemple renvoie vers une ressource externe avec une note sur les limites des chiffres comparatifs.
* **Mini-défi :** formulaire guidé pour nommer le modèle naturel, sa caractéristique utile et le problème humain à résoudre.
* **Accessibilité :** navigation par onglets au clavier, filtres et réponses révocables.
* **Responsive :** mise en page adaptée aux petits écrans et impression de la démarche du mini-défi.

## Exécution et tests
* Ouvrir `index.html` dans un navigateur ou déployer directement via **GitHub Pages**.
* Lancer la validation des données avec Node.js :
  ```bash
  node tests/validation.test.js
