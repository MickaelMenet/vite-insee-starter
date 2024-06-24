import { createFileRoute } from "@tanstack/react-router";
import DashboardTable from "../../../../components/DashboardTable";
import { tableDataFormation } from "../../../../data/dataDashboardFormation";

export const Route = createFileRoute("/$enquete/formation/expert/dashboard")({
    component: () => {
        return <DashboardTable routePrefix="$enquete/formation/expert" tableData={tableDataFormation} />;
    }
});
