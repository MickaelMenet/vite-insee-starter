import { useState, useCallback } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import CustomTextField from "./CustomTextField";
import { v4 as uuidv4 } from "uuid";

interface Field {
    label: string;
    defaultValue: string;
}

interface FormSectionProps {
    title: string;
    fields: Field[];
}

const FormSection: React.FC<FormSectionProps> = ({ title, fields }) => {
    const [editable, setEditable] = useState(false);

    const handleEdit = useCallback(() => {
        setEditable(prevEditable => !prevEditable);
    }, []);

    return (
        <Box sx={{ padding: 2, marginBottom: 4 }}>
            <Typography color="primary" mb={4} variant="h6" gutterBottom>
                {title}
            </Typography>
            <Grid container spacing={2}>
                {fields.map(field => (
                    <Grid item xs={12} sm={6} key={uuidv4()}>
                        <CustomTextField
                            label={field.label}
                            defaultValue={field.defaultValue}
                            editable={editable}
                        />
                    </Grid>
                ))}
            </Grid>
            <Box mt={2}>
                <Button
                    variant="contained"
                    onClick={handleEdit}
                    aria-label={editable ? "Sauvegarder" : "Éditer"}
                >
                    {editable ? "Sauvegarder" : "Éditer"}
                </Button>
            </Box>
        </Box>
    );
};

export default FormSection;
