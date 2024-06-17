import { CallOut } from "@codegouvfr/react-dsfr/CallOut";
import { styles } from "./styles";

type LogementDetailsProps = {
    data: {
        logement: string;
        trimestre: string;
        rges: string;
        noenq: string;
        dep: string;
        commune: string;
        adresse: string;
    };
};

const LogementDetails = ({ data }: LogementDetailsProps) => (
    <CallOut title={`Informations sur le logement ${data.logement}`}>
        <ul style={styles.ul}>
            <li style={styles.li}>
                <i className="ri-home-line" style={styles.icon} /> Logement: {data.logement}
            </li>
            <li style={styles.li}>
                <i className="ri-calendar-line" style={styles.icon} /> Trimestre: {data.trimestre}
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
                <i className="ri-building-line" style={styles.icon} /> Commune: {data.commune}
            </li>
            <li style={styles.li}>
                <i className="ri-road-map-line" style={styles.icon} /> Adresse: {data.adresse}
            </li>
        </ul>
    </CallOut>
);

export default LogementDetails;
