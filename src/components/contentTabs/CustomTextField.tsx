import { TextField } from "@mui/material";

interface CustomTextFieldProps {
    label: string;
    defaultValue: string;
    editable: boolean;
}

const CustomTextField = ({ label, defaultValue, editable }: CustomTextFieldProps) => (
    <TextField
        fullWidth
        label={label}
        defaultValue={defaultValue}
        variant="outlined"
        InputProps={{
            readOnly: !editable
        }}
    />
);

export default CustomTextField;
