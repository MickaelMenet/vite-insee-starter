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

type InfoItemProps = {
    iconClass: string;
    label: string;
    value: string;
};

const InfoItem = ({ iconClass, label, value }: InfoItemProps) => (
    <li style={styles.li}>
        <i className={iconClass} style={styles.icon} /> {label}: {value}
    </li>
);

const LogementDetails = ({ data }: LogementDetailsProps) => {
    const infoItems = [
        { iconClass: "ri-home-line", label: "Logement", value: data.logement },
        { iconClass: "ri-calendar-line", label: "Trimestre", value: data.trimestre },
        { iconClass: "ri-map-pin-line", label: "Rges", value: data.rges },
        { iconClass: "ri-barcode-line", label: "NOENQ", value: data.noenq },
        { iconClass: "ri-government-line", label: "DEP", value: data.dep },
        { iconClass: "ri-building-line", label: "Commune", value: data.commune },
        { iconClass: "ri-road-map-line", label: "Adresse", value: data.adresse }
    ];

    return (
        <CallOut title={`Informations sur le logement ${data.logement}`}>
            <ul style={styles.ul}>
                {infoItems.map((item, index) => (
                    <InfoItem
                        key={index}
                        iconClass={item.iconClass}
                        label={item.label}
                        value={item.value}
                    />
                ))}
            </ul>
        </CallOut>
    );
};

export default LogementDetails;
