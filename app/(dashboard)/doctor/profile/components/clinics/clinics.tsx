// import BasicMap from "@/components/maps-google/basic-map";
import CustomImage from "@/components/ImageComponent";
import BasicMap from "@/components/maps-google/basic-map";
import ClinicForm from "./clinic-form";

export default function Clinics({ clinics }: { clinics: any }) {
  return (
    <div id="clinics" className="space-y-4">
      <div className="  w-full space-y-4">
        {clinics?.length > 0 &&
          clinics.map((clinic: any) => (
            <div
              className=" flex flex-col lg:flex-row  border   rounded-md justify-between gap-8 p-4 bg-card"
              key={clinic.id}
            >
              <div className=" w-full space-y-4 ">
                <div className="flex flex-col md:flex-row  items-start gap-4   ">
                  <CustomImage
                    aspectRatio="1/1"
                    src={clinic?.thumbnail}
                    className="rounded-md"
                    alt={""}
                    containerClass="w-52 "
                  />

                  <div className="w-full space-y-4">
                    <div className="space-y-1 p-0">
                      <h1 className="text-lg text-default-800">
                        {clinic.name}
                      </h1>

                      <p className="text-info">${clinic.price} / Appointment</p>
                      <p>{clinic.address}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4  ">
                  <div className="border  w-full py-4 text-center rounded-md">
                    <h1 className="text-lg ">Monday</h1>
                    <p> 9.00am - 3.00pm</p>
                  </div>
                  <div className="border py-4 w-full text-center rounded-md">
                    <h1 className="text-lg">Saturday </h1>
                    <p> 9.00am - 6.00pm</p>
                  </div>
                </div>
              </div>

              <BasicMap height={250} />
            </div>
          ))}
      </div>
      <ClinicForm label="Add New Clinic" buttonText="Add New" />
      <ClinicForm label="Add New Clinic" buttonText="Edit  " />
    </div>
  );
}
