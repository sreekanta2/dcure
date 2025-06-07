"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@iconify/react";

import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const AppointmentList = ({ appointments }: { appointments: any }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const selectAllRef = useRef<HTMLButtonElement>(null); // Use HTMLButtonElement

  useEffect(() => {
    if (selectAllRef.current) {
      const checkbox = selectAllRef.current.querySelector("input");
      if (checkbox) {
        checkbox.indeterminate =
          selectedRows.length > 0 && selectedRows.length < appointments.length;
      }
    }
  }, [selectedRows]);

  const handleSelectAll = () => {
    if (selectedRows.length === appointments.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(appointments.map((row: any) => row.id));
    }
  };

  const handleRowSelect = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <Table className="min-w-full whitespace-nowrap">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox
              ref={selectAllRef}
              checked={selectedRows.length === appointments.length}
              onCheckedChange={handleSelectAll}
            />
          </TableHead>

          <TableHead className="font-semibold">
            {selectedRows.length > 0 ? (
              <div className="flex gap-2">
                <Button
                  size="xs"
                  variant="outline"
                  className="text-xs"
                  color="destructive"
                >
                  Delete
                </Button>
              </div>
            ) : (
              "Doctor Name"
            )}
          </TableHead>

          <TableHead>Specialty </TableHead>
          <TableHead>Patient Name</TableHead>
          <TableHead>Appointment Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {appointments.map((appointment: any) => (
          <TableRow
            key={appointment.id}
            className="hover:bg-muted"
            data-state={
              selectedRows.includes(appointment.id) ? "selected" : undefined
            }
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.includes(appointment.id)}
                onCheckedChange={() => handleRowSelect(appointment.id)}
              />
            </TableCell>
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 appointments-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={appointment?.image} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {appointment.doctor}
                </span>
              </div>
            </TableCell>

            <TableCell>{appointment?.department}</TableCell>
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 appointments-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={appointment.images} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {appointment.patientName}
                </span>
              </div>
            </TableCell>
            <TableCell>
              {appointment.appointmentDate
                ? appointment.appointmentDate
                : "N/A"}
            </TableCell>

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
            <TableCell>{appointment.amount}</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  color="secondary"
                  className="h-7 w-7"
                >
                  <Icon icon="heroicons:pencil" className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-7 w-7"
                  color="secondary"
                >
                  <Icon icon="heroicons:eye" className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-7 w-7"
                  color="destructive"
                >
                  <Icon icon="heroicons:trash" className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AppointmentList;
