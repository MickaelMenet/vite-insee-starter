import FormSection from "../FormSection";

export default function ProfessionMereContent() {
    const fields = [
        { label: "Libellé d'activité", defaultValue: "Éducation" },
        { label: "Statut (var. collectée)", defaultValue: "Fonctionnaire" },
        { label: "NAF2", defaultValue: "03" },
        { label: "Supervision", defaultValue: "Non" },
        { label: "Libellé profession", defaultValue: "Professeur" },
        { label: "Codage PCS", defaultValue: "623a" },
        { label: "Validation", defaultValue: "Validé" },
        { label: "Code PCS", defaultValue: "1203" },
        { label: "Nomenclature PCS", defaultValue: "Enseignants" }
    ];

    return <FormSection title="Profession de la Mère" fields={fields} />;
}
