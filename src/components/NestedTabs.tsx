import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import EmployeurPrincipalContent from "./contentTabs/emploi/EmployeurPrincipalContent";
import ProfessionPrincipaleContent from "./contentTabs/emploi/ProfessionPrincipaleContent";
import ProfessionSecondaireContent from "./contentTabs/emploi/ProfessionSecondaireContent";
import ActiviteSecondaireContent from "./contentTabs/emploi/ActiviteSecondaireContent";
import ProfessionAnterieureContent from "./contentTabs/emploi/ProfessionAnterieureContent";
import ActiviteAnterieureContent from "./contentTabs/emploi/ActiviteAnterieureContent";
import ProfessionPereContent from "./contentTabs/emploi/ProfessionPereContent";
import ProfessionMereContent from "./contentTabs/emploi/ProfessionMereContent";

const commonStyles = {
    width: "100%",
    maxWidth: "1200px",
    margin: "50px auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px"
};

const TabPanel = (props: { [x: string]: any; children: any; value: any; index: any }) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ width: "100%" }}
        >
            {value === index && (
                <Box p={3} sx={{ width: "100%", mt: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const SubTabs = ({
    value,
    index,
    subTabs,
    handleSubChange
}: {
    value: number;
    index: number;
    subTabs: any;
    handleSubChange: any;
}) => {
    return (
        <TabPanel value={value} index={index}>
            <Tabs
                value={subTabs.value}
                onChange={handleSubChange}
                aria-label="subtabs"
                variant="scrollable"
                scrollButtons="auto"
            >
                {subTabs.labels.map((label: string, idx: number) => (
                    <Tab
                        key={idx}
                        label={label}
                        sx={{
                            "&.Mui-selected": {
                                borderRadius: "8px"
                            }
                        }}
                    />
                ))}
            </Tabs>
            {subTabs.contents.map((ContentComponent: any, idx: any) => (
                <TabPanel key={idx} value={subTabs.value} index={idx}>
                    <ContentComponent />
                </TabPanel>
            ))}
        </TabPanel>
    );
};

const NestedTabs = () => {
    const [mainTab, setMainTab] = useState(0);
    const [subTabs, setSubTabs] = useState([
        {
            value: 0,
            labels: ["Employeur principal", "Profession principale"],
            contents: [EmployeurPrincipalContent, ProfessionPrincipaleContent]
        },
        {
            value: 0,
            labels: ["Profession secondaire", "Activité secondaire"],
            contents: [ProfessionSecondaireContent, ActiviteSecondaireContent]
        },
        {
            value: 0,
            labels: ["Profession antérieure", "Activité antérieure"],
            contents: [ProfessionAnterieureContent, ActiviteAnterieureContent]
        },
        {
            value: 0,
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
    ]);

    const handleMainChange = (_event: React.SyntheticEvent, newValue: number) => {
        setMainTab(newValue);
    };

    const handleSubChange = (tabIndex: number) => (_event: any, newValue: number) => {
        const newSubTabs = [...subTabs];
        newSubTabs[tabIndex].value = newValue;
        setSubTabs(newSubTabs);
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
                <Tab
                    label="Employeur principal"
                    sx={{
                        "&.Mui-selected": {
                            borderRadius: "8px"
                        }
                    }}
                />
                <Tab
                    label="Employeur secondaire"
                    sx={{
                        "&.Mui-selected": {
                            borderRadius: "8px"
                        }
                    }}
                />
                <Tab
                    label="Emploi antérieur"
                    sx={{
                        "&.Mui-selected": {
                            borderRadius: "8px"
                        }
                    }}
                />
                <Tab
                    label="Professions des parents"
                    sx={{
                        "&.Mui-selected": {
                            borderRadius: "8px"
                        }
                    }}
                />
            </Tabs>
            {subTabs.map((subTab, idx) => (
                <SubTabs
                    key={idx}
                    value={mainTab}
                    index={idx}
                    subTabs={subTab}
                    handleSubChange={handleSubChange(idx)}
                />
            ))}
        </Box>
    );
};

export default NestedTabs;
