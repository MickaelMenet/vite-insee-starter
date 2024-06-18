import { createFileRoute, useMatch } from "@tanstack/react-router";
import { details1, details2, logementData } from "../../../../../../components/logement/data";
import { Card, CardContent, Typography, Grid, Container, Box } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import BadgeIcon from "@mui/icons-material/Badge";

const findPersonDetails = (noi: string) => {
    const allDetails = [details1, details2];
    return allDetails.find(details => details.noi === noi);
};

const CardDetails = ({ label, value, icon }: { label: string; value: string; icon: JSX.Element }) => (
    <Grid item xs={12} sm={6} md={4}>
        <Box display="flex" alignItems="center">
            {icon}
            <Box ml={1}>
                <Typography variant="body1">
                    <strong>{label}:</strong> {value}
                </Typography>
            </Box>
        </Box>
    </Grid>
);

const PersonDetailsCard = ({ details, logementData }: { details: any; logementData: any }) => {
    return (
        <Container style={{ marginTop: "20px" }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Détails de l'individu {details.noi}
                    </Typography>
                    <Grid container spacing={2}>
                        <CardDetails label="Trimestre" value="2024T1" icon={<DateRangeIcon />} />
                        <CardDetails label="Régions" value="01 Guadeloupe" icon={<LocationOnIcon />} />
                        <CardDetails label="NOENQ" value={logementData.trimestre} icon={<BadgeIcon />} />
                        <CardDetails
                            label="Logement"
                            value={logementData.logement}
                            icon={<HomeIcon />}
                        />
                        <CardDetails label="DEP" value={logementData.rges} icon={<LocationOnIcon />} />
                        <CardDetails
                            label="Commune"
                            value={logementData.commune}
                            icon={<LocationOnIcon />}
                        />
                        <CardDetails label="Adresse" value={logementData.adresse} icon={<HomeIcon />} />
                        <CardDetails label="Noi" value={details.noi} icon={<BadgeIcon />} />
                        <CardDetails label="Sexe" value={details.sexe} icon={<AccountCircleIcon />} />
                        <CardDetails
                            label="Naissance"
                            value={details.naissance}
                            icon={<DateRangeIcon />}
                        />
                        <CardDetails
                            label="Prénom"
                            value={details.prenom}
                            icon={<AccountCircleIcon />}
                        />
                        <CardDetails
                            label="ETATQIEMPL"
                            value={details.etatQIEmpl}
                            icon={<AccountCircleIcon />}
                        />
                        <CardDetails label="RGA" value={details.etabEmployeur} icon={<BadgeIcon />} />
                        <CardDetails label="RGL" value={details.nbProfessionsPCS} icon={<BadgeIcon />} />
                        <CardDetails label="RGM" value={details.nbActivites} icon={<BadgeIcon />} />
                        <CardDetails label="RGI" value={details.nbActivites} icon={<BadgeIcon />} />
                        <CardDetails label="Semaine Réf" value="0" icon={<DateRangeIcon />} />
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export const Route = createFileRoute("/$enquete/emploi/codeur/logement/$logementDetails/$noi")({
    component: () => {
        const match = useMatch("/$enquete/emploi/codeur/logement/$logementDetails/$noi");
        const { noi } = match.params as { noi: string };
        const personDetails = findPersonDetails(noi);

        if (!personDetails) {
            return <div>Personne non trouvée</div>;
        }

        return <PersonDetailsCard details={personDetails} logementData={logementData} />;
    }
});
