import { createFileRoute } from "@tanstack/react-router";
import DashboardTable from "../../../../components/DashboardTable";
import { tableData } from "../../../../data/dataEmploi";

export const Route = createFileRoute("/$enquete/emploi/expert/dashboard")({
    component: () => {
        return <DashboardTable routePrefix="$enquete/emploi/expert" tableData={tableData} />;
    }
});
