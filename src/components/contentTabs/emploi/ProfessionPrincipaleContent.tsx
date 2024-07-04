import FormSection from "../FormSection";

export default function ProfessionPrincipaleContent() {
    const fields = [
        { label: "Libellé d'activité", defaultValue: "RESTAURANT" },
        { label: "NAF 5", defaultValue: "" },
        { label: "NAF 2", defaultValue: "" },
        { label: "Statut", defaultValue: "Salarié" },
        { label: "Nature employeur", defaultValue: "Entreprise privée ou association" },
        { label: "Supervision", defaultValue: "non" },
        { label: "Libellé profession", defaultValue: "Serveur de restaurant" },
        { label: "Codage PCS", defaultValue: "Codé en batch" },
        { label: "Validation PCS", defaultValue: "" },
        { label: "Code PCS", defaultValue: "56A1" },
        { label: "Nomenclature PCS", defaultValue: "" },
        { label: "Codage ISCO", defaultValue: "Codé en batch" },
        { label: "Validation ISCO", defaultValue: "" },
        { label: "Code ISCO", defaultValue: "5131" },
        { label: "Nomenclature ISCO", defaultValue: "Serveurs" }
    ];

    return <FormSection title="Détails de la Profession Principale" fields={fields} />;
}
