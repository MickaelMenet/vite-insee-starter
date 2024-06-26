import { createFileRoute, useMatch } from "@tanstack/react-router";
import { tableData } from "../../../../../../../src/data/dataDashboardEmploi";
import PersonDetailsCard from "components/PersonDetailsCard";
import NestedTabs from "components/NestedTabs";
import ActionButtons from "components/ActionButtons";
import { Box } from "@mui/material";

const findPersonDetails = (logementId: string, index: number) => {
    const logement = tableData.find(entry => entry.noi === logementId);
    if (logement && logement.personDetails[index - 1]) {
        return logement.personDetails[index - 1];
    }
    return null;
};

export const Route = createFileRoute("/$enquete/emploi/codeur/logement/$logementDetails/$index")({
    component: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const match = useMatch("/$enquete/emploi/codeur/logement/$logementDetails/$index");
        const { logementDetails: logementId, index } = match.params as {
            logementDetails: string;
            index: string;
        };
        const personDetails = findPersonDetails(logementId, parseInt(index, 10));

        if (!personDetails) {
            return <div>Personne non trouvée</div>;
        }

        const logementData = tableData.find(entry => entry.noi === logementId)?.logementData || null;

        if (!logementData) {
            return <div>Données de logement non trouvées</div>;
        }

        return (
            <>
                <Box display="flex" flexDirection="column" alignItems="center" padding="20px">
                    <Box width="100%" mb={3}>
                        <PersonDetailsCard details={personDetails} logementData={logementData} />
                    </Box>
                    <Box width="100%">
                        <ActionButtons />
                    </Box>
                </Box>
                <NestedTabs />
            </>
        );
    }
});
