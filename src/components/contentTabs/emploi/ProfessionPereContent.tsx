import FormSection from "../FormSection";

const ProfessionPereContent = () => {
    const fields = [
        { label: "Libellé d'activité", defaultValue: "Agriculture" },
        { label: "Statut (var. collectée)", defaultValue: "Indépendant" },
        { label: "NAF2", defaultValue: "01" },
        { label: "Supervision", defaultValue: "Non" },
        { label: "Libellé profession", defaultValue: "Agriculteur" },
        { label: "Codage PCS", defaultValue: "621a" },
        { label: "Validation", defaultValue: "Validé" },
        { label: "Code PCS", defaultValue: "1201" },
        { label: "Nomenclature PCS", defaultValue: "Agriculteurs exploitants" }
    ];

    return <FormSection title="Profession du Père" fields={fields} />;
};

export default ProfessionPereContent;
