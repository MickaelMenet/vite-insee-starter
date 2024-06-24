import { Link, useNavigate } from "@tanstack/react-router";
import { Table } from "@codegouvfr/react-dsfr/Table";

type DashboardTableProps = {
    routePrefix: string;
    tableData: any[];
};

const DashboardTable = ({ routePrefix, tableData }: DashboardTableProps) => {
    const navigate = useNavigate();

    const handleRowClick = (housingId: any) => {
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
                    to={`/${routePrefix}/logement/${row[5]}`}
                    onClick={() => handleRowClick(row[5])}
                    key={row[5]}
                >
                    {row[1]}
                </Link>,
                row[0],
                row[2],
                row[3],
                row[4]
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
