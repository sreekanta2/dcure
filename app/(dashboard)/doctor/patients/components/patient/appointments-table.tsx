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
import { getAppointments } from "@/config/appointments/appointments.config";
import { Eye } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AppointmentTable = () => {
  const [invoicesResponse, setInvoicesResponse] = useState<any>(null);
  const [pagination, setPagination] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the current page from the URL or default to 1
  const page = parseInt(searchParams.get("apt-page") || "1", 10);
  const limit = 5; // Set your desired limit

  // Fetch invoices data based on page and limit
  const fetchInvoices = async () => {
    setLoading(true);
    try {
      const response = await getAppointments({ page, limit });
      setInvoicesResponse(response.data);
      setPagination(response.pagination);
    } catch (error) {
      console.error("Failed to fetch invoices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [page, limit]);

  return (
    <div className="m-1">
      <Table className="min-w-full whitespace-nowrap">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold">INID</TableHead>
            <TableHead>Doctor Name</TableHead>
            <TableHead>Payment Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : invoicesResponse?.length > 0 ? (
            invoicesResponse.map((item: any) => (
              <TableRow key={item.id} className="hover:bg-muted">
                <TableCell>APT-00{item?.id}</TableCell>
                <TableCell className="font-medium text-card-foreground/80">
                  <div className="flex gap-3 items-center">
                    <Avatar className="rounded-full">
                      <AvatarImage src={item?.image} />
                      <AvatarFallback>{item?.doctor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-card-foreground">
                      {item?.doctor}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{item?.appointmentDate}</TableCell>
                <TableCell>
                  <Badge
                    variant="soft"
                    color={
                      (item.status === "Paid" && "success") ||
                      (item.status === "Unpaid" && "destructive") ||
                      "default"
                    }
                    className="capitalize"
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.amount}</TableCell>
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
              <TableCell colSpan={7} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {pagination?.totalRecords > pagination?.perPage && (
        <div className="mt-4">
          <Pagination
            currentPage={pagination?.currentPage}
            totalPages={pagination?.totalPages}
            queryKey="apt-page"
          />
        </div>
      )}
    </div>
  );
};

export default AppointmentTable;
