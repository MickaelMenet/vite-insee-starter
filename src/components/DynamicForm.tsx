import { useEffect, useState } from "react";
import FormSection from "./contentTabs/FormSection";

const DynamicForm = () => {
    const [config, setConfig] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("useEffect exécuté");

        fetch("/config.json")
            .then(response => {
                console.log("Réponse du fetch reçue :", response);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! statut: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Données chargées :", data);
                setConfig(data);
            })
            .catch(error => {
                console.error("Erreur de chargement du fichier JSON :", error);
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    if (!config) {
        return <div>Chargement des données...</div>;
    }

    const fields = [
        { label: config["fr.insee.repriseEmpl.labelPeriode"], defaultValue: "Trimestre" },
        { label: config["fr.insee.repriseEmpl.labelInfoLog"], defaultValue: "Logement" },
        { label: config["fr.insee.repriseEmpl.labelNumIndiv"], defaultValue: "Noi" }
    ];

    console.log("Champs générés :", fields);

    return <FormSection title="Données dynamiques" fields={fields} />;
};

export default DynamicForm;
