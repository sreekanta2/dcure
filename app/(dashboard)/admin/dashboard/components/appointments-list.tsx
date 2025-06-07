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
import { getAppointments } from "@/config/appointments/appointments.config";

const AppointmentList = async () => {
  const appointments = await getAppointments({ page: 1, limit: 5 });
  return (
    <Table className="min-w-full whitespace-nowrap">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">Doctor Name</TableHead>

          <TableHead>Specialty </TableHead>
          <TableHead>Patient Name</TableHead>
          <TableHead>Appointment Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {appointments?.data?.length > 0 &&
          appointments?.data.map((appointment: any) => (
            <TableRow key={appointment.id} className="hover:bg-muted">
              <TableCell className="font-medium text-card-foreground/80">
                <div className="flex gap-3 appointments-center">
                  <Avatar className="rounded-full">
                    <AvatarImage src={appointment?.image} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-card-foreground">
                    {appointment?.doctor}
                  </span>
                </div>
              </TableCell>

              <TableCell>{appointment?.department}</TableCell>
              <TableCell className="font-medium text-card-foreground/80">
                <div className="flex gap-3 appointments-center">
                  <Avatar className="rounded-full">
                    <AvatarImage src={appointment?.image} />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-card-foreground">
                    {appointment?.patientName}
                  </span>
                </div>
              </TableCell>
              <TableCell>{appointment?.appointmentDate}</TableCell>

              <TableCell>
                <Badge
                  variant="soft"
                  color={
                    (appointment?.status === "Paid" && "success") ||
                    (appointment?.status === "Unpaid" && "warning") ||
                    "default"
                  }
                  className=" capitalize"
                >
                  {appointment?.status}
                </Badge>
              </TableCell>
              <TableCell>{appointment?.amount}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default AppointmentList;
