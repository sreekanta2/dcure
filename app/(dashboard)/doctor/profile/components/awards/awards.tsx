import { BookmarkPlusIcon } from "lucide-react";
import AwardsForm from "./award-form";

export default function Awards({ awards }: { awards: any }) {
  return (
    <div className="">
      <div className="space-y-4">
        {awards?.length > 0 &&
          awards.map((award: any) => (
            <div
              key={award.id}
              className="flex flex-col md:flex-row  group justify-between gap-4 items-start w-full max-w-1/2 h-full border rounded-md flex-shrink-0 py-4  px-6 gap-x-4  relative   bg-card"
            >
              <div className="   ">
                <span className="w-8 h-8 rounded-full flex items-center justify-center border bg-success text-primary-foreground">
                  <BookmarkPlusIcon size={18} />
                </span>
                <h1 className="text-lg">{award?.name} (2021)</h1>
                <h1 className="font-medium text-primary">
                  {award?.organization}
                </h1>
                <p>{award?.description}</p>
              </div>

              <AwardsForm label="Edit Award" buttonText="Edit" />
            </div>
          ))}
        <AwardsForm label="Add Award" buttonText="Add Award" />
      </div>
    </div>
  );
}
