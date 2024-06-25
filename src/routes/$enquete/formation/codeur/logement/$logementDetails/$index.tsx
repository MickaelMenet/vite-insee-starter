import { createFileRoute, useMatch } from "@tanstack/react-router";
import { tableDataFormation } from "../../../../../../../src/data/dataDashboardFormation";
import PersonDetailsCard from "../../../../../../components/PersonDetailsCard";
import SimpleTabs from "components/SimpleTabs";

const findPersonDetails = (logementId: string, index: number) => {
    const logement = tableDataFormation.find(entry => entry.noi === logementId);
    if (logement && logement.personDetails[index - 1]) {
        return logement.personDetails[index - 1];
    }
    return null;
};

export const Route = createFileRoute("/$enquete/formation/codeur/logement/$logementDetails/$index")({
    component: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const match = useMatch("/$enquete/formation/codeur/logement/$logementDetails/$index");
        const { logementDetails: logementId, index } = match.params as {
            logementDetails: string;
            index: string;
        };
        const personDetails = findPersonDetails(logementId, parseInt(index, 10));

        if (!personDetails) {
            return <div>Personne non trouvée</div>;
        }

        const logementData =
            tableDataFormation.find(entry => entry.noi === logementId)?.logementData || null;

        if (!logementData) {
            return <div>Données de logement non trouvées</div>;
        }

        return (
            <>
                <PersonDetailsCard details={personDetails} logementData={logementData} />
                <SimpleTabs />
            </>
        );
    }
});
