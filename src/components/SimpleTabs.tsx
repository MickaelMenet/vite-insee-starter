import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

import FormationRecenteContent from "./contentTabs/formation/FormationRecenteContent";
import NouveauDiplomeContent from "./contentTabs/formation/NouveauDiplomeContent";
import PlusHautDiplomeContent from "./contentTabs/formation/PlusHautDiplomeContent";
import SpecialiteEuropeenneContent from "./contentTabs/formation/SpecialiteEuropeenneContent";

const TabPanel = (props: { [x: string]: any; children: any; value: any; index: any }) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} sx={{ width: "100%", mt: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const SimpleTabs = () => {
    const [mainTab, setMainTab] = useState(0);

    const handleMainChange = (_event: React.SyntheticEvent, newValue: number) => {
        setMainTab(newValue);
    };

    return (
        <Box sx={{ width: "100%", marginTop: "50px" }}>
            <Tabs value={mainTab} onChange={handleMainChange} aria-label="maintabs">
                <Tab label="Formation suivie récemment" />
                <Tab label="Nouveau diplôme" />
                <Tab label="Plus haut diplôme" />
                <Tab label="Spécialité européenne du diplôme" />
            </Tabs>
            <TabPanel value={mainTab} index={0}>
                <FormationRecenteContent />
            </TabPanel>
            <TabPanel value={mainTab} index={1}>
                <NouveauDiplomeContent />
            </TabPanel>
            <TabPanel value={mainTab} index={2}>
                <PlusHautDiplomeContent />
            </TabPanel>
            <TabPanel value={mainTab} index={3}>
                <SpecialiteEuropeenneContent />
            </TabPanel>
        </Box>
    );
};

export default SimpleTabs;
