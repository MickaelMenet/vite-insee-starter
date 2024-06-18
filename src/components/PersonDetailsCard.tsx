import { Card, CardContent, Typography, Grid, Container, Box } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import BadgeIcon from "@mui/icons-material/Badge";

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

const PersonDetailsCard = ({ details, logementData }: { details: any; logementData: any }) => {
    return (
        <Container style={{ marginTop: "10px" }}>
            <Card>
                <CardContent
                    style={{ border: "solid 1px #2727A1", borderRadius: "10px", padding: "10px" }}
                >
                    <Typography color="primary" mb={2} variant="h6" component="div" gutterBottom>
                        Détails de l'individu {details.noi}
                    </Typography>
                    <Grid container spacing={1}>
                        <CardDetails
                            label="Trimestre"
                            value="2024T1"
                            icon={<DateRangeIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="Régions"
                            value="01 Guadeloupe"
                            icon={<LocationOnIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="NOENQ"
                            value={logementData.trimestre}
                            icon={<BadgeIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="Logement"
                            value={logementData.logement}
                            icon={<HomeIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="DEP"
                            value={logementData.rges}
                            icon={<LocationOnIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="Commune"
                            value={logementData.commune}
                            icon={<LocationOnIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="Adresse"
                            value={logementData.adresse}
                            icon={<HomeIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="Noi"
                            value={details.noi}
                            icon={<BadgeIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="Sexe"
                            value={details.sexe}
                            icon={<AccountCircleIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="Naissance"
                            value={details.naissance}
                            icon={<DateRangeIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="Prénom"
                            value={details.prenom}
                            icon={<AccountCircleIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="ETATQIEMPL"
                            value={details.etatQIEmpl}
                            icon={<AccountCircleIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="RGA"
                            value={details.etabEmployeur}
                            icon={<BadgeIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="RGL"
                            value={details.nbProfessionsPCS}
                            icon={<BadgeIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="RGM"
                            value={details.nbActivites}
                            icon={<BadgeIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="RGI"
                            value={details.nbActivites}
                            icon={<BadgeIcon fontSize="small" />}
                        />
                        <CardDetails
                            label="Semaine Réf"
                            value="0"
                            icon={<DateRangeIcon fontSize="small" />}
                        />
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PersonDetailsCard;
