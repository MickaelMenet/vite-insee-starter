import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import EmployeurPrincipalContent from "./emploi/EmployeurPrincipalContent";
import ProfessionPrincipaleContent from "./emploi/ProfessionPrincipaleContent";
import ProfessionSecondaireContent from "./emploi/ProfessionSecondaireContent";
import ActiviteSecondaireContent from "./emploi/ActiviteSecondaireContent";
import ProfessionAnterieureContent from "./emploi/ProfessionAnterieureContent";
import ActiviteAnterieureContent from "./emploi/ActiviteAnterieureContent";
import ProfessionPereContent from "./emploi/ProfessionPereContent";
import ProfessionMereContent from "./emploi/ProfessionMereContent";

const commonStyles = {
    width: "100%",
    maxWidth: "1200px",
    margin: "50px auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px"
};

type TabPanelProps = {
    children?: React.ReactNode;
    value: number;
    index: number;
};

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) =>
    value === index ? (
        <Box
            role="tabpanel"
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            p={3}
            sx={{ width: "100%", mt: 2 }}
            {...other}
        >
            {children}
        </Box>
    ) : null;

type SubTabsProps = {
    mainTabValue: number;
    mainTabIndex: number;
    subTabValue: number;
    data: {
        labels: string[];
        contents: React.ComponentType[];
    };
    handleSubChange: (event: React.SyntheticEvent, newValue: number) => void;
};

const SubTabs: React.FC<SubTabsProps> = ({
    mainTabValue,
    mainTabIndex,
    subTabValue,
    data,
    handleSubChange
}) => (
    <TabPanel value={mainTabValue} index={mainTabIndex}>
        <Tabs
            value={subTabValue}
            onChange={handleSubChange}
            aria-label="subtabs"
            variant="scrollable"
            scrollButtons="auto"
        >
            {data.labels.map((label, idx) => (
                <Tab key={idx} label={label} sx={{ "&.Mui-selected": { borderRadius: "8px" } }} />
            ))}
        </Tabs>
        {data.contents.map((Content, idx) => (
            <TabPanel key={idx} value={subTabValue} index={idx}>
                <Content />
            </TabPanel>
        ))}
    </TabPanel>
);

const subTabsData = [
    {
        labels: ["Employeur principal", "Profession principale"],
        contents: [EmployeurPrincipalContent, ProfessionPrincipaleContent]
    },
    {
        labels: ["Profession secondaire", "Activité secondaire"],
        contents: [ProfessionSecondaireContent, ActiviteSecondaireContent]
    },
    {
        labels: ["Profession antérieure", "Activité antérieure"],
        contents: [ProfessionAnterieureContent, ActiviteAnterieureContent]
    },
    {
        labels: [
            "Profession du père",
            "Profession du père 2",
            "Profession de la mère",
            "Profession de la mère 2"
        ],
        contents: [
            ProfessionPereContent,
            ProfessionPereContent,
            ProfessionMereContent,
            ProfessionMereContent
        ]
    }
];

const mainTabLabels = [
    "Employeur principal",
    "Employeur secondaire",
    "Emploi antérieur",
    "Professions des parents"
];

const NestedTabs: React.FC = () => {
    const [mainTab, setMainTab] = useState(0);
    const [subTabIndices, setSubTabIndices] = useState<number[]>(new Array(subTabsData.length).fill(0));

    const handleMainChange = (_: React.SyntheticEvent, newValue: number) => setMainTab(newValue);

    const handleSubChange = (tabIndex: number) => (_: React.SyntheticEvent, newValue: number) => {
        setSubTabIndices(prev => prev.map((val, idx) => (idx === tabIndex ? newValue : val)));
    };

    return (
        <Box sx={commonStyles}>
            <Tabs
                value={mainTab}
                onChange={handleMainChange}
                aria-label="maintabs"
                variant="scrollable"
                scrollButtons="auto"
            >
                {mainTabLabels.map((label, idx) => (
                    <Tab key={idx} label={label} sx={{ "&.Mui-selected": { borderRadius: "8px" } }} />
                ))}
            </Tabs>
            {subTabsData.map((data, idx) => (
                <SubTabs
                    key={idx}
                    mainTabValue={mainTab}
                    mainTabIndex={idx}
                    subTabValue={subTabIndices[idx]}
                    data={data}
                    handleSubChange={handleSubChange(idx)}
                />
            ))}
        </Box>
    );
};

export default NestedTabs;
