import React, { useState, SetStateAction, Dispatch } from "react";
import { Grid, Button, Box } from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import CommentIcon from "@mui/icons-material/Comment";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CommentsModal from "./CommentsModal";
import VariablesModal from "./VariablesModal";
import GestionnairesCommentModal from "./modals/GestionnairesCommentModal";
import EnqueteurRemarksModal from "./modals/EnqueteurRemarksModal";
import { SelectChangeEvent } from "@mui/material";

const commentsList = [
    "problème d'adressage (pas d'adresse, adresse pas assez précise, case du numéro de voie remplie avec un complément d'adresse...)",
    "aucune information sur l’employeur",
    "confusion activité/raison sociale",
    "préciser l'établissement où l'activité est réellement exercée",
    "absence de raison sociale pour un établissement situé à l’étranger",
    "fautes de frappe ou d’orthographe",
    "erreur dans le choix de la commune et/ou du département",
    "incohérence des informations collectées",
    "problème de raison sociale (absence, information insuffisante = à son compte, en nom propre...)",
    "La profession n’est pas compatible avec le travail pour un particulier employeur",
    "éviter les sigles ou les abréviations",
    "commentaire libre"
];

const buttonStyle = {
    borderRadius: "40px",
    height: "50px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)"
    }
};

const toggleModal = (setter: Dispatch<SetStateAction<boolean>>) => () => setter(prev => !prev);

const ActionButtons: React.FC = () => {
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [variablesOpen, setVariablesOpen] = useState(false);
    const [gestionnairesCommentOpen, setGestionnairesCommentOpen] = useState(false);
    const [enqueteurRemarksOpen, setEnqueteurRemarksOpen] = useState(false);
    const [selectedComment, setSelectedComment] = useState("");
    const [customComment, setCustomComment] = useState("");

    const handleCommentChange = (event: SelectChangeEvent<string>) =>
        setSelectedComment(event.target.value);

    const handleCustomCommentChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setCustomComment(event.target.value);

    const handleSave = () => {
        console.log("Selected Comment:", selectedComment);
        if (selectedComment === "commentaire libre") {
            console.log("Custom Comment:", customComment);
        }
        setCommentsOpen(false);
    };

    const handleGestionnairesCommentSave = (comment: string) => {
        console.log("Gestionnaire Comment:", comment);
    };

    return (
        <Box display="flex" justifyContent="center" marginTop="30px">
            <Grid container spacing={3} sx={{ maxWidth: "100%", padding: "0 5px" }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="contained"
                        color="info"
                        sx={buttonStyle}
                        startIcon={<NotesIcon />}
                        onClick={toggleModal(setEnqueteurRemarksOpen)}
                    >
                        Remarques
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="contained"
                        color="info"
                        sx={buttonStyle}
                        startIcon={<CommentIcon />}
                        onClick={toggleModal(setCommentsOpen)}
                    >
                        Commentaires
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="contained"
                        color="info"
                        sx={buttonStyle}
                        startIcon={<CommentIcon />}
                        onClick={toggleModal(setVariablesOpen)}
                    >
                        Variables
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="contained"
                        color="info"
                        sx={buttonStyle}
                        startIcon={<AdminPanelSettingsIcon />}
                        onClick={toggleModal(setGestionnairesCommentOpen)}
                    >
                        Commentaires Gestionnaires
                    </Button>
                </Grid>
            </Grid>

            <CommentsModal
                open={commentsOpen}
                handleClose={toggleModal(setCommentsOpen)}
                selectedComment={selectedComment}
                handleCommentChange={handleCommentChange}
                customComment={customComment}
                handleCustomCommentChange={handleCustomCommentChange}
                handleSave={handleSave}
                commentsList={commentsList}
            />
            <VariablesModal open={variablesOpen} handleClose={toggleModal(setVariablesOpen)} />
            <GestionnairesCommentModal
                open={gestionnairesCommentOpen}
                handleClose={toggleModal(setGestionnairesCommentOpen)}
                handleSave={handleGestionnairesCommentSave}
            />
            <EnqueteurRemarksModal
                open={enqueteurRemarksOpen}
                handleClose={toggleModal(setEnqueteurRemarksOpen)}
            />
        </Box>
    );
};

export default ActionButtons;
