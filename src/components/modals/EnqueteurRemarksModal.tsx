import React from "react";
import { Modal, Box, Typography, Grid, Button } from "@mui/material";

interface EnqueteurRemarksModalProps {
    open: boolean;
    handleClose: () => void;
}

const EnqueteurRemarksModal: React.FC<EnqueteurRemarksModalProps> = ({ open, handleClose }) => {
    const data = [
        ["Variable 1", "Remarque 1"],
        ["Variable 2", "Remarque 2"],
        ["Variable 3", "Remarque 3"],
        ["Variable 4", "Remarque 4"],
        ["Variable 5", "Remarque 5"],
        ["Variable 6", "Remarque 6"]
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
            aria-labelledby="enqueteur-remarks-modal-title"
            aria-describedby="enqueteur-remarks-modal-description"
        >
            <Box sx={boxStyle}>
                <Typography id="enqueteur-remarks-modal-title" variant="h6" component="h2">
                    Variables et Remarques Enquêteur
                </Typography>
                <Grid container spacing={0} sx={{ mt: 2 }}>
                    <Grid item xs={6} sx={headerStyle}>
                        <Typography align="center">Variable</Typography>
                    </Grid>
                    <Grid item xs={6} sx={headerStyle}>
                        <Typography align="center">Remarque Enquêteur</Typography>
                    </Grid>
                    {data.map((row, index) => (
                        <React.Fragment key={index}>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    ...cellStyle,
                                    backgroundColor: index % 2 === 0 ? "#f1f8fb" : "#ffffff"
                                }}
                            >
                                <Typography align="center">{row[0]}</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    ...cellStyle,
                                    backgroundColor: index % 2 === 0 ? "#f1f8fb" : "#ffffff"
                                }}
                            >
                                <Typography align="center">{row[1]}</Typography>
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

export default EnqueteurRemarksModal;
