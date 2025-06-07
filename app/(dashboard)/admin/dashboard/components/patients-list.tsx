import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { getPatients } from "@/config/patients/config";

const PatientsList = async () => {
  const patients = await getPatients({ page: 1, limit: 5 });
  return (
    <Table className="min-w-full whitespace-nowrap">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">Patient Name</TableHead>

          <TableHead>Phone </TableHead>
          <TableHead>Last Visit</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {patients?.data?.length > 0 &&
          patients.data.map((patient: any) => (
            <TableRow key={patient.id} className="hover:bg-muted">
              <TableCell className="font-medium text-card-foreground/80">
                <div className="flex gap-3 items-center">
                  <Avatar className="rounded-full">
                    <AvatarImage src={patient?.image} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-card-foreground">
                    {patient?.name}
                  </span>
                </div>
              </TableCell>

              <TableCell>{patient?.phoneNumber}</TableCell>
              <TableCell>
                {patient?.lastVisit ? patient?.lastVisit : "N/A"}
              </TableCell>

              <TableCell>
                <Badge
                  variant="soft"
                  color={(patient?.isActive && "success") || "destructive"}
                  className=" capitalize"
                >
                  {patient?.isActive ? "active" : "inactive"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default PatientsList;
