import { ITreatment } from "@/types/doctor";

interface TreatmentProps {
  treatments: ITreatment[];
}
export default function Treatment({ treatments }: any) {
  return (
    <div className="space-y-5" id="specialty">
      <h1 className="text-lg">Specialty & Pricing</h1>
      <div className=" flex gap-4 flex-wrap">
        {treatments.map((treatment: any) => (
          <div
            key={`treatment-${treatment.id}`}
            className="bg-muted  rounded-md text-default-700"
          >
            <div className="px-4 py-4 rounded-md flex flex-col items-start ">
              <div className="flex item-center gap-4 text-default-700">
                <span> {treatment?.specialty?.name || ""}</span>
                <span>${treatment?.price}</span>
              </div>
              {/* <p>{specialty.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
