import { createFileRoute } from "@tanstack/react-router";
import DashboardTable from "../../../../components/DashboardTable";
import { tableData } from "../../../../data/dataDashboardEmploi";

export const Route = createFileRoute("/$enquete/emploi/codeur/dashboard")({
    component: () => {
        return <DashboardTable routePrefix="$enquete/emploi/codeur" tableData={tableData} />;
    }
});
