import { getPatients } from "@/config/patients/config";
import Appointments from "./components/appointments";
import Clinics from "./components/clinics";
import { clinics } from "./components/data";

import { getAppointments } from "@/config/appointments/appointments.config";
import RecentPatients from "./components/patients-and-invoices/patients-component";
import ReportsSnapshot from "./components/reports-snapshot";

const DashboardPageView = async () => {
  const patients = await getPatients({ page: 1, limit: 3 });
  const appointments = await getAppointments({ page: 1, limit: 3 });
  return (
    <div className="space-y-6 bg-card/50 backdrop-blur-lg shadow-md dark:bg-card/70 p-4 rounded-md">
      <div className="text-2xl font-medium text-default-800 ">
        Analytics dashboard
      </div>

      <ReportsSnapshot />

      {/* clinic and appointments */}
      <div className=" flex flex-col md:flex-row gap-4">
        <Clinics clinics={clinics} />

        <RecentPatients patients={patients} />
      </div>

      <Appointments appointments={appointments} />
    </div>
  );
};

export default DashboardPageView;
