import FormSection from "../FormSection";

export default function ActiviteSecondaireContent() {
    const fields = [
        { label: "Libellé d'activité", defaultValue: "Construction" },
        { label: "Statut (var. collectée)", defaultValue: "Indépendant" },
        { label: "NAF2", defaultValue: "41" },
        { label: "Supervision", defaultValue: "Oui" },
        { label: "Libellé profession", defaultValue: "Maçon" },
        { label: "Codage PCS", defaultValue: "532a" },
        { label: "Validation", defaultValue: "Validé" },
        { label: "Code PCS", defaultValue: "1220" },
        { label: "Nomenclature PCS", defaultValue: "Maçons" }
    ];

    return <FormSection title="Activité secondaire" fields={fields} />;
}
