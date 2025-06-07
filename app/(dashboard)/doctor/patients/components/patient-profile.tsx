import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCircleIcon } from "lucide-react";
import AppointmentTable from "./patient/appointments-table";
import MedicalRecordsTable from "./patient/medical-records-table";
import PrescriptionsTable from "./patient/prescription-table";

export default function ProfileDetails() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full bg-secondary text-card-foreground py-2 px-2 rounded-lg hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2">
          <UserCircleIcon className="w-4 h-4" />
          View Profile
        </button>
      </DialogTrigger>
      <DialogContent size="5xl" className="max-h-[90vh] overflow-y-auto">
        <div className="w-full flex justify-between p-8 shadow mt-4 border ">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src={"/images/doctor-profile/doctor-18.jpg"}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <label
                htmlFor="profile-picture"
                className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <input type="file" id="profile-picture" className="hidden" />
            </div>
            <div className="flex-1">
              <DialogTitle>Jhondow</DialogTitle>
              <h1>Age : 42 Male AB+ve</h1>
            </div>
          </div>
          <div>
            <p>Last booking</p>
            <p>3.00pm</p>
          </div>
        </div>
        <hr className="my-4" />
        <ScrollArea className="  w-full ">
          <Tabs defaultValue="appointments">
            <TabsList className="bg-transparent flex flex-wrap justify-start h-auto gap-4">
              <TabsTrigger
                value="appointments"
                className="h-10 px-4 bg-primary/10 hover:text-blue-500 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Appointments
              </TabsTrigger>
              <TabsTrigger
                value="medical-records"
                className="h-10 px-4 bg-primary/10 hover:text-blue-500 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Medical Records
              </TabsTrigger>
              <TabsTrigger
                value="prescriptions"
                className="h-10 px-4 bg-primary/10 hover:text-blue-500 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Prescriptions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appointments">
              <AppointmentTable />
            </TabsContent>
            <TabsContent value="medical-records">
              <MedicalRecordsTable />
            </TabsContent>
            <TabsContent value="prescriptions">
              <PrescriptionsTable />
            </TabsContent>
          </Tabs>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
