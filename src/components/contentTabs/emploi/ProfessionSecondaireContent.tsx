import FormSection from "../FormSection";
export default function ProfessionSecondaireContent() {
    const fields = [
        { label: "Libellé d'activité", defaultValue: "Vente" },
        { label: "Statut (var. collectée)", defaultValue: "Salarié" },
        { label: "NAF2", defaultValue: "47" },
        { label: "Supervision", defaultValue: "Non" },
        { label: "Libellé profession", defaultValue: "Vendeur" },
        { label: "Codage PCS", defaultValue: "525a" },
        { label: "Validation", defaultValue: "Validé" },
        { label: "Code PCS", defaultValue: "1210" },
        { label: "Nomenclature PCS", defaultValue: "Vendeurs" }
    ];

    return <FormSection title="Profession secondaire" fields={fields} />;
}
