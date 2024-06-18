import { useState } from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";

export default function ActiviteSecondaireContent() {
    const [editable, setEditable] = useState(false);

    const handleEdit = () => {
        setEditable(!editable);
    };

    return (
        <Box>
            <Typography color="primary" mb={4} variant="h6" gutterBottom>
                Activité secondaire
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Libellé d'activité"
                        defaultValue="Construction"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Statut (var. collectée)"
                        defaultValue="Indépendant"
                        variant="outlined"
                        InputProps={{
                            readOnly: !editable
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="NAF2"
                        defaultValue="41"
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
                        label="Libellé profession"
                        defaultValue="Maçon"
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
                        defaultValue="532a"
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
                        label="Code PCS"
                        defaultValue="1220"
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
                        defaultValue="Maçons"
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
