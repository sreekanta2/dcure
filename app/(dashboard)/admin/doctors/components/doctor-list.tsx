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

import { Rating } from "@/components/ui/rating";
import { useEffect, useRef, useState } from "react";

const DoctorList = ({ doctors = [] }: any) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const selectAllRef = useRef<HTMLButtonElement>(null); // Use HTMLButtonElement

  useEffect(() => {
    if (selectAllRef.current) {
      const checkbox = selectAllRef.current.querySelector("input");
      if (checkbox) {
        checkbox.indeterminate =
          selectedRows.length > 0 && selectedRows.length < doctors.length;
      }
    }
  }, [selectedRows]);

  const handleSelectAll = () => {
    if (selectedRows.length === doctors.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(doctors.map((row: any) => row.id));
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
          <TableHead className="text-left">
            <Checkbox
              ref={selectAllRef}
              checked={selectedRows.length === doctors.length}
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

          <TableHead>Specialty</TableHead>
          <TableHead>Earned</TableHead>
          <TableHead>Reviews</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {doctors.map((doctor: any) => (
          <TableRow
            key={doctor.id}
            className="hover:bg-muted"
            data-state={
              selectedRows.includes(doctor.id) ? "selected" : undefined
            }
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.includes(doctor.id)}
                onCheckedChange={() => handleRowSelect(doctor.id)}
              />
            </TableCell>
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 doctors-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={doctor?.user?.image} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {doctor?.user?.name}
                </span>
              </div>
            </TableCell>

            <TableCell>{doctor?.user?.specialties}</TableCell>
            <TableCell>{doctor?.user?.earn}</TableCell>
            <TableCell className="p-0 m-0">
              <Rating
                value={doctor?.reviews[0]?.rating}
                readOnly
                className="gap-x-0.5 max-w-[100px]"
              />
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

export default DoctorList;
