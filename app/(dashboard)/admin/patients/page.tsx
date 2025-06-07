import LimitSelect from "@/components/limit-select";
import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getPatients } from "@/config/patients/config";
import PatientsList from "./components/patients-list";

export default async function AdminPatientPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // If searchParams is a plain object, get the page param
  const page = parseInt(searchParams.page || "1", 10);
  const limit = parseInt(searchParams.limit || "10", 10);

  // Fetch doctors data based on page and limit
  const patientsResponse = await getPatients({ page, limit });
  return (
    <div className="border p-6 bg-card rounded-md space-y-4">
      <h1 className="text-2xl font-bold   bg-card/50 text-default-600     ">
        Patients List
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SearchInput searchParamKey="name" />
        <LimitSelect />
      </div>
      <ScrollArea className="pb-8  lg:pb-0">
        <PatientsList patients={patientsResponse?.data} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {patientsResponse?.pagination?.totalRecords >
        patientsResponse?.pagination?.perPage && (
        <div className="mt-24">
          <Pagination
            currentPage={patientsResponse?.pagination?.currentPage}
            totalPages={patientsResponse?.pagination?.totalPages}
          />
        </div>
      )}
    </div>
  );
}
