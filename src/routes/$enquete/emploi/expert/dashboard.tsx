import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Table } from "@codegouvfr/react-dsfr/Table";

export const Route = createFileRoute("/$enquete/emploi/expert/dashboard")({
    component: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();

        const handleRowClick = (housingId: string) => {
            navigate({ to: `/$enquete/emploi/expert/logement/${housingId}` });
        };

        const data = [
            ["toto", "2023T2", "MEL-001", "Oui", "Paris"],
            ["Guadeloupe", "2023T2", "MEL-002", "Non", "Lyon"],
            ["Guyane", "2023T2", "MEL-003", "Oui", "Marseille"],
            ["La Réunion", "2023T2", "MEL-004", "Non", "Toulouse"],
            ["Mayotte", "2023T2", "MEL-005", "Oui", "Nice"],
            ["Île-de-France", "2023T2", "MEL-006", "Non", "Bordeaux"],
            ["Occitanie", "2023T2", "MEL-007", "Oui", "Lille"],
            ["Nouvelle-Aquitaine", "2023T2", "MEL-008", "Non", "Rennes"],
            ["Provence-Alpes-Côte d'Azur", "2023T2", "MEL-009", "Oui", "Nantes"],
            ["Auvergne-Rhône-Alpes", "2023T2", "MEL-010", "Non", "Strasbourg"],
            ["Bourgogne-Franche-Comté", "2023T2", "MEL-011", "Oui", "Reims"],
            ["Bretagne", "2023T2", "MEL-012", "Non", "Le Havre"],
            ["Centre-Val de Loire", "2023T2", "MEL-013", "Oui", "Saint-Étienne"],
            ["Corse", "2023T2", "MEL-014", "Non", "Toulon"],
            ["Grand Est", "2023T2", "MEL-015", "Oui", "Le Mans"],
            ["Hauts-de-France", "2023T2", "MEL-016", "Non", "Grenoble"],
            ["Normandie", "2023T2", "MEL-017", "Oui", "Dijon"],
            ["Pays de la Loire", "2023T2", "MEL-018", "Non", "Angers"],
            ["Île-de-France", "2023T2", "MEL-019", "Oui", "Villeurbanne"],
            ["Occitanie", "2023T2", "MEL-020", "Non", "Clermont-Ferrand"]
        ];

        return (
            <Table
                bordered
                caption="Tableau de bord"
                colorVariant="blue-cumulus"
                fixed
                data={data.map(row => [
                    <Link
                        to={`/$enquete/emploi/expert/logement/${row[2]}`}
                        onClick={() => handleRowClick(row[2])}
                        key={row[2]}
                    >
                        {row[0]}
                    </Link>,
                    row[1],
                    row[2],
                    row[3],
                    row[4]
                ])}
                headers={[
                    "Régions",
                    "Trimestre",
                    "Numéro de logement",
                    "Repris provisoirement",
                    "Communes"
                ]}
            />
        );
    }
});
