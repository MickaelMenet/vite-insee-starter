import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import { styles } from "./styles";

type PersonDetailsProps = {
    details: {
        noi: string;
        prenom: string;
        sexe: string;
        naissance: string;
        etatQIEmpl: string;
        etabEmployeur: string;
        nbProfessionsPCS: string;
        nbActivites: string;
    };
    title: string;
};

const PersonDetails = ({ details, title }: PersonDetailsProps) => (
    <CallOut title={title} style={styles.calloutDetails}>
        <ul style={styles.ul}>
            <li style={styles.li}>
                <i className="ri-user-line" style={styles.icon} /> Noi: {details.noi}
            </li>
            <li style={styles.li}>
                <i className="ri-user-smile-line" style={styles.icon} /> Prénom: {details.prenom}
            </li>
            <li style={styles.li}>
                <i className="ri-user-line" style={styles.icon} /> Sexe: {details.sexe}
            </li>
            <li style={styles.li}>
                <i className="ri-calendar-line" style={styles.icon} /> Naissance: {details.naissance}
            </li>
            <li style={styles.li}>
                <i className="ri-briefcase-line" style={styles.icon} /> Etat QI Empl:{" "}
                {details.etatQIEmpl}
            </li>
            <li style={styles.li}>
                <i className="ri-bank-line" style={styles.icon} /> Etab. employeur:{" "}
                {details.etabEmployeur}
            </li>
            <li style={styles.li}>
                <i className="ri-list-unordered" style={styles.icon} /> Nb Professions PCS:{" "}
                {details.nbProfessionsPCS}
            </li>
            <li style={styles.li}>
                <i className="ri-list-unordered" style={styles.icon} /> Nb Activités:{" "}
                {details.nbActivites}
            </li>
        </ul>
    </CallOut>
);

export default PersonDetails;
