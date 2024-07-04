import FormSection from "../FormSection";

export default function FormationRecenteContent() {
    const fields = [
        { label: "Type de formation", defaultValue: "Type de formation exemple" },
        { label: "Établissement", defaultValue: "Établissement exemple" },
        { label: "Études en alternance", defaultValue: "Oui" },
        { label: "Études en cours", defaultValue: "Non" },
        { label: "Formation suivie", defaultValue: "Formation suivie exemple" },
        { label: "Type de saisie du diplôme", defaultValue: "Automatique" },
        { label: "Niveau du diplôme préparé", defaultValue: "Niveau de diplôme préparé exemple" },
        { label: "Mode codage", defaultValue: "Mode de codage exemple" },
        { label: "Validation", defaultValue: "Validé" },
        { label: "Code", defaultValue: "Code exemple" },
        { label: "Modalité nomenclature", defaultValue: "Modalité nomenclature exemple" }
    ];

    return <FormSection title="Formation Suivie Récemment" fields={fields} />;
}
