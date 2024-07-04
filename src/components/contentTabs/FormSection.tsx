import { useState } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import CustomTextField from "./CustomTextField";
interface FormSectionProps {
    title: string;
    fields: any[];
}

const FormSection: React.FC<FormSectionProps> = ({ title, fields }) => {
    const [editable, setEditable] = useState(false);

    const handleEdit = () => {
        setEditable(!editable);
    };

    return (
        <Box>
            <Typography color="primary" mb={4} variant="h6" gutterBottom>
                {title}
            </Typography>
            <Grid container spacing={2}>
                {fields.map((field, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <CustomTextField
                            label={field.label}
                            defaultValue={field.defaultValue}
                            editable={editable}
                        />
                    </Grid>
                ))}
            </Grid>
            <Box mt={2}>
                <Button variant="contained" onClick={handleEdit}>
                    {editable ? "Sauvegarder" : "Éditer"}
                </Button>
            </Box>
        </Box>
    );
};

export default FormSection;
