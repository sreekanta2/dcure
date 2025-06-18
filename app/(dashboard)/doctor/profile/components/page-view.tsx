import Loader from "@/components/loader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDoctor } from "@/config/doctors/doctors.config";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Language from "./language";

interface DoctorSettingPageViewProps {
  trans: {
    [key: string]: string;
  };
}

const DoctorSettingsPageView = async ({
  trans,
}: DoctorSettingPageViewProps) => {
  const tabKeys = Object.keys(trans);

  // Dynamically import each component

  const BasicDetails = dynamic(() => import("./basic-details"), {
    loading: () => <Loader />,
  });
  const Experience = dynamic(() => import("./experiences/experience"), {
    loading: () => <Loader />,
  });
  const Awards = dynamic(() => import("./awards/awards"), {
    loading: () => <Loader />,
  });
  const Insurances = dynamic(() => import("./insurances/insurances"), {
    loading: () => <Loader />,
  });

  const doctor = await getDoctor("1", 1, 5);
  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="space-y-6  bg-card p-6 rounded-md">
      <h1 className="text-xl">Profile settings</h1>
      <hr className="my-4 " />
      <div className=" w-full">
        <Tabs defaultValue="basic-details">
          <TabsList className="bg-transparent flex flex-wrap justify-start h-auto gap-4">
            {tabKeys.map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="h-10 px-4 bg-primary/10 hover:text-blue-500 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {trans[key]}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Tabs Content */}
          <TabsContent value="basic-details" className="mt-4">
            {doctor?.data?.user && doctor?.data.addresses && (
              <BasicDetails
                user={doctor.data?.user}
                address={doctor?.data?.addresses}
              />
            )}
          </TabsContent>
          <TabsContent value="experience" className="mt-4">
            <Suspense fallback={<Loader />}>
              {doctor?.data?.experience && (
                <Experience experience={doctor?.data?.experience} />
              )}
            </Suspense>
          </TabsContent>
          <TabsContent value="awards" className="mt-4">
            <Suspense fallback={<Loader />}>
              {doctor?.data?.awards && <Awards awards={doctor?.data?.awards} />}
            </Suspense>
          </TabsContent>
          <TabsContent value="insurances" className="mt-4">
            <Suspense fallback={<Loader />}>
              {doctor?.data?.insurances && (
                <Insurances insurances={doctor?.data?.insurances} />
              )}
            </Suspense>
          </TabsContent>
          <TabsContent value="language" className="mt-4">
            <Suspense fallback={<Loader />}>
              <Language />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DoctorSettingsPageView;
