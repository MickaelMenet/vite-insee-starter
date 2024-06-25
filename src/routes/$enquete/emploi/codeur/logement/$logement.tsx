import { createFileRoute, useMatch } from "@tanstack/react-router";
import { styles } from "../../../../../components/logement/styles";
import { tableData } from "../../../../../../src/data/dataDashboardEmploi";
import PersonDetails from "../../../../../components/logement/PersonDetails";
import LogementDetails from "../../../../../components/logement/LogementDetails";
import { CSSProperties } from "react";
import { useNavigate } from "@tanstack/react-router";

const findLogementDetails = (logementId: string) => {
    return tableData.find(entry => entry.noi === logementId);
};

export const Route = createFileRoute("/$enquete/emploi/codeur/logement/$logement")({
    component: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const match = useMatch("/$enquete/emploi/codeur/logement/$logement");
        const { logement } = match.params as { logement: string };
        const logementDetails = findLogementDetails(logement);

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();

        const handlePersonClick = (index: number) => {
            navigate({ to: `/enquete/emploi/codeur/logement/${logement}/${index + 1}` });
        };

        if (!logementDetails) {
            return <div>Logement non trouvé</div>;
        }

        return (
            <div style={styles.container as CSSProperties}>
                <div style={styles.calloutContainer}>
                    <h2>
                        Liste des QI à traiter pour le logement {logementDetails.logementData.logementId}
                    </h2>
                    <LogementDetails data={logementDetails.logementData} />
                </div>
                <h2 style={{ marginTop: "20px" }}>Détails des individus du logement</h2>
                <div style={styles.detailsContainer}>
                    {logementDetails.personDetails.map((person, index) => (
                        <PersonDetails
                            key={person.noi}
                            details={person}
                            title={`Individu ${index + 1}`}
                            onClick={() => handlePersonClick(index)}
                        />
                    ))}
                </div>
            </div>
        );
    }
});
