import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import SearchLevel from "components/SeachLevel";
import SearchDiploma from "components/SearchDiploma";
import HelpModal from "components/HelpModal";
import Button from "@mui/material/Button";

export const Route = createFileRoute("/fab")({
    component: () => {
        const [open, setOpen] = useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <>
                <Button style={{ marginBottom: "20px" }} variant="outlined" onClick={handleOpen}>
                    Afficher l'aide
                </Button>
                <HelpModal open={open} handleClose={handleClose} />
                <SearchDiploma />
                <SearchLevel />
            </>
        );
    }
});
