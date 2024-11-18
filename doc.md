# Documentation Synthétique des Routes et Composants

## 1. Route `/` - Navigation vers des tableaux de bord

**Objectif :** Afficher des tableaux de bord dynamiques selon les sélections de l’utilisateur.

**Composant clé :** `DashboardTable`.

-   Affiche des données structurées sous forme de tableau interactif.
-   Navigation dynamique vers des pages détaillées basées sur les données sélectionnées.

---

## 2. Routes détaillées dans les tableaux de bord

**Objectif :** Fournir des informations spécifiques aux items sélectionnés dans les tableaux de bord.

**Exemples :**

-   **Route `/logement/:housingId/:index`** :
    -   Affiche les détails d’une personne et les informations du logement associé.
    -   Gère les cas d’erreur si les données ne sont pas trouvées.
-   **Route `/dynamic`** :
    -   Génère des formulaires dynamiques selon les fichiers de configuration chargés.

---

## 3. Route `/fab` - Recherche dans les FAB

**Objectif :** Rechercher des informations dans des fichiers FAB liés aux diplômes et niveaux d'études.

**Composants principaux :**

-   **`SearchDiploma`** : Recherche par diplôme.
    -   **Critères :** libellé, code diplôme (4 chiffres max), code NSF (3 chiffres + lettre max).
    -   Affichage des résultats filtrés ou message d'absence de correspondance.
-   **`SearchLevel`** : Recherche par niveau d'études.
    -   **Critères :** libellé, code niveau (5 chiffres max).
    -   Gestion des erreurs et réinitialisation des champs.
-   **`HelpModal`** : Modal d’aide interactif expliquant le fonctionnement des critères et de la recherche.

---

## 4. Route `/pcs` - Composant `ApiComponent`

**Objectif :** Appeler une API de codage en envoyant des libellés et des paramètres pour obtenir un libellé normalisé et un code.

**Fonctionnalités :**

-   Entrée des données via des listes déroulantes ou des valeurs préconfigurées.
-   Envoi des données à l'API `/api/codage`.
-   Gestion des réponses et affichage des résultats : libellé normalisé et code.
-   Message en cas d’absence de correspondance ou d’erreur d’API.

---

## 5. Route `/properties` - Composant `PropertiesToJson`

**Objectif :** Convertir des fichiers `.properties` en JSON.

**Fonctionnalités :**

-   Importation d’un fichier `.properties` via un champ de téléversement.
-   Conversion du contenu en JSON à l’aide de `properties-parser`.
-   Affichage du résultat JSON et option de téléchargement au format `.json`.
-   Gestion des erreurs : fichier invalide, échec de parsing, etc.

---

## 6. Route `/dynamic` - Composant `DynamicForm`

**Objectif :** Charger dynamiquement un fichier JSON de configuration et générer un formulaire basé sur les données chargées.

**Fonctionnalités :**

-   Chargement du fichier `/config.json` via `fetch`.
-   Affichage des champs configurés avec des valeurs par défaut si les clés sont absentes.
-   Réinitialisation des champs et gestion des erreurs de chargement.

---

## Synthèse des Points Communs

-   **Modularité :** Tous les composants sont conçus pour être autonomes et réutilisables.
-   **Gestion des erreurs :** Messages d’erreur explicites pour guider les utilisateurs.
-   **Interopérabilité :** Utilisation de fichiers locaux, API et configurations pour un fonctionnement dynamique.

---

## Améliorations Futures

-   **Données dynamiques :** Intégrer davantage d’API pour remplacer les fichiers statiques.
-   **Pagination :** Ajouter des options de pagination pour les résultats volumineux.
-   **Validation avancée :** Étendre les validations des champs pour éviter les erreurs utilisateurs.
-   **Internationalisation :** Prévoir un support multilingue pour une meilleure adoption globale.
