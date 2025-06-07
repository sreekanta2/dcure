import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAppointments } from "@/config/appointments/appointments.config";
import { Check, Trash } from "lucide-react";
import Link from "next/link";

const Appointments = async () => {
  const appointmentResponse = await getAppointments({ page: 1, limit: 5 });
  return (
    <div className=" w-full">
      <div className="border p-4 pb-0 bg-card rounded-md space-y-2">
        <h1 className="text-lg md:text-xl font-medium     bg-card/50 text-default-700      ">
          Appointments
        </h1>
        <hr className="" />
        <div className=" max-h-[600px]  pb-4 ">
          <ScrollArea className="h-fit w-full   ">
            {/* Set a fixed height for vertical scrolling */}
            <div className="m-1 ">
              <Table className=" min-w-full whitespace-nowrap  ">
                {/* Ensure the table is wider than the container for horizontal scrolling */}
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Doctor Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointmentResponse?.data?.length > 0 &&
                    appointmentResponse?.data.map((item: any) => (
                      <TableRow key={item.id} className="hover:bg-muted">
                        <TableCell className="font-medium text-card-foreground/80">
                          <div className="flex gap-3 items-center">
                            <Avatar className="rounded-full">
                              <AvatarImage src={item.image} />
                              <AvatarFallback>
                                {item?.patientName.charAt(0)}
                                {item?.patientName.split(" ")[1]?.charAt(0) ||
                                  ""}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-card-foreground">
                              {item.patientName}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="soft"
                            color={
                              (item.status === "Confirmed" && "success") ||
                              (item.status === "Completed" && "info") ||
                              (item.status === "Pending" && "destructive") ||
                              (item.status === "Rescheduled" && "warning") ||
                              "default"
                            }
                            className=" capitalize"
                          >
                            {item.status}
                          </Badge>
                        </TableCell>

                        <TableCell>{item.age} years</TableCell>
                        <TableCell>{item.department}</TableCell>
                        <TableCell>
                          {item.appointmentDate} - {item.appointmentTime}
                        </TableCell>

                        <TableCell>{item.contact}</TableCell>
                        <TableCell className="flex justify-end">
                          <div className="flex gap-3">
                            <Button
                              size="icon"
                              variant="outline"
                              color="success"
                              className="h-7 w-7"
                            >
                              <Check className="h-4 w-4" />
                            </Button>

                            <Button
                              size="icon"
                              variant="outline"
                              className="h-7 w-7"
                              color="destructive"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
            <ScrollBar orientation="horizontal" />{" "}
            {/* Add horizontal scrollbar */}
            <ScrollBar orientation="vertical" /> {/* Add vertical scrollbar */}
          </ScrollArea>
          <Link
            href="/doctor/appointments"
            className=" text-default-700 text-sm hover:text-blue-400  text-center mt-1  flex justify-center  "
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
