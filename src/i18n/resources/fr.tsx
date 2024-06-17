import type { Translations } from "../types";

export const translations: Translations<"fr"> = {
    /* spell-checker: disable */
    Header: {
        "select language": "Sélectionner la langue",
        "home link title": "Accueil - Nom de l'entité (ministère, secrétariat d'état, gouvernement)",
        login: "Se connecter",
        logout: "Se déconnecter",
        "my account": "Mon compte",
        "service title": "Plateforme de codification manuelle",
        "operator logo alt": "Insee, mesurer pour comprendre",
        "page title home": "Accueil"
        // "page title mui": "Jouer avec Mui",
        // "page title todo": "Application liste de tâches"
    },
    Footer: {
        "operator logo alt": "Insee, mesurer pour comprendre"
        //     "content description": `
        //   Ce site est une démonstration de l'utilisation de Vite + TypeScript + React + react-dsfr.
        //   Il est destiné à être utilisé comme base pour un les projets de développement a l'Insee.
        // `
    },
    Todo: {
        edit: "Modifier",
        delete: "Supprimer"
    },
    AddTodo: {
        "add a todo": "Ajouter une tâche",
        validate: "Valider"
    },
    ChoosePlatform: {
        "choose platform": "Choix de la plateforme de codification",
        "select survey": "Sélectionnez une enquête",
        job: "Emploi",
        training: "Formation",
        "choice of access mode": "Choix du mode d'accès",
        coder: "Codeur",
        expert: "Expert",
        back: "Retour",
        platform: "à la plateforme",
        "of survey": "de l'enquête :"
    },
    Index: {
        welcome: ({ name }: { name: string }) => (
            <>Bienvenue {name === undefined ? "" : <strong>{name}</strong>}</>
        ),
        "video aria label": "Video de démonstration de react-dsfr"
    }
    /* spell-checker: enable */
};
