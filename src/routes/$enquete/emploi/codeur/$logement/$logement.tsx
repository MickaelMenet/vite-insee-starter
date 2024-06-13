import { createFileRoute } from "@tanstack/react-router";
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";

export const Route = createFileRoute("/$enquete/emploi/codeur/$logement/$logement")({
    component: () => {
        const data = {
            logement: "MEL-001",
            trimestre: "0148",
            rges: "971",
            noenq: "0148",
            dep: "971",
            commune: "GRAND BOURG",
            adresse: "Place de l'Eglise"
        };

        const details1 = {
            noi: "1",
            prenom: "MATHIS",
            sexe: "M",
            naissance: "2000",
            etatQIEmpl: "A reprendre",
            etabEmployeur: "0",
            nbProfessionsPCS: "1",
            nbActivites: "0"
        };

        const details2 = {
            noi: "3",
            prenom: "JUDITH",
            sexe: "F",
            naissance: "1971",
            etatQIEmpl: "A reprendre",
            etabEmployeur: "1",
            nbProfessionsPCS: "0",
            nbActivites: "0"
        };

        const styles = {
            container: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                minHeight: "100vh"
            },
            calloutContainer: {
                width: 800
            },
            ul: {
                listStyle: "none",
                padding: 0
            },
            li: {
                display: "flex",
                alignItems: "center",
                marginBottom: "8px"
            },
            icon: {
                marginRight: "8px",
                fontSize: "1.2em"
            },
            detailsContainer: {
                display: "flex",
                justifyContent: "space-between",
                width: "800px",
                marginTop: "20px"
            },
            calloutDetails: {
                width: "48%"
            }
        };

        return (
            <div style={styles.container}>
                <div style={styles.calloutContainer}>
                    <h2>Liste des QI à traiter pour le logement MEL-001</h2>
                    <CallOut title="Informations sur le logement MEL-001">
                        <ul style={styles.ul}>
                            <li style={styles.li}>
                                <i className="ri-home-line" style={styles.icon} /> Logement:{" "}
                                {data.logement}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-calendar-line" style={styles.icon} /> Trimestre:{" "}
                                {data.trimestre}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-map-pin-line" style={styles.icon} /> Rges: {data.rges}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-barcode-line" style={styles.icon} /> NOENQ: {data.noenq}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-government-line" style={styles.icon} /> DEP: {data.dep}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-building-line" style={styles.icon} /> Commune:{" "}
                                {data.commune}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-road-map-line" style={styles.icon} /> Adresse:{" "}
                                {data.adresse}
                            </li>
                        </ul>
                    </CallOut>
                </div>
                <h2 style={{ marginTop: "20px" }}>Détails des individus du logement</h2>
                <div style={styles.detailsContainer}>
                    <CallOut title="Individu 1" style={styles.calloutDetails}>
                        <ul style={styles.ul}>
                            <li style={styles.li}>
                                <i className="ri-user-line" style={styles.icon} /> Noi: {details1.noi}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-user-smile-line" style={styles.icon} /> Prénom:{" "}
                                {details1.prenom}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-user-line" style={styles.icon} /> Sexe: {details1.sexe}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-calendar-line" style={styles.icon} /> Naissance:{" "}
                                {details1.naissance}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-briefcase-line" style={styles.icon} /> Etat QI Empl:{" "}
                                {details1.etatQIEmpl}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-bank-line" style={styles.icon} /> Etab. employeur:{" "}
                                {details1.etabEmployeur}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-list-unordered" style={styles.icon} /> Nb Professions
                                PCS: {details1.nbProfessionsPCS}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-list-unordered" style={styles.icon} /> Nb Activités:{" "}
                                {details1.nbActivites}
                            </li>
                        </ul>
                    </CallOut>
                    <CallOut title="Individu 2" style={styles.calloutDetails}>
                        <ul style={styles.ul}>
                            <li style={styles.li}>
                                <i className="ri-user-line" style={styles.icon} /> Noi: {details2.noi}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-user-smile-line" style={styles.icon} /> Prénom:{" "}
                                {details2.prenom}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-user-line" style={styles.icon} /> Sexe: {details2.sexe}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-calendar-line" style={styles.icon} /> Naissance:{" "}
                                {details2.naissance}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-briefcase-line" style={styles.icon} /> Etat QI Empl:{" "}
                                {details2.etatQIEmpl}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-bank-line" style={styles.icon} /> Etab. employeur:{" "}
                                {details2.etabEmployeur}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-list-unordered" style={styles.icon} /> Nb Professions
                                PCS: {details2.nbProfessionsPCS}
                            </li>
                            <li style={styles.li}>
                                <i className="ri-list-unordered" style={styles.icon} /> Nb Activités:{" "}
                                {details2.nbActivites}
                            </li>
                        </ul>
                    </CallOut>
                </div>
            </div>
        );
    }
});
