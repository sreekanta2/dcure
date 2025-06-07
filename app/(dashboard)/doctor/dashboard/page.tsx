import DatePickerWithRange from "@/components/date-picker-with-range";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Appointments from "./components/appointments";
import Clinics from "./components/clinics";

import RecentPatients from "./components/patients-and-invoices/patients-component";
import ReportsSnapshot from "./components/reports-snapshot";
import UserDeviceReport from "./components/user-device-report";
import UserStats from "./components/user-stats-chart";
import UsersStat from "./components/users-stat";

const DashboardPageView = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">
          Analytics dashboard
        </div>
        <DatePickerWithRange />
      </div>
      {/* reports area */}
      <div className="grid grid-cols-12  gap-6 ">
        <div className="col-span-12 lg:col-span-8">
          <ReportsSnapshot />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <UsersStat />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="border-none p-6 pt-5 mb-0">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              Paid and Refund
            </CardTitle>
          </CardHeader>
          <CardContent>
            <UserStats />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-none p-6 pt-5 mb-0">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              Device Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="dashtail-legend">
              <UserDeviceReport />
            </div>
          </CardContent>
        </Card>
      </div>
      {/* clinic and appointments */}
      <div className="grid grid-cols-12 gap-6 items-stretch">
        {" "}
        {/* Add items-stretch */}
        <div className="col-span-12 lg:col-span-6 h-full">
          <Clinics />
        </div>
        <div className="col-span-12 lg:col-span-6 h-full">
          <Appointments />
        </div>
      </div>

      {/* recent patients and invoices */}

      <div className="grid grid-cols-12 gap-6 ">
        <div className="col-span-12 lg:col-span-6  ">
          <RecentPatients />
        </div>
      </div>
    </div>
  );
};

export default DashboardPageView;
