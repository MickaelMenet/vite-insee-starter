import { createFileRoute, useMatch } from "@tanstack/react-router";
import { details1, details2, logementData } from "components/logement/data";
import PersonDetailsCard from "components/PersonDetailsCard";
import NestedTabs from "components/NestedTabs";
import ActionButtons from "components/ActionButtons";
import { Box } from "@mui/material";

const findPersonDetails = (noi: string) => {
    const allDetails = [details1, details2];
    return allDetails.find(details => details.noi === noi);
};

export const Route = createFileRoute("/$enquete/emploi/codeur/logement/$logementDetails/$noi")({
    component: () => {
        const match = useMatch("/$enquete/emploi/codeur/logement/$logementDetails/$noi");
        const { noi } = match.params as { noi: string };
        const personDetails = findPersonDetails(noi);

        if (!personDetails) {
            return <div>Personne non trouvée</div>;
        }

        return (
            <>
                <Box display="flex">
                    <Box flexGrow={1}>
                        <PersonDetailsCard details={personDetails} logementData={logementData} />
                        <ActionButtons />
                    </Box>
                </Box>
                <NestedTabs />
            </>
        );
    }
});
