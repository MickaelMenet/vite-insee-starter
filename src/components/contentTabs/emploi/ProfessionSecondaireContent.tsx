import { useState } from "react";
import { Typography, Box, Grid, TextField, Button } from "@mui/material";

export default function ProfessionSecondaireContent() {
    const [editable, setEditable] = useState(false);

    const handleEdit = () => {
        setEditable(!editable);
    };

    return (
        <Box>
            <Typography mb={4} variant="h6" gutterBottom>
                Profession secondaire
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Libellé d'activité"
                        defaultValue="Vente"
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
                        label="NAF2"
                        defaultValue="47"
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
                        label="Libellé profession"
                        defaultValue="Vendeur"
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
                        defaultValue="525a"
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
                        defaultValue="1210"
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
                        defaultValue="Vendeurs"
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
