import { useState } from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";

export default function ProfessionPrincipaleContent() {
    const [editable, setEditable] = useState(false);

    const handleEdit = () => {
        setEditable(!editable);
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Détails de la Profession Principale
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
                        label="NAF 5"
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
                        label="NAF 2"
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
                        label="Supervision"
                        defaultValue="non"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Libellé profession"
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
                        label="Codage PCS"
                        defaultValue="Codé en batch"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Validation PCS"
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
                        label="Code PCS"
                        defaultValue="56A1"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nomenclature PCS"
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
                        label="Codage ISCO"
                        defaultValue="Codé en batch"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Validation ISCO"
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
                        label="Code ISCO"
                        defaultValue="5131"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nomenclature ISCO"
                        defaultValue="Serveurs"
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
