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

const PatientsList = ({ patients = [] }: { patients: any }) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const selectAllRef = useRef<HTMLButtonElement>(null); // Use HTMLButtonElement

  useEffect(() => {
    if (selectAllRef.current) {
      const checkbox = selectAllRef.current.querySelector("input");
      if (checkbox) {
        checkbox.indeterminate =
          selectedRows.length > 0 && selectedRows.length < patients.length;
      }
    }
  }, [selectedRows]);

  const handleSelectAll = () => {
    if (selectedRows.length === patients.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(patients.map((row: any) => row.id));
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
              checked={selectedRows.length === patients.length}
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
              "Patient Name"
            )}
          </TableHead>

          <TableHead>Phone </TableHead>
          <TableHead>Last Visit</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {patients.map((patient: any) => (
          <TableRow
            key={patient.id}
            className="hover:bg-muted"
            data-state={
              selectedRows.includes(patient.id) ? "selected" : undefined
            }
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.includes(patient.id)}
                onCheckedChange={() => handleRowSelect(patient.id)}
              />
            </TableCell>
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 patients-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={patient.image} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {patient.name}
                </span>
              </div>
            </TableCell>

            <TableCell>{patient.phoneNumber}</TableCell>
            <TableCell>
              {patient.lastVisit ? patient.lastVisit : "N/A"}
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

export default PatientsList;
