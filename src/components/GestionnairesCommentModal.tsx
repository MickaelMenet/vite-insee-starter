import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

interface GestionnairesCommentModalProps {
    open: boolean;
    handleClose: () => void;
    handleSave: (comment: string) => void;
}

const GestionnairesCommentModal: React.FC<GestionnairesCommentModalProps> = ({
    open,
    handleClose,
    handleSave
}) => {
    const [comment, setComment] = useState("");

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

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value);
    };

    const handleSaveClick = () => {
        handleSave(comment);
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="gestionnaires-comment-modal-title"
            aria-describedby="gestionnaires-comment-modal-description"
        >
            <Box sx={boxStyle}>
                <Typography id="gestionnaires-comment-modal-title" variant="h6" component="h2">
                    Commentaire Gestionnaire
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    label="Saisissez votre commentaire"
                    value={comment}
                    onChange={handleCommentChange}
                    sx={{ mt: 2 }}
                />
                <Box display="flex" justifyContent="flex-end" marginTop="20px">
                    <Button variant="contained" onClick={handleClose} sx={{ mr: 2 }}>
                        Annuler
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleSaveClick}>
                        Enregistrer
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default GestionnairesCommentModal;
