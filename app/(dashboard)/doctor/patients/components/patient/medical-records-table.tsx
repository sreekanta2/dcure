"use client"; // Convert to client component

import Pagination from "@/components/PaginationComponents";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getMedicalRecords } from "@/config/medical-records/config";

import { Eye } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const MedicalRecordsTable = () => {
  const [medicalRecords, setMedicalRecords] = useState<any>(null);
  const [pagination, setPagination] = useState<any>(null);

  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the current page from the URL or default to 1
  const page = parseInt(searchParams.get("mr-page") || "1", 10);
  const limit = 5; // Set your desired limit

  // Fetch medical records data based on page and limit
  const fetchMedicalRecords = async () => {
    setLoading(true);
    try {
      const response = await getMedicalRecords({ page, limit });
      setMedicalRecords(response.data);
      setPagination(response.pagination);
    } catch (error) {
      console.error("Failed to fetch medical records:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicalRecords();
  }, [page, limit]);

  // Update the URL with the new page number
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("mr-page", newPage.toString());
    router.push(`?${params.toString()}`);
  };
  console.log(medicalRecords);
  const handleNextPage = () => {
    handlePageChange(page + 1);
  };

  const handlePreviousPage = () => {
    handlePageChange(Math.max(page - 1, 1));
  };

  return (
    <div className="m-1">
      <Table className="min-w-full whitespace-nowrap">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">Record ID</TableHead>

            <TableHead>Date of Birth</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Doctor</TableHead>

            <TableHead>Created Time</TableHead>

            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={10} className="text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : medicalRecords?.length > 0 ? (
            medicalRecords.map((record: any) => (
              <TableRow key={record.id} className="hover:bg-muted">
                <TableCell>MR-00{record?.id}</TableCell>

                <TableCell>{record?.dateOfBirth}</TableCell>
                <TableCell>{record?.gender}</TableCell>
                <TableCell className="font-medium text-card-foreground/80">
                  <div className="flex gap-3 items-center">
                    <Avatar className="rounded-full">
                      <AvatarImage src={record?.image} />
                      <AvatarFallback>
                        {record?.doctorName?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-card-foreground">
                      {record?.doctorName}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(record?.createdAt).toLocaleString()}
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
              <TableCell colSpan={10} className="text-center">
                No medical records available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      {pagination?.totalRecords > pagination?.perPage && (
        <div className="mt-4">
          <Pagination
            currentPage={pagination?.currentPage}
            totalPages={pagination?.totalPages}
            queryKey="mr-page"
          />
        </div>
      )}
    </div>
  );
};

export default MedicalRecordsTable;
