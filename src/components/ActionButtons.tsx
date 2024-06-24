import { Grid, Button, Box } from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import CommentIcon from "@mui/icons-material/Comment";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const ActionButtons = () => {
    const buttonStyle = {
        borderRadius: "10px",
        height: "40px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 10px"
    };

    return (
        <Box display="flex" justifyContent="center" marginTop="30px">
            <Grid container spacing={3} sx={{ maxWidth: "100%" }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={buttonStyle}
                        startIcon={<NotesIcon />}
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
                    >
                        Commentaires
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="contained"
                        color="success"
                        sx={buttonStyle}
                        startIcon={<CommentIcon />}
                    >
                        Variables
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="contained"
                        color="warning"
                        sx={buttonStyle}
                        startIcon={<AdminPanelSettingsIcon />}
                    >
                        Commentaires Gestionnaires
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ActionButtons;
