# Guide : Aide à la Recherche d’un Diplôme ou d’un Niveau d’Études dans le FAB

Ce guide vous permet d'utiliser efficacement l'outil de recherche des fichiers d'apprentissage brut (FAB), utilisés par SICORE pour codifier automatiquement les diplômes et les niveaux d’études dans l’enquête emploi. Il existe deux FAB distincts : un pour les diplômes et un autre pour les niveaux d’études.

## 1. Critères de Recherche Proposés

### a) Libellé (Diplômes & Niveaux d’Études)
- **Saisie** : Entrez une ou plusieurs chaînes de caractères pour rechercher tous les libellés contenant ces chaînes. Séparez-les par un espace.
- **Sensibilité** : La recherche n’est pas sensible à la casse ni aux accents.
- **Option "mots entiers uniquement"** : Cochez cette case pour limiter la recherche aux libellés contenant les chaînes saisies comme mots entiers.  
  **Exemple** : Si vous tapez « sti », la recherche retournera des libellés comme "BAC STI", mais exclura des termes comme "MAGISTERE GESTION HOTELIERE".

### b) Code Diplôme (FAB Diplômes uniquement)
- **Format** : Ce code est composé de 4 chiffres maximum.
- **Saisie** : Entrez un seul code. Un lien hypertexte permet d'accéder à la liste des codes de diplômes (ex : 3200 pour un BTS).

### c) Code NSF (FAB Diplômes uniquement)
- **Format** : Le code NSF se compose de 3 chiffres, avec éventuellement une lettre en plus.
- **Saisie** : Entrez un seul code. Un lien hypertexte permet d’accéder à la liste des codes NSF (ex : 126 pour l’histoire).

### d) Code du Niveau d’Études (FAB Niveaux d’Études uniquement)
- **Format** : Ce code comprend 5 chiffres (ex : 59992 pour une première générale).
- **Saisie** : Entrez un seul code à la fois. Un lien hypertexte permet d'accéder à la liste des codes des niveaux d’études.

## 2. Fonctionnement de la Recherche
- **Combinaison de critères** : Si vous saisissez plusieurs critères, ils sont combinés pour affiner les résultats. Plus vous ajoutez de critères, plus la recherche devient précise.
- **Bouton "Rechercher"** : Permet de lancer la recherche.
- **Bouton "Effacer les critères"** : Réinitialise le formulaire, effaçant ainsi tous les champs saisis.

## 3. Résultats de la Recherche
Les résultats sont présentés sous forme de tableau avec deux colonnes :
- **Colonne de gauche** : Affiche le code associé.
- **Colonne de droite** : Affiche le libellé correspondant.

En haut de la page des résultats :
- **Rappel des critères** : Les critères de recherche utilisés sont récapitulés.
- **Nombre d’enregistrements** : Indique combien d’enregistrements correspondent aux critères.
- **Liens hypertextes** : Permettent de retourner au formulaire pour ajuster les critères ou lancer une nouvelle recherche.

## 4. Exemples d’Utilisation

### Premier Exemple : Recherche de Diplômes (FAB Diplômes)
**Objectif** : Trouver des BTS en lien avec la mécanique automobile.
1. Dans le champ libellé, saisissez les mots-clés `meca` et `auto`, séparés par un espace.
2. Dans le champ code diplôme, entrez `3200`.
3. Cliquez sur **Rechercher**.

**Résultat** : La recherche retourne 5 enregistrements correspondant aux critères saisis.

### Deuxième Exemple : Recherche de Niveaux d’Études (FAB Niveaux d’Études)
**Objectif** : Trouver des niveaux d’études contenant les mots entiers "bac" et "sti".
1. Dans le champ libellé, saisissez `bac sti` en cochant la case "mots entiers uniquement".
2. Cliquez sur **Rechercher**.

**Résultat** : La recherche retourne 4 enregistrements correspondant aux critères saisis.
