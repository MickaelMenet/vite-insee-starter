import { createFileRoute } from "@tanstack/react-router";
import ApiComponent from "api/endpoints/apiComponent";

export const Route = createFileRoute("/pcs")({
    component: () => (
        <>
            <ApiComponent statut="1" pub="1" cpf="4" taille="1" />
            <ApiComponent statut="1" pub="2" cpf="7" taille="1" />
        </>
    )
});
