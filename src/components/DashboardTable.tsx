import { Link, useNavigate } from "@tanstack/react-router";
import { Table } from "@codegouvfr/react-dsfr/Table";

type DashboardTableProps = {
    routePrefix: string;
    tableData: {
        quarter: string;
        location: string;
        personCount: number;
        logementCount: number;
        someOtherCount: number;
        noi: string;
    }[];
};

const DashboardTable = ({ routePrefix, tableData }: DashboardTableProps) => {
    const navigate = useNavigate();

    const handleRowClick = (housingId: string) => {
        navigate({ to: `/${routePrefix}/logement/${housingId}` });
    };

    return (
        <Table
            bordered
            caption="Tableau de bord"
            colorVariant="blue-cumulus"
            fixed
            data={tableData.map(row => [
                <Link
                    to={`/${routePrefix}/logement/${row.noi}`}
                    onClick={() => handleRowClick(row.noi)}
                    key={row.noi}
                >
                    {row.location}
                </Link>,
                row.quarter,
                row.personCount,
                row.logementCount,
                row.someOtherCount
            ])}
            headers={[
                "Régions",
                "Trimestre",
                "Nb QI à traiter",
                "Dont repris provisoirement",
                "Nb logements à traiter"
            ]}
        />
    );
};

export default DashboardTable;
