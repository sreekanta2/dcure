"use client"; // Convert to client component

import Pagination from "@/components/PaginationComponents";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPrescriptions } from "@/config/prescription/config";

import { Eye } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PrescriptionTable = () => {
  const [prescriptions, setPrescriptions] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [pagination, setPagination] = useState<any>(null);

  // Get the current page from the URL or default to 1
  const page = parseInt(searchParams.get("pt-page") || "1", 10);
  const limit = 5; // Set your desired limit

  // Fetch prescription data based on page and limit
  const fetchPrescriptions = async () => {
    setLoading(true);
    try {
      const response = await getPrescriptions({ page, limit });
      setPrescriptions(response.data);
      setPagination(response.pagination);
    } catch (error) {
      console.error("Failed to fetch prescriptions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrescriptions();
  }, [page, limit]);

  return (
    <div className="m-1">
      <Table className="min-w-full whitespace-nowrap">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">Prescription ID</TableHead>

            <TableHead>Doctor Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Medications</TableHead>

            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={9} className="text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : prescriptions?.length > 0 ? (
            prescriptions.map((prescription: any) => (
              <TableRow key={prescription.id} className="hover:bg-muted">
                <TableCell>PR-00{prescription?.id}</TableCell>

                <TableCell className="font-medium text-card-foreground/80">
                  <div className="flex gap-3 items-center">
                    <Avatar className="rounded-full">
                      <AvatarImage src={prescription?.patientImage} />
                      <AvatarFallback>
                        {prescription?.doctorName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-card-foreground">
                      {prescription?.doctorName}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{prescription?.date}</TableCell>
                <TableCell>{prescription?.medications?.join(", ")}</TableCell>

                <TableCell>
                  <Badge
                    variant="soft"
                    color={
                      (prescription.status === "Active" && "success") ||
                      (prescription.status === "Expired" && "destructive") ||
                      "default"
                    }
                    className="capitalize"
                  >
                    {prescription.status}
                  </Badge>
                </TableCell>
                <TableCell className="flex justify-start">
                  <div className="flex gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      color="secondary"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9} className="text-center">
                No prescriptions available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      {/* Pagination Controls */}
      {pagination?.totalRecords > pagination?.perPage && (
        <div className="mt-4">
          <Pagination
            currentPage={pagination?.currentPage}
            totalPages={pagination?.totalPages}
            queryKey="pt-page"
          />
        </div>
      )}
    </div>
  );
};

export default PrescriptionTable;
