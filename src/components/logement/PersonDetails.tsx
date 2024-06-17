import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { Person, Wc, Cake, Assignment, Business, Work, LocalActivity } from "@mui/icons-material";
import { styles } from "./styles";

const InfoRow = ({
    icon: Icon,
    label,
    value
}: {
    icon: React.ElementType;
    label: string;
    value: string;
}) => (
    <Box display="flex" alignItems="center" style={styles.infoRow} p={0.5}>
        <Icon style={styles.infoRowIcon} />
        <Typography variant="body2" style={styles.infoRowLabel}>
            {label}:
        </Typography>
        <Typography variant="body2" style={styles.infoRowValue}>
            {value}
        </Typography>
    </Box>
);

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

const PersonDetails = ({ details, title }: PersonDetailsProps) => {
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const bgCircle = e.currentTarget.querySelector(".bg-circle") as HTMLDivElement;
        if (bgCircle) {
            bgCircle.style.transform = "scale(10)";
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const bgCircle = e.currentTarget.querySelector(".bg-circle") as HTMLDivElement;
        if (bgCircle) {
            bgCircle.style.transform = "scale(1)";
        }
    };

    return (
        <Grid item>
            <Card
                style={styles.card as React.CSSProperties}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="bg-circle" style={styles.bgCircle}></div>
                <CardContent style={styles.cardContent}>
                    <Typography
                        variant="h6"
                        component="div"
                        style={{ marginBottom: "8px", fontSize: "16px" }}
                    >
                        {title}
                    </Typography>
                    <InfoRow icon={Person} label="Noi" value={details.noi} />
                    <InfoRow icon={Person} label="Prénom" value={details.prenom} />
                    <InfoRow icon={Wc} label="Sexe" value={details.sexe} />
                    <InfoRow icon={Cake} label="Naissance" value={details.naissance} />
                    <InfoRow icon={Assignment} label="Etat QI Empl" value={details.etatQIEmpl} />
                    <InfoRow icon={Business} label="Etab. employeur" value={details.etabEmployeur} />
                    <InfoRow icon={Work} label="Nb Professions PCS" value={details.nbProfessionsPCS} />
                    <InfoRow icon={LocalActivity} label="Nb Activités" value={details.nbActivites} />
                </CardContent>
            </Card>
        </Grid>
    );
};

export default PersonDetails;
