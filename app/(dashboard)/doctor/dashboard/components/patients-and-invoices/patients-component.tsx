import { getPatients } from "@/config/patients/config";
import Link from "next/link";
import PatientCard from "../../../_components/patients-card";

const RecentPatients = async () => {
  // Fetch doctors data based on page and limit
  const patients = await getPatients({ page: 1, limit: 3 });
  return (
    <div className=" w-full">
      <div className="border p-4 bg-card rounded-md space-y-2">
        <h1 className="text-lg md:text-xl font-medium     bg-card/50 text-default-700      ">
          Recents Patients
        </h1>
        <hr className="" />

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-4">
          {patients?.data.map((patient: any) => (
            <PatientCard patient={patient} key={patient.id} />
          ))}
        </div>
        <Link
          href="/doctor/patients"
          className=" text-default-700 text-sm hover:text-blue-400  text-center mt-4  flex justify-center  "
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default RecentPatients;
