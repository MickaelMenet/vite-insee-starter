import { createFileRoute } from "@tanstack/react-router";
import { styles } from "../../../../../components/logement/styles";
import { logementData, details1, details2 } from "../../../../../components/logement/data";
import PersonDetails from "../../../../../components/logement/PersonDetails";
import LogementDetails from "../../../../../components/logement/LogementDetails";
import { CSSProperties } from "react";

export const Route = createFileRoute("/$enquete/formation/expert/$logement/$logement")({
    component: () => (
        <div style={styles.container as CSSProperties}>
            <div style={styles.calloutContainer}>
                <h2>Liste des QI à traiter pour le logement {logementData.logement}</h2>
                <LogementDetails data={logementData} />
            </div>
            <h2 style={{ marginTop: "20px" }}>Détails des individus du logement</h2>
            <div style={styles.detailsContainer}>
                <PersonDetails details={details1} title="Individu 1" />
                <PersonDetails details={details2} title="Individu 2" />
            </div>
        </div>
    )
});
