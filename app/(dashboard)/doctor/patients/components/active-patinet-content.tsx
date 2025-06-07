import Pagination from "@/components/PaginationComponents";
import { getPatients } from "@/config/patients/config";
import PatientCard from "../../_components/patients-card";

export default async function ActivePatientsContent({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const page = parseInt(searchParams?.page || "1", 10);
  const limit = parseInt(searchParams?.limit || "4", 10);

  // Fetch doctors data based on page and limit
  const patients = await getPatients({ page, limit, status: true });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 ">
        {patients?.data?.length > 0 ? (
          patients?.data?.map((patient: any) => (
            <PatientCard key={patient.id} patient={patient} />
          ))
        ) : (
          <h1>No Completed Appointment found!</h1>
        )}
      </div>
      {patients?.pagination?.totalRecords > patients?.pagination?.perPage && (
        <div className="mt-4">
          <Pagination
            currentPage={patients?.pagination?.currentPage}
            totalPages={patients?.pagination?.totalPages}
          />
        </div>
      )}
    </div>
  );
}
