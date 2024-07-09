import { Card, CardContent, Typography, Grid, Container, Box } from "@mui/material";
import {
    DateRange as DateRangeIcon,
    LocationOn as LocationOnIcon,
    AccountCircle as AccountCircleIcon,
    Home as HomeIcon,
    Badge as BadgeIcon
} from "@mui/icons-material";

const CardDetails = ({ label, value, icon }: { label: string; value: string; icon: JSX.Element }) => (
    <Grid item xs={12} sm={6} md={4}>
        <Box display="flex" alignItems="center">
            {icon}
            <Box ml={1}>
                <Typography variant="body2">
                    <strong>{label}:</strong> {value}
                </Typography>
            </Box>
        </Box>
    </Grid>
);

type PersonDetails = {
    noi: string;
    sexe: string;
    naissance: string;
    prenom: string;
    etatQIEmpl: string;
    etabEmployeur: string;
    nbProfessionsPCS: string;
    nbActivites: string;
};

const detailsConfig = (details: PersonDetails, logementData: any) => [
    { label: "Trimestre", value: "2024T1", icon: <DateRangeIcon fontSize="small" /> },
    { label: "Régions", value: "01 Guadeloupe", icon: <LocationOnIcon fontSize="small" /> },
    { label: "NOENQ", value: logementData.noenq, icon: <BadgeIcon fontSize="small" /> },
    { label: "Logement", value: logementData.type, icon: <HomeIcon fontSize="small" /> },
    { label: "DEP", value: logementData.dep, icon: <LocationOnIcon fontSize="small" /> },
    { label: "Commune", value: logementData.commune, icon: <LocationOnIcon fontSize="small" /> },
    { label: "Adresse", value: logementData.address, icon: <HomeIcon fontSize="small" /> },
    { label: "Noi", value: details.noi, icon: <BadgeIcon fontSize="small" /> },
    { label: "Sexe", value: details.sexe, icon: <AccountCircleIcon fontSize="small" /> },
    { label: "Naissance", value: details.naissance, icon: <DateRangeIcon fontSize="small" /> },
    { label: "Prénom", value: details.prenom, icon: <AccountCircleIcon fontSize="small" /> },
    { label: "ETATQIEMPL", value: details.etatQIEmpl, icon: <AccountCircleIcon fontSize="small" /> },
    { label: "RGA", value: details.etabEmployeur, icon: <BadgeIcon fontSize="small" /> },
    { label: "RGL", value: details.nbProfessionsPCS, icon: <BadgeIcon fontSize="small" /> },
    { label: "RGM", value: details.nbActivites, icon: <BadgeIcon fontSize="small" /> },
    { label: "RGI", value: details.nbActivites, icon: <BadgeIcon fontSize="small" /> },
    { label: "Semaine Réf", value: "0", icon: <DateRangeIcon fontSize="small" /> }
];

const PersonDetailsCard = ({ details, logementData }: { details: PersonDetails; logementData: any }) => {
    return (
        <Container sx={{ marginTop: "20px", maxWidth: "100%" }}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent sx={{ border: 3, borderColor: "#000091", borderRadius: 2, p: 2 }}>
                    <Typography color="primary" mb={2} variant="h6" component="div" gutterBottom>
                        Détails de l'individu {details.noi}
                    </Typography>
                    <Grid container spacing={2}>
                        {detailsConfig(details, logementData).map(({ label, value, icon }) => (
                            <CardDetails key={label} label={label} value={value} icon={icon} />
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PersonDetailsCard;
