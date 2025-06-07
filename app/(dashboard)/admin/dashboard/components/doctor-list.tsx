import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Rating } from "@/components/ui/rating";
import { getDoctors } from "@/config/doctors/doctors.config";

const DoctorList = async () => {
  const doctors = await getDoctors({ page: 1, limit: 5 });
  return (
    <Table className="min-w-full whitespace-nowrap">
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold">Doctor Name</TableHead>

          <TableHead>Specialty</TableHead>
          <TableHead>Earned</TableHead>
          <TableHead>Reviews</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {doctors?.data?.length > 0 &&
          doctors?.data.map((doctor: any) => (
            <TableRow key={doctor.id} className="hover:bg-muted">
              <TableCell className="font-medium text-card-foreground/80">
                <div className="flex gap-3 items-center">
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
              <TableCell>{doctor?.user?.earned}</TableCell>
              <TableCell className="p-0 m-0">
                <Rating
                  value={doctor?.reviews[0]?.rating}
                  readOnly
                  className="gap-x-0.5 max-w-[100px]"
                />
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default DoctorList;
