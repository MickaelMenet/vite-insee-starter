import { useState, SyntheticEvent, ReactNode } from "react";
import { Tabs, Tab, Box } from "@mui/material";

import FormationRecenteContent from "./formation/FormationRecenteContent";
import NouveauDiplomeContent from "./formation/NouveauDiplomeContent";
import PlusHautDiplomeContent from "./formation/PlusHautDiplomeContent";
import SpecialiteEuropeenneContent from "./formation/SpecialiteEuropeenneContent";

interface TabPanelProps {
    children?: ReactNode;
    value: number;
    index: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
    if (value !== index) {
        return null;
    }

    return (
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{ width: "100%" }}
        >
            <Box p={3} sx={{ width: "100%", mt: 2 }}>
                {children}
            </Box>
        </div>
    );
};

const tabDetails = [
    { label: "Formation suivie récemment", content: FormationRecenteContent },
    { label: "Nouveau diplôme", content: NouveauDiplomeContent },
    { label: "Plus haut diplôme", content: PlusHautDiplomeContent },
    { label: "Spécialité européenne du diplôme", content: SpecialiteEuropeenneContent }
];

const SimpleTabs = () => {
    const [mainTab, setMainTab] = useState(0);

    const handleMainChange = (_event: SyntheticEvent, newValue: number) => {
        setMainTab(newValue);
    };

    return (
        <Box sx={{ width: "100%", marginTop: "50px" }}>
            <Tabs value={mainTab} onChange={handleMainChange} aria-label="main tabs">
                {tabDetails.map((tab, index) => (
                    <Tab key={index} label={tab.label} />
                ))}
            </Tabs>
            {tabDetails.map((tab, index) => {
                const ContentComponent = tab.content;
                return (
                    <TabPanel key={index} value={mainTab} index={index}>
                        <ContentComponent />
                    </TabPanel>
                );
            })}
        </Box>
    );
};

export default SimpleTabs;
