import FormSection from "../FormSection";

export default function SpecialiteEuropeenneContent() {
    const fields = [
        { label: "Type de formation", defaultValue: "Type de formation exemple" },
        { label: "Année", defaultValue: "2024" },
        { label: "Libellé spécialité", defaultValue: "Spécialité exemple" },
        { label: "Libellé diplôme", defaultValue: "Diplôme exemple" },
        { label: "Mode codage", defaultValue: "Mode de codage exemple" },
        { label: "Validation", defaultValue: "Validation exemple" },
        { label: "Code", defaultValue: "Code exemple" },
        { label: "Modalité nomenclature", defaultValue: "Modalité nomenclature exemple" }
    ];

    return <FormSection title="Spécialité Européenne du Diplôme" fields={fields} />;
}
