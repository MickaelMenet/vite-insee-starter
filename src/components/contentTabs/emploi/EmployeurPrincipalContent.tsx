import { useState } from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";

export default function EmployeurPrincipalContent() {
    const [editable, setEditable] = useState(false);

    const handleEdit = () => {
        setEditable(!editable);
    };

    return (
        <Box>
            <Typography mb={4} variant="h6" gutterBottom>
                Employeur Principal
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Libellé d'activité"
                        defaultValue="RESTAURANT"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Libellé profession principale"
                        defaultValue="Serveur de restaurant"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Précision (si flou)"
                        defaultValue=""
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Statut"
                        defaultValue="Salarié"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nature employeur"
                        defaultValue="Entreprise privée ou association"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Pays étranger"
                        defaultValue=""
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Région étranger"
                        defaultValue=""
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Commune étranger"
                        defaultValue=""
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="France"
                        defaultValue="Oui"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Déclaré"
                        defaultValue=""
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nom/Raison sociale"
                        defaultValue="LA SECONDA STORIA"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Adresse"
                        defaultValue="150 AV JOSEPH KESSEL"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Dep/Commune"
                        defaultValue="78/VOISINS-LE-BRETONNEUX"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Siret"
                        defaultValue=""
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Données identification SIRENE"
                        defaultValue=""
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nom/Raison sociale"
                        defaultValue="LA SECONDA STORIA"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Adresse"
                        defaultValue="150 AV JOSEPH KESSEL"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Dep/Commune"
                        defaultValue="78/VOISINS-LE-BRETONNEUX"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
            </Grid>
            <Box mt={2}>
                <Button variant="contained" onClick={handleEdit}>
                    {editable ? "Sauvegarder" : "Éditer"}
                </Button>
            </Box>
        </Box>
    );
}
