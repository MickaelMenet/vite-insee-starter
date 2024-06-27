import React from "react";
import { Modal, Box, Typography, Grid, Button } from "@mui/material";

interface VariablesModalProps {
    open: boolean;
    handleClose: () => void;
}

const VariablesModal: React.FC<VariablesModalProps> = ({ open, handleClose }) => {
    const variablesData = [
        ["Variable 1", "Description 1"],
        ["Variable 2", "Description 2"],
        ["Variable 3", "Description 3"],
        ["Variable 4", "Description 4"],
        ["Variable 5", "Description 5"],
        ["Variable 6", "Description 6"]
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
        backgroundColor: "#f1f8fb",
        border: "1px solid #ccc"
    };

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
                <Grid container spacing={0} sx={{ mt: 2 }}>
                    <Grid item xs={6} sx={headerStyle}>
                        <Typography align="center">Variable</Typography>
                    </Grid>
                    <Grid item xs={6} sx={headerStyle}>
                        <Typography align="center">Description</Typography>
                    </Grid>
                    {variablesData.map((variable, index) => (
                        <React.Fragment key={index}>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    ...cellStyle,
                                    backgroundColor: index % 2 === 0 ? "#f1f8fb" : "#ffffff"
                                }}
                            >
                                <Typography align="center">{variable[0]}</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    ...cellStyle,
                                    backgroundColor: index % 2 === 0 ? "#f1f8fb" : "#ffffff"
                                }}
                            >
                                <Typography align="center">{variable[1]}</Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
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
