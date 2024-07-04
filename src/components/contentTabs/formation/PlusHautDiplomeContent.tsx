import FormSection from "../FormSection";

export default function PlusHautDiplomeContent() {
    const fields = [
        { label: "Type formation", defaultValue: "Type de formation exemple" },
        { label: "Année", defaultValue: "2024" },
        { label: "Niveau du diplôme", defaultValue: "Niveau de diplôme exemple" },
        { label: "Pays", defaultValue: "France" },
        { label: "Alternance", defaultValue: "Oui" },
        { label: "VAE", defaultValue: "Non" },
        { label: "Année 1ère interruption des études", defaultValue: "2020" },
        { label: "Diplôme du secondaire", defaultValue: "Baccalauréat" },
        { label: "Diplôme avant interruption", defaultValue: "Licence" },
        { label: "Libellé diplôme", defaultValue: "Titre du diplôme exemple" },
        { label: "Type de saisie diplôme", defaultValue: "Automatique" },
        { label: "Libellé spécialité", defaultValue: "Spécialité exemple" },
        { label: "Type de saisie spécialité", defaultValue: "Manuelle" },
        { label: "Mode codage", defaultValue: "Mode de codage exemple" },
        { label: "Validation", defaultValue: "Validé" },
        { label: "Code", defaultValue: "Code exemple" },
        { label: "Modalité nomenclature", defaultValue: "Modalité nomenclature exemple" }
    ];

    return <FormSection title="Plus Haut Diplôme" fields={fields} />;
}
