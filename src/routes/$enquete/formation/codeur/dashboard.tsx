import { createFileRoute } from "@tanstack/react-router";
import DashboardTable from "../../../../components/DashboardTable";
import { tableDataFormation } from "../../../../data/dataDashboardFormation";

export const Route = createFileRoute("/$enquete/formation/codeur/dashboard")({
    component: () => {
        return <DashboardTable routePrefix="$enquete/formation/codeur" tableData={tableDataFormation} />;
    }
});
