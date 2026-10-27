# Sources et validation

## Contenu

- Le CV fourni le 27 octobre 2026 est la source des intitulés, dates, formation, langues, coordonnées, 28 KPI chez Bpifrance et baisse de 18 % des vérifications manuelles au ministère de l'Agriculture. Son PDF remplace la version ancienne au même chemin.
- Les quatre nouveaux dépôts fournissent les résultats, graphiques et limites des études de cas. Le README de CineSearch décrit son catalogue, ses fonctionnalités et ses prérequis ; ce projet n'a pas été réexécuté pendant la refonte du portfolio.
- Les descriptions professionnelles du CV ont été rédigées à nouveau pour le web. Aucune expérience issue d'autres conversations n'a été ajoutée.
- Le site de référence de Nawar Adriouch a été consulté via ses sources publiques pour comprendre son organisation. Le présent portfolio utilise un design et du code spécifiques, sans reprendre ses textes, photographies ou projets.

## Comparaison interactive

Source : `france-road-accident-severity-ml/reports/validated/run.json` et `metrics.csv`, modèle Random Forest fixe, seuil 0,50, test BAAC 2023.

| Modèle | Vrais positifs | Faux négatifs | Faux positifs | Vrais négatifs |
|---|---:|---:|---:|---:|
| Toujours négatif | 0 | 22 669 | 0 | 103 002 |
| Random Forest | 17 476 | 5 193 | 23 230 | 79 772 |

Chaque ligne contient 125 671 personnes. L'accuracy et le rappel sont recalculés côté navigateur à partir de ces comptes. Ce module explique des résultats réels ; ce n'est pas un modèle exécuté en direct ou un estimateur de risque individuel.

## Contrôles

- Syntaxe JavaScript et validité des identifiants HTML, des ancres, des chemins locaux et des fichiers référencés.
- Vérification visuelle de la composition sur ordinateur et dans un viewport mobile de 390 pixels.
- Filtres des cinq projets, ouverture d'une fiche, choix des modèles et cohérence des métriques.
- Navigation mobile et changement d'expérience professionnelle.
- Sources et polices locales : le site n'exige aucun CDN pour afficher son contenu.

Les scores des projets restent limités à leurs protocoles respectifs. Le nouveau runner R n'a pas été exécuté. Les travaux historiques Optuna/SHAP et les représentations NLP optionnelles ne sont pas présentés comme réexécutés.
