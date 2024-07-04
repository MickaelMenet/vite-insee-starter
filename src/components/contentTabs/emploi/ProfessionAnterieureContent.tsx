import FormSection from "../FormSection";

export default function ProfessionAnterieureContent() {
    const fields = [
        { label: "Libellé d'activité", defaultValue: "Ancienne activité" },
        { label: "Statut (var. collectée)", defaultValue: "Ancien statut" },
        { label: "NAF2", defaultValue: "01" },
        { label: "Supervision", defaultValue: "Oui" },
        { label: "Libellé profession", defaultValue: "Ancienne profession" },
        { label: "Codage PCS", defaultValue: "123a" },
        { label: "Validation", defaultValue: "Validé" },
        { label: "Code PCS", defaultValue: "5678" },
        { label: "Nomenclature PCS", defaultValue: "Ancienne nomenclature PCS" },
        { label: "Codage ISCO", defaultValue: "Codé en batch" },
        { label: "Validation", defaultValue: "Validé" },
        { label: "Code ISCO", defaultValue: "7890" },
        { label: "Nomenclature ISCO", defaultValue: "Ancienne nomenclature ISCO" }
    ];

    return <FormSection title="Profession antérieure" fields={fields} />;
}
