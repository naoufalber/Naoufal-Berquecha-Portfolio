# Naoufal Berquecha · Portfolio

Portfolio personnel de **Naoufal Berquecha**, ingénieur en Mathématiques Appliquées & Data Science.

Une présentation en français, construite autour de projets détaillés, de résultats vérifiables et d'un parcours de deux ans chez Bpifrance. Le site est écrit en **HTML, CSS et JavaScript natifs**, sans étape de compilation ni service tiers nécessaire au fonctionnement.

## Parcourir le site

- **Le travail** : cinq études de cas filtrables, avec question, démarche, résultats, limites et liens GitHub.
- **Une exploration** : comparaison interactive de deux modèles sur les résultats réels du projet BAAC 2023.
- **Le parcours** : expériences professionnelles et formation reprises du CV fourni en octobre 2026.
- **La méthode** : compétences, manière de travailler, certification et langues.
- **Contact** : e-mail, copie de l'adresse, téléphone avec appel direct, LinkedIn, GitHub et téléchargement du CV actuel.

Le site s'adapte aux petits écrans. Les liens et les études de cas restent consultables sans JavaScript ; les trois expériences sont alors affichées. La navigation utilise des contrôles HTML natifs et des états accessibles, avec prise en compte de `prefers-reduced-motion`.

## Projets présentés

| Projet | Domaine | Dépôt |
|---|---|---|
| Souscription bancaire | Classification, suivi de dérive | [bank-marketing-ml-monitoring](https://github.com/naoufalber/bank-marketing-ml-monitoring) |
| Actualités BBC | NLP, TF-IDF, SVM | [bbc-news-nlp-classification](https://github.com/naoufalber/bbc-news-nlp-classification) |
| Gravité des accidents routiers | Random Forest, données BAAC | [france-road-accident-severity-ml](https://github.com/naoufalber/france-road-accident-severity-ml) |
| Immobilier au Canada | Séries temporelles, SARIMA, R | [canada-housing-sarima-forecasting](https://github.com/naoufalber/canada-housing-sarima-forecasting) |
| CineSearch | Elasticsearch, Python, Docker | [cinesearch-elasticsearch](https://github.com/naoufalber/cinesearch-elasticsearch) |

Les crédits des projets collectifs sont affichés dans les fiches et conservés dans leurs dépôts. Les résultats historiques ne sont pas présentés comme de nouvelles validations. Le script R reste à exécuter ; aucune performance de prévision n'est inventée.

## Exécuter localement

```bash
git clone https://github.com/naoufalber/Naoufal-Berquecha-Portfolio.git
cd Naoufal-Berquecha-Portfolio
python -m http.server 8000
```

Ouvrir `http://localhost:8000`. Aucun package à installer.

## Organisation

| Fichier | Rôle |
|---|---|
| `index.html` | Contenu, sections, études de cas et liens |
| `styles.css` | Identité visuelle, responsive, impression et mouvement réduit |
| `script.js` | Filtres, expériences, comparaison de modèles et menu mobile |
| `assets/` | Portrait, graphiques, icône et polices locales |
| `Naoufal Berquecha _ CV.pdf` | CV actuel, avec le chemin historique conservé |
| `Naoufal Berquecha - CV.html` | Redirection de l'ancienne page vers le portfolio |
| `docs/content-and-validation.md` | Sources des contenus et contrôles effectués |

Pour modifier un projet, éditer sa section `<details class="project">` dans `index.html`. Les filtres correspondent à `data-category`. Le nombre initial de projets se trouve dans la barre de filtres. Les tableaux de la comparaison interactive sont dans `script.js`.

## Publication

Site compatible avec **GitHub Pages**, publié depuis la branche `main`, dossier `/ (root)`. Tous les chemins internes sont relatifs et compatibles avec le sous-chemin du dépôt. `.nojekyll` permet de servir les fichiers statiques directement.

Le portrait provient du profil GitHub de Naoufal. Les graphiques proviennent de ses dépôts de projets. La typographie privilégie Calibri Light lorsqu’elle est disponible sur l’appareil. Une version latine de Source Sans 3 assure le remplacement. Elle est renommée Portfolio Sans pour respecter le nom réservé de la police originale, et hébergée localement en WOFF avec sa licence SIL Open Font License dans `assets/`. Les titres utilisent une graisse légère ; les libellés et les chiffres restent sans empattement. Aucun outil de mesure d'audience, cookie publicitaire, formulaire simulé ou appel à un modèle n'est intégré.
