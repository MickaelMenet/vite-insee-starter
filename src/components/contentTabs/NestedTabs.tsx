// import React, { useState, memo, useCallback } from "react";
// import { Tabs, Tab, Box, Typography } from "@mui/material";
// import EmployeurPrincipalContent from "./emploi/EmployeurPrincipalContent";
// import ProfessionPrincipaleContent from "./emploi/ProfessionPrincipaleContent";
// import ProfessionSecondaireContent from "./emploi/ProfessionSecondaireContent";
// import ActiviteSecondaireContent from "./emploi/ActiviteSecondaireContent";
// import ProfessionAnterieureContent from "./emploi/ProfessionAnterieureContent";
// import ActiviteAnterieureContent from "./emploi/ActiviteAnterieureContent";
// import ProfessionPereContent from "./emploi/ProfessionPereContent";
// import ProfessionMereContent from "./emploi/ProfessionMereContent";

// const commonStyles = {
//     width: "100%",
//     maxWidth: "1200px",
//     margin: "50px auto",
//     padding: "20px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     borderRadius: "10px"
// };

// type TabPanelProps = {
//     children: React.ReactNode;
//     value: number;
//     index: number;
// };

// const TabPanel = memo(({ children, value, index, ...other }: TabPanelProps) => (
//     <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//         style={{ width: "100%" }}
//     >
//         {value === index && (
//             <Box p={3} sx={{ width: "100%", mt: 2 }}>
//                 <Typography>{children}</Typography>
//             </Box>
//         )}
//     </div>
// ));

// type SubTabsProps = {
//     value: number;
//     index: number;
//     subTabs: SubTabType;
//     handleSubChange: (event: React.SyntheticEvent, newValue: number) => void;
// };

// type SubTabType = {
//     value: number;
//     labels: string[];
//     contents: React.ComponentType[];
// };

// const SubTabs = memo(({ value, index, subTabs, handleSubChange }: SubTabsProps) => (
//     <TabPanel value={value} index={index}>
//         <Tabs
//             value={subTabs.value}
//             onChange={handleSubChange}
//             aria-label="subtabs"
//             variant="scrollable"
//             scrollButtons="auto"
//         >
//             {subTabs.labels.map((label, idx) => (
//                 <Tab
//                     key={idx}
//                     label={label}
//                     sx={{
//                         "&.Mui-selected": {
//                             borderRadius: "8px"
//                         }
//                     }}
//                 />
//             ))}
//         </Tabs>
//         {subTabs.contents.map((ContentComponent, idx) => (
//             <TabPanel key={idx} value={subTabs.value} index={idx}>
//                 <ContentComponent />
//             </TabPanel>
//         ))}
//     </TabPanel>
// ));

// const NestedTabs = () => {
//     const [state, setState] = useState({
//         mainTab: 0,
//         subTabs: [
//             {
//                 value: 0,
//                 labels: ["Employeur principal", "Profession principale"],
//                 contents: [EmployeurPrincipalContent, ProfessionPrincipaleContent]
//             },
//             {
//                 value: 0,
//                 labels: ["Profession secondaire", "Activité secondaire"],
//                 contents: [ProfessionSecondaireContent, ActiviteSecondaireContent]
//             },
//             {
//                 value: 0,
//                 labels: ["Profession antérieure", "Activité antérieure"],
//                 contents: [ProfessionAnterieureContent, ActiviteAnterieureContent]
//             },
//             {
//                 value: 0,
//                 labels: [
//                     "Profession du père",
//                     "Profession du père 2",
//                     "Profession de la mère",
//                     "Profession de la mère 2"
//                 ],
//                 contents: [
//                     ProfessionPereContent,
//                     ProfessionPereContent,
//                     ProfessionMereContent,
//                     ProfessionMereContent
//                 ]
//             }
//         ]
//     });

//     const handleMainChange = useCallback((_event: React.SyntheticEvent, newValue: number) => {
//         setState(prevState => ({ ...prevState, mainTab: newValue }));
//     }, []);

//     const handleSubChange = useCallback(
//         (tabIndex: number) => (_event: React.SyntheticEvent, newValue: number) => {
//             setState(prevState => {
//                 const newSubTabs = [...prevState.subTabs];
//                 newSubTabs[tabIndex] = { ...newSubTabs[tabIndex], value: newValue };
//                 return { ...prevState, subTabs: newSubTabs };
//             });
//         },
//         []
//     );

//     const { mainTab, subTabs } = state;

//     return (
//         <Box sx={commonStyles}>
//             <Tabs
//                 value={mainTab}
//                 onChange={handleMainChange}
//                 aria-label="maintabs"
//                 variant="scrollable"
//                 scrollButtons="auto"
//             >
//                 <Tab label="Employeur principal" sx={{ "&.Mui-selected": { borderRadius: "8px" } }} />
//                 <Tab label="Employeur secondaire" sx={{ "&.Mui-selected": { borderRadius: "8px" } }} />
//                 <Tab label="Emploi antérieur" sx={{ "&.Mui-selected": { borderRadius: "8px" } }} />
//                 <Tab
//                     label="Professions des parents"
//                     sx={{ "&.Mui-selected": { borderRadius: "8px" } }}
//                 />
//             </Tabs>
//             {subTabs.map((subTab, idx) => (
//                 <SubTabs
//                     key={idx}
//                     value={mainTab}
//                     index={idx}
//                     subTabs={subTab}
//                     handleSubChange={handleSubChange(idx)}
//                 />
//             ))}
//         </Box>
//     );
// };

// export default NestedTabs;
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

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
    if (value !== index) {
        return null;
    }

    return (
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ width: "100%" }}
        >
            <Box p={3} sx={{ width: "100%", mt: 2 }}>
                {children}
            </Box>
        </div>
    );
};

type SubTabsProps = {
    mainTabValue: number;
    mainTabIndex: number;
    subTabValue: number;
    labels: string[];
    contents: React.ComponentType[];
    handleSubChange: (event: React.SyntheticEvent, newValue: number) => void;
};

const SubTabs = ({
    mainTabValue,
    mainTabIndex,
    subTabValue,
    labels,
    contents,
    handleSubChange
}: SubTabsProps) => (
    <TabPanel value={mainTabValue} index={mainTabIndex}>
        <Tabs
            value={subTabValue}
            onChange={handleSubChange}
            aria-label="subtabs"
            variant="scrollable"
            scrollButtons="auto"
        >
            {labels.map((label, idx) => (
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
        {contents.map((ContentComponent, idx) => (
            <TabPanel key={idx} value={subTabValue} index={idx}>
                <ContentComponent />
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

const NestedTabs = () => {
    const [mainTab, setMainTab] = useState(0);
    const [subTabIndices, setSubTabIndices] = useState<number[]>([0, 0, 0, 0]);

    const handleMainChange = (_event: React.SyntheticEvent, newValue: number) => {
        setMainTab(newValue);
    };

    const handleSubChange = (tabIndex: number) => (_event: React.SyntheticEvent, newValue: number) => {
        setSubTabIndices(prev => {
            const newIndices = [...prev];
            newIndices[tabIndex] = newValue;
            return newIndices;
        });
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
                <Tab label="Employeur principal" sx={{ "&.Mui-selected": { borderRadius: "8px" } }} />
                <Tab label="Employeur secondaire" sx={{ "&.Mui-selected": { borderRadius: "8px" } }} />
                <Tab label="Emploi antérieur" sx={{ "&.Mui-selected": { borderRadius: "8px" } }} />
                <Tab
                    label="Professions des parents"
                    sx={{ "&.Mui-selected": { borderRadius: "8px" } }}
                />
            </Tabs>
            {subTabsData.map((subTab, idx) => (
                <SubTabs
                    key={idx}
                    mainTabValue={mainTab}
                    mainTabIndex={idx}
                    subTabValue={subTabIndices[idx]}
                    labels={subTab.labels}
                    contents={subTab.contents}
                    handleSubChange={handleSubChange(idx)}
                />
            ))}
        </Box>
    );
};

export default NestedTabs;
