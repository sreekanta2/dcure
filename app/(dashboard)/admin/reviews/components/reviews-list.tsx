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
import { Rating } from "@/components/ui/rating";
import { useEffect, useRef, useState } from "react";

export default function ReviewsList({ reviews = [] }: { reviews: any[] }) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const selectAllRef = useRef<HTMLButtonElement>(null); // Use HTMLButtonElement

  useEffect(() => {
    if (selectAllRef.current) {
      const checkbox = selectAllRef.current.querySelector("input");
      if (checkbox) {
        checkbox.indeterminate =
          selectedRows.length > 0 && selectedRows.length < reviews.length;
      }
    }
  }, [selectedRows]);

  const handleSelectAll = () => {
    if (selectedRows.length === reviews.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(reviews.map((row) => row.id));
    }
  };

  const handleRowSelect = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <Table className="w-[1250px]">
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox
              ref={selectAllRef}
              checked={selectedRows.length === reviews.length}
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

          <TableHead>Doctor Name </TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Content</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {reviews.map((review: any) => (
          <TableRow
            key={review.id}
            className="hover:bg-muted"
            data-state={
              selectedRows.includes(review.id) ? "selected" : undefined
            }
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.includes(review.id)}
                onCheckedChange={() => handleRowSelect(review.id)}
              />
            </TableCell>
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 reviews-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={review.patient.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {review.patient.name}
                </span>
              </div>
            </TableCell>
            {/* doctor name */}
            <TableCell className="font-medium text-card-foreground/80">
              <div className="flex gap-3 reviews-center">
                <Avatar className="rounded-full">
                  <AvatarImage src={review.doctor.avatar} />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <span className="text-sm text-card-foreground">
                  {review.doctor.name}
                </span>
              </div>
            </TableCell>

            {/* rating */}
            <TableCell className="font-medium text-card-foreground/80">
              <Rating value={2} readOnly className="gap-x-0.5 max-w-[100px]" />
            </TableCell>
            {/* content */}
            <TableCell>
              {review.content.length > 42
                ? review.content.slice(0, 42) + "..."
                : review.content}
            </TableCell>

            <TableCell>
              {review.createdAt
                ? new Date(review.createdAt).toLocaleDateString("en-GB")
                : "N/A"}
            </TableCell>

            <TableCell>
              <Badge
                variant="soft"
                color={
                  (review.status === "approved" && "default") ||
                  (review.status === "rejected" && "destructive") ||
                  (review.status === "pending" && "warning") ||
                  "default"
                }
                className=" capitalize"
              >
                {review.status}
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
}
