import { useState } from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";

export default function FormationRecenteContent() {
    const [editable, setEditable] = useState(false);

    const handleEdit = () => {
        setEditable(!editable);
    };

    return (
        <Box>
            <Typography color="primary" mb={4} variant="h6" gutterBottom>
                Formation Suivie Récemment
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Type de formation"
                        defaultValue="Type de formation exemple"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Établissement"
                        defaultValue="Établissement exemple"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Études en alternance"
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
                        label="Études en cours"
                        defaultValue="Non"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Formation suivie"
                        defaultValue="Formation suivie exemple"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Type de saisie du diplôme"
                        defaultValue="Automatique"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Niveau du diplôme préparé"
                        defaultValue="Niveau de diplôme préparé exemple"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Mode codage"
                        defaultValue="Mode de codage exemple"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Validation"
                        defaultValue="Validé"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Code"
                        defaultValue="Code exemple"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Modalité nomenclature"
                        defaultValue="Modalité nomenclature exemple"
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
