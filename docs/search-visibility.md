# Visibilité — vérifications du 29 octobre 2026

## Constat

- GitHub Pages répond en HTTPS avec HTTP 200 ; version déployée initiale datée du 27 octobre.
- Le dépôt est retrouvé par recherche nominative, mais le moteur consulté conserve une ancienne description d’étudiant et un ancien README. Cela ne prouve pas l’état précis de l’index Google.
- Le profil public indique « Berquecha Naoufal » et ses champs bio, site et localisation sont vides. Le dépôt public naoufalber/naoufalber est introuvable (404).
- Le README actuel ne proposait pas de lien direct vers le site publié. Les liens entrants externes ne peuvent pas être inventoriés exhaustivement sans Search Console ou un index de backlinks ; les recherches effectuées n’établissent pas de réseau de liens vers GitHub Pages.
- Contenu principal disponible dans le HTML : aucune dépendance au rendu JavaScript pour lire les études de cas.

## Améliorations appliquées

Canonical absolue, Open Graph et cartes sociales, données structurées Person/ProfilePage, sitemap avec une seule URL canonique, lien du README vers le site et canonical de l’ancienne page redirigée. Aucun classement ni résultat enrichi garanti.

## Actions nécessitant des capacités non exposées par le connecteur

1. Dans les paramètres du profil GitHub, utiliser le nom « Naoufal Berquecha », renseigner le site https://naoufalber.github.io/Naoufal-Berquecha-Portfolio/ et la bio : « Ingénieur CY Tech | Data Science, Machine Learning & Data Engineering | Python, SQL, NLP | 2 ans chez Bpifrance ».
2. Créer le dépôt public naoufalber/naoufalber, puis copier docs/github-profile-README.md dans son README.md à la racine. Le fichier préparé dans ce dépôt n’est pas encore affiché sur le profil.
3. Dans About du dépôt portfolio : description « Naoufal Berquecha — Ingénieur CY Tech. Portfolio Data Science, Machine Learning et Data Engineering : projets, méthodes, résultats et code. », Website = URL GitHub Pages. Topics suggérés : portfolio, data-science, machine-learning, data-engineering, python, nlp, elasticsearch.
4. Épingler le portfolio et les projets les plus représentatifs sur le profil.
5. Ajouter le lien du site dans LinkedIn (coordonnées et sélection), le CV et les profils professionnels que Naoufal contrôle. Utiliser une formulation descriptive avec son nom. Pas d’achat de liens.
6. Créer une propriété Search Console de type préfixe d’URL pour https://naoufalber.github.io/Naoufal-Berquecha-Portfolio/, effectuer la vérification HTML puis inspecter cette URL, demander son indexation et soumettre sitemap.xml. Le jeton de vérification doit provenir du compte propriétaire ; aucun jeton n’a été inventé et aucune soumission n’a été effectuée ici.

## Pourquoi pas de robots.txt dans ce dépôt ?

Un robots.txt doit être servi à la racine de l’hôte : https://naoufalber.github.io/robots.txt. Celui d’un dépôt de projet serait sous /Naoufal-Berquecha-Portfolio/ et ne piloterait pas l’exploration. Son absence n’est pas un blocage d’indexation. Le sitemap peut être soumis directement à Search Console. Si un site racine naoufalber.github.io est créé ultérieurement, y publier un robots.txt avec Sitemap: https://naoufalber.github.io/Naoufal-Berquecha-Portfolio/sitemap.xml.

## Références

- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/robots/intro
- https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme
