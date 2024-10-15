import React, { FC } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import ReactMarkdown, { Components } from "react-markdown";
import { Typography, Link, List, ListItem, IconButton, Box, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import remarkGfm from "remark-gfm";

// Le contenu Markdown
const markdownContent = `
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
1. Dans le champ libellé, saisissez les mots-clés \`meca\` et \`auto\`, séparés par un espace.
2. Dans le champ code diplôme, entrez \`3200\`.
3. Cliquez sur **Rechercher**.

**Résultat** : La recherche retourne 5 enregistrements correspondant aux critères saisis.

### Deuxième Exemple : Recherche de Niveaux d’Études (FAB Niveaux d’Études)
**Objectif** : Trouver des niveaux d’études contenant les mots entiers "bac" et "sti".
1. Dans le champ libellé, saisissez \`bac sti\` en cochant la case "mots entiers uniquement".
2. Cliquez sur **Rechercher**.

**Résultat** : La recherche retourne 4 enregistrements correspondant aux critères saisis.
`;

interface HelpModalProps {
    open: boolean;
    handleClose: () => void;
}

const components: Components = {
    h1: ({ node, ...props }) => <Typography variant="h4" gutterBottom {...props} />,
    h2: ({ node, ...props }) => <Typography variant="h5" gutterBottom {...props} />,
    h3: ({ node, ...props }) => <Typography variant="h6" gutterBottom {...props} />,
    p: ({ node, ...props }) => <Typography variant="body1" paragraph {...props} />,
    strong: ({ node, ...props }) => (
        <Typography component="span" sx={{ fontWeight: "bold" }} {...props} />
    ),
    em: ({ node, ...props }) => <Typography component="span" sx={{ fontStyle: "italic" }} {...props} />,
    ul: ({ node, ordered, ...props }) => <List sx={{ listStyleType: "disc", pl: 4 }} {...props} />,
    ol: ({ node, ordered, ...props }) => <List sx={{ listStyleType: "decimal", pl: 4 }} {...props} />,
    li: ({ node, ordered, ...props }) => <ListItem sx={{ display: "list-item", py: 0 }} {...props} />,
    code: ({ node, inline, className, children, ...props }) => (
        <Box
            component="code"
            sx={{
                backgroundColor: "#f5f5f5",
                fontFamily: "monospace",
                fontSize: "0.875rem",
                padding: "2px 4px",
                borderRadius: "4px"
            }}
            {...props}
        >
            {children}
        </Box>
    ),
    a: ({ node, ...props }) => (
        <Link href={props.href as string} target="_blank" rel="noopener noreferrer" {...props} />
    ),
    blockquote: ({ node, ...props }) => (
        <Box
            component="blockquote"
            sx={{
                borderLeft: "4px solid #ccc",
                margin: "1.5em 10px",
                padding: "0.5em 10px",
                color: "#666",
                fontStyle: "italic"
            }}
            {...props}
        />
    )
    // Ajoutez d'autres composants si nécessaire
};

const HelpModal: FC<HelpModalProps> = ({ open, handleClose }) => {
    const theme = useTheme();

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle sx={{ m: 0, p: 2 }}>
                Guide d'utilisation
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500]
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ padding: 3 }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
                    {markdownContent}
                </ReactMarkdown>
            </DialogContent>
        </Dialog>
    );
};

export default HelpModal;
