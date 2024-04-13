"use client";
import { DataTable } from "@/components/table/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { zeroPad } from "@/lib/utils";
import { TutoringSession } from "@/lib/models/tutoring-session";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  requests: TutoringSession[];
};

export default function AcceptedRequests({ requests }: Props) {
  const columns: ColumnDef<TutoringSession>[] = [
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => {
        const date: Date = new Date(row.original.date);
        return <span>{date.toLocaleDateString("en-US")}</span>;
      },
    },

    {
      accessorKey: "date",
      header: "Time",
      cell: ({ row }) => {
        const startDate: Date = new Date(row.original.date);

        return (
          <span>
            {`${new Date(startDate).getHours()}:${zeroPad(
              new Date(startDate).getMinutes(),
              2,
            )}`}
          </span>
        );
      },
    },

    {
      accessorKey: "subject",
      header: "Subject",
    },
  ];

  return (
    <Card className="w-full">
      <CardContent className="m-1 p-3 border-none dark:bg-slate-800/80">
        <DataTable
          columns={columns}
          data={requests}
          showColumnVisibility={false}
          showRowsPerPage={false}
        />
      </CardContent>
    </Card>
  );
}
