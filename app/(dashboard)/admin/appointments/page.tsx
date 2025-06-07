import LimitSelect from "@/components/limit-select";
import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getAppointments } from "@/config/appointments/appointments.config";
import AppointmentList from "./components/appointments-list";

export default async function AdminAppointmentsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // If searchParams is a plain object, get the page param
  const page = parseInt(searchParams.page || "1", 10);
  const limit = parseInt(searchParams.limit || "10", 5);

  // Fetch doctors data based on page and limit
  const appointmentsResponse = await getAppointments({ page, limit });
  // console.log(doctorsResponse?.data?.length);
  return (
    <div className="border p-6 bg-card rounded-md space-y-4">
      <h1 className="text-2xl font-bold   bg-card/50 text-default-600  ">
        Appointments List
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SearchInput searchParamKey="name" />
        <LimitSelect />
      </div>
      <ScrollArea className="pb-8  lg:pb-0">
        <AppointmentList appointments={appointmentsResponse.data} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {appointmentsResponse?.pagination?.totalRecords >
        appointmentsResponse?.pagination?.perPage && (
        <div className="mt-24">
          <Pagination
            currentPage={appointmentsResponse?.pagination?.currentPage}
            totalPages={appointmentsResponse?.pagination?.totalPages}
          />
        </div>
      )}
    </div>
  );
}
