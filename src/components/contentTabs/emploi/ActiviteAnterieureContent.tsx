import FormSection from "../FormSection";

export default function ActiviteAnterieureContent() {
    const fields = [
        { label: "Libellé d'activité", defaultValue: "Ancienne activité secondaire" },
        { label: "Statut (var. collectée)", defaultValue: "Ancien statut secondaire" },
        { label: "NAF2", defaultValue: "02" },
        { label: "Supervision", defaultValue: "Non" },
        { label: "Libellé profession", defaultValue: "Ancienne profession secondaire" },
        { label: "Codage PCS", defaultValue: "124b" },
        { label: "Validation", defaultValue: "Non validé" },
        { label: "Code PCS", defaultValue: "6789" },
        { label: "Nomenclature PCS", defaultValue: "Ancienne nomenclature PCS secondaire" },
        { label: "Codage ISCO", defaultValue: "Codé en batch" },
        { label: "Validation", defaultValue: "Non validé" },
        { label: "Code ISCO", defaultValue: "8901" },
        { label: "Nomenclature ISCO", defaultValue: "Ancienne nomenclature ISCO secondaire" }
    ];

    return <FormSection title="Activité antérieure" fields={fields} />;
}
