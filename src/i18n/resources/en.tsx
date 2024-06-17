import type { Translations } from "../types";

export const translations: Translations<"en"> = {
    /* spell-checker: disable */
    Header: {
        "select language": "Select language",
        "home link title": "Home - Entity name (ministry, state secretariat, government)",
        login: "Log in",
        logout: "Log out",
        "my account": "My account",
        "service title": "Manual coding platform",
        "operator logo alt": "Insee, measure to understand",
        "page title home": "Home"
        // "page title mui": "Playing with Mui",
        // "page title todo": "Task List Application"
    },
    Footer: {
        "operator logo alt": "Insee, measure to understand"
        //     "content description": `
        //   This site is a demonstration of the use of Vite + TypeScript + React + react-dsfr.
        //   It is intended to be used as a base for development projects at Insee.
        // `
    },
    Todo: {
        edit: "Edit",
        delete: "Delete"
    },
    AddTodo: {
        "add a todo": "Add a task",
        validate: "Validate"
    },
    ChoosePlatform: {
        "choose platform": "Choice of coding platform",
        "select survey": "Select a survey",
        job: "Job",
        training: "Training",
        "choice of access mode": "Choice of access mode",
        coder: "Coder",
        expert: "Expert",
        back: "Back",
        platform: "to the platform",
        "of survey": "of the survey :"
    },
    Index: {
        welcome: ({ name }: { name: string }) => (
            <>Welcome {name === undefined ? "" : <strong>{name}</strong>}</>
        ),
        "video aria label": "Demonstration video of react-dsfr"
    }
    /* spell-checker: enable */
};
