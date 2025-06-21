import { getPatients } from "@/config/patients/config";
import PatientPageView from "./components/page-view";

const AppointmentsPage = async () => {
  const patients = await getPatients({ page: 1, limit: 10 });
  if (!patients) {
    return <div>No patients found</div>;
  }

  return (
    <>
      <PatientPageView patients={patients} />
    </>
  );
};

export default AppointmentsPage;
