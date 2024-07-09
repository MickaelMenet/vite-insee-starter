import FormSection from "../FormSection";
export default function EmployeurPrincipalContent() {
    const fields = [
        { label: "Libellé d'activité", defaultValue: "RESTAURANT" },
        { label: "Libellé profession principale", defaultValue: "Serveur de restaurant" },
        { label: "Précision (si flou)", defaultValue: "" },
        { label: "Statut", defaultValue: "Salarié" },
        { label: "Nature employeur", defaultValue: "Entreprise privée ou association" },
        { label: "Pays étranger", defaultValue: "" },
        { label: "Région étranger", defaultValue: "" },
        { label: "Commune étranger", defaultValue: "" },
        { label: "France", defaultValue: "Oui" },
        { label: "Déclaré", defaultValue: "" },
        { label: "Nom/Raison sociale", defaultValue: "LA SECONDA STORIA" },
        { label: "Adresse", defaultValue: "150 AV JOSEPH KESSEL" },
        { label: "Dep/Commune", defaultValue: "78 VOISINS-LE-BRETONNEUX" },
        { label: "Siret", defaultValue: "" },
        { label: "Données identification SIRENE", defaultValue: "" }
    ];

    return <FormSection title="Employeur Principal" fields={fields} />;
}
