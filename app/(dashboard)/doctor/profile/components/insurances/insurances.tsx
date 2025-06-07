import CustomImage from "@/components/ImageComponent";
import InsuranceForm from "./insurance-form";

export default function Insurance({ insurances }: { insurances: any }) {
  return (
    <div className="space-y-4">
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {insurances?.length > 0 &&
          insurances.map((insurance: any) => (
            <div
              key={insurance}
              className="relative w-full h-full border rounded-md   gap-2  p-2  flex justify-center md:flex-row bg-card"
            >
              <div>
                <CustomImage
                  src={insurance.thumbnail}
                  alt=""
                  aspectRatio="16/9"
                  containerClass=""
                  className="rounded-md"
                />
                <h1 className="mt-2 font-medium">{insurance?.name}</h1>
              </div>
              <InsuranceForm
                label="Edit"
                buttonText="Edit"
                className="absolute top-2 right-2"
              />
            </div>
          ))}
      </div>
      <InsuranceForm label="Add Insurance" buttonText="Add New" />
    </div>
  );
}
