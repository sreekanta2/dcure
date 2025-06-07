import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";

export default function PatientDetails() {
  const MedicalRecordsTable = dynamic(() => import("./medical-records-table"));
  const PrescriptionTable = dynamic(() => import("./prescription-table"));
  return (
    <div className="w-full border p-6 rounded-md">
      <h1 className="text-xl font-semibold">Reports</h1>
      <hr className="my-4" />

      <Tabs defaultValue="prescription">
        <TabsList className="bg-transparent flex flex-wrap justify-start h-auto gap-4">
           
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

        
        <TabsContent value="medical-records">
          <MedicalRecordsTable />
        </TabsContent>
        <TabsContent value="prescriptions">
          <PrescriptionTable />
        </TabsContent>
         
      </Tabs>
    </div>
  );
}
