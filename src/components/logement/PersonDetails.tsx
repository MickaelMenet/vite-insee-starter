import React, { memo } from "react";
import { Card, CardContent, Typography, Box, Grid, useTheme } from "@mui/material";
import { Person, Wc, Cake, Assignment, Business, Work, LocalActivity } from "@mui/icons-material";
import { styles } from "./styles";

const InfoRow = memo(
    ({
        icon: Icon,
        label,
        value,
        color
    }: {
        icon: React.ElementType;
        label: string;
        value: string;
        color: string;
    }) => (
        <Box display="flex" alignItems="center" style={styles.infoRow} p={0.5}>
            <Icon style={{ ...styles.infoRowIcon, color }} />
            <Typography variant="body2" style={{ ...styles.infoRowLabel, color }}>
                {label}:
            </Typography>
            <Typography variant="body2" style={{ ...styles.infoRowValue, color }}>
                {value}
            </Typography>
        </Box>
    )
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
    onClick: () => void;
};

const PersonDetails = ({ details, title, onClick }: PersonDetailsProps) => {
    const muiTheme = useTheme();
    const textColor =
        muiTheme.palette.mode === "dark" ? muiTheme.palette.common.black : muiTheme.palette.text.primary;

    return (
        <Grid item>
            <Card
                style={{ ...styles.card, flexDirection: "row", position: "relative" }}
                onMouseEnter={e =>
                    ((e.currentTarget.querySelector(".bg-circle") as HTMLDivElement).style.transform =
                        "scale(10)")
                }
                onMouseLeave={e =>
                    ((e.currentTarget.querySelector(".bg-circle") as HTMLDivElement).style.transform =
                        "scale(1)")
                }
                onClick={onClick}
            >
                <Box
                    className="bg-circle"
                    style={{ ...styles.bgCircle, transition: "transform 0.3s ease-in-out" }}
                ></Box>
                <CardContent style={styles.cardContent}>
                    <Typography
                        variant="h6"
                        component="div"
                        style={{ marginBottom: "8px", fontSize: "16px", color: textColor }}
                    >
                        {title}
                    </Typography>
                    <InfoRow icon={Person} label="Noi" value={details.noi} color={textColor} />
                    <InfoRow icon={Person} label="Prénom" value={details.prenom} color={textColor} />
                    <InfoRow icon={Wc} label="Sexe" value={details.sexe} color={textColor} />
                    <InfoRow icon={Cake} label="Naissance" value={details.naissance} color={textColor} />
                    <InfoRow
                        icon={Assignment}
                        label="Etat QI Empl"
                        value={details.etatQIEmpl}
                        color={textColor}
                    />
                    <InfoRow
                        icon={Business}
                        label="Etab. employeur"
                        value={details.etabEmployeur}
                        color={textColor}
                    />
                    <InfoRow
                        icon={Work}
                        label="Nb Professions PCS"
                        value={details.nbProfessionsPCS}
                        color={textColor}
                    />
                    <InfoRow
                        icon={LocalActivity}
                        label="Nb Activités"
                        value={details.nbActivites}
                        color={textColor}
                    />
                </CardContent>
            </Card>
        </Grid>
    );
};

export default PersonDetails;
