import React from "react";
import {
    Modal,
    Box,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

interface VariablesModalProps {
    open: boolean;
    handleClose: () => void;
}

interface VariableData {
    name: string;
    description: string;
}

const variablesData: VariableData[] = [
    { name: "Variable 1", description: "Description 1" },
    { name: "Variable 2", description: "Description 2" },
    { name: "Variable 3", description: "Description 3" },
    { name: "Variable 4", description: "Description 4" },
    { name: "Variable 5", description: "Description 5" },
    { name: "Variable 6", description: "Description 6" }
];

const boxStyle = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};

const headerStyle = {
    fontWeight: "bold",
    backgroundColor: "#e0f7fa",
    padding: "8px 0",
    border: "1px solid #ccc"
};

const cellStyle = {
    padding: "8px",
    border: "1px solid #ccc"
};

const VariablesModal: React.FC<VariablesModalProps> = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="variables-modal-title"
            aria-describedby="variables-modal-description"
        >
            <Box sx={boxStyle}>
                <Typography id="variables-modal-title" variant="h6" component="h2">
                    Variables
                </Typography>
                <TableContainer sx={{ mt: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={headerStyle}>
                                    Variable
                                </TableCell>
                                <TableCell align="center" sx={headerStyle}>
                                    Description
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {variablesData.map((variable, index) => (
                                <TableRow key={index}>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            ...cellStyle,
                                            backgroundColor: index % 2 === 0 ? "#f1f8fb" : "#ffffff"
                                        }}
                                    >
                                        {variable.name}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            ...cellStyle,
                                            backgroundColor: index % 2 === 0 ? "#f1f8fb" : "#ffffff"
                                        }}
                                    >
                                        {variable.description}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display="flex" justifyContent="flex-end" marginTop="20px">
                    <Button variant="contained" onClick={handleClose}>
                        Fermer
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default VariablesModal;
