import { createFileRoute } from "@tanstack/react-router";
import PropertiesToJson from "components/PropertiesToJson";

export const Route = createFileRoute("/properties")({
    component: () => <PropertiesToJson />
});
