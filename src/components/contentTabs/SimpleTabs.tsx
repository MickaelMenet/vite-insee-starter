import { useState, memo, SyntheticEvent, ReactNode } from "react";
import { Tabs, Tab, Box } from "@mui/material";

import FormationRecenteContent from "./formation/FormationRecenteContent";
import NouveauDiplomeContent from "./formation/NouveauDiplomeContent";
import PlusHautDiplomeContent from "./formation/PlusHautDiplomeContent";
import SpecialiteEuropeenneContent from "./formation/SpecialiteEuropeenneContent";

interface TabPanelProps {
    children: ReactNode;
    value: number;
    index: number;
    other?: any;
}

const TabPanel = memo(({ children, value, index, ...other }: TabPanelProps) => (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
    >
        {value === index && (
            <Box p={3} sx={{ width: "100%", mt: 2 }}>
                {children}
            </Box>
        )}
    </div>
));

const tabDetails = [
    { label: "Formation suivie récemment", content: <FormationRecenteContent /> },
    { label: "Nouveau diplôme", content: <NouveauDiplomeContent /> },
    { label: "Plus haut diplôme", content: <PlusHautDiplomeContent /> },
    { label: "Spécialité européenne du diplôme", content: <SpecialiteEuropeenneContent /> }
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
            {tabDetails.map((tab, index) => (
                <TabPanel key={index} value={mainTab} index={index}>
                    {tab.content}
                </TabPanel>
            ))}
        </Box>
    );
};

export default SimpleTabs;
