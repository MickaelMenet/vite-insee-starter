import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Select,
    MenuItem,
    TextField,
    FormControl,
    InputLabel,
    Button,
    Box
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

type CommentsModalProps = {
    open: boolean;
    handleClose: () => void;
    selectedComment: string;
    handleCommentChange: (event: SelectChangeEvent<string>) => void;
    customComment: string;
    handleCustomCommentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: () => void;
    commentsList: string[];
};

const CommentsModal = ({
    open,
    handleClose,
    selectedComment,
    handleCommentChange,
    customComment,
    handleCustomCommentChange,
    handleSave,
    commentsList
}: CommentsModalProps) => {
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Choisir un commentaire</DialogTitle>
            <DialogContent>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="comment-select-label">Commentaire</InputLabel>
                        <Select
                            labelId="comment-select-label"
                            value={selectedComment}
                            onChange={handleCommentChange}
                            label="Commentaire"
                        >
                            {commentsList.map((comment, index) => (
                                <MenuItem key={index} value={comment}>
                                    {comment}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {selectedComment === "commentaire libre" && (
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Commentaire Libre"
                            multiline
                            rows={4}
                            value={customComment}
                            onChange={handleCustomCommentChange}
                        />
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Annuler
                </Button>
                <Button onClick={handleSave} color="primary">
                    Enregistrer
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CommentsModal;
