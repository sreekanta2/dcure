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

import { useEffect, useRef, useState } from "react";
import { specialties } from "../../data";

export default function SpecialtiesList() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const selectAllRef = useRef<HTMLButtonElement>(null); // Use HTMLButtonElement

  useEffect(() => {
    if (selectAllRef.current) {
      const checkbox = selectAllRef.current.querySelector("input");
      if (checkbox) {
        checkbox.indeterminate =
          selectedRows.length > 0 && selectedRows.length < specialties.length;
      }
    }
  }, [selectedRows]);

  const handleSelectAll = () => {
    if (selectedRows.length === specialties.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(specialties.map((row) => row.id));
    }
  };

  const handleRowSelect = (id: string) => {
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
              checked={selectedRows.length === specialties.length}
              onCheckedChange={handleSelectAll}
            />
          </TableHead>
          <TableHead>Id </TableHead>

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
              "Specialties Name"
            )}
          </TableHead>

          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {specialties.map((specialty) => (
          <TableRow
            key={specialty.id}
            className="hover:bg-muted"
            data-state={
              selectedRows.includes(specialty.id) ? "selected" : undefined
            }
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.includes(specialty.id)}
                onCheckedChange={() => handleRowSelect(specialty.id)}
              />
            </TableCell>
            <TableCell>{specialty.id}</TableCell>
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 specialtiys-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={specialty.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {specialty.name}
                </span>
              </div>
            </TableCell>

            <TableCell className="flex justify-start">
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
}
