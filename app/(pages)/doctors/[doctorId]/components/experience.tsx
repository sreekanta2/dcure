import { User } from "@/components/svg";
import { IExperience } from "@/types/doctor";

import { Dot } from "lucide-react";
import Image from "next/image";

interface ExperienceProps {
  experience?: IExperience[];
}
export default function Experience({ experience }: any) {
  return (
    <div className="space-y-5 max-w-5xl py-2   " id="experience">
      <h1 className="text-lg ">Practice Experience</h1>
      {experience?.map((ex: any) => {
        const {
          title,
          organization,
          yearsOfExperience,
          location,
          startDate,
          endDate,
          description,
          currentlyWorking,
          employmentsType,
          thumbnail,
        } = ex;
        return (
          <div
            className="flex flex-col md:flex-row  items-start gap-4 w-full border  p-2 rounded-md bg-card "
            id="experience"
          >
            <div className="p-0 border-b-0 rounded-md overflow-hidden ">
              {thumbnail ? (
                <Image
                  src={thumbnail}
                  alt="jj"
                  width={120}
                  height={120}
                  className="border m-2 rounded-md"
                />
              ) : (
                <div className="w-28 border rounded-md m-2">
                  <User />
                </div>
              )}
            </div>
            <div className="space-y-1 p-0">
              <h1 className="text-lg text-default-800">{title}</h1>

              <div className="flex items-center gap-x-1   text-primary  w-fit    ">
                <span>ENT</span>
                <span>
                  <Dot />
                </span>
                <span>{organization}</span>
                <span>{yearsOfExperience} years</span>
              </div>
              <p className=" text-default-600  ">
                {new Date(startDate).toDateString()} -{" "}
                {(endDate && new Date(endDate).toLocaleDateString()) ||
                  "Current"}
              </p>
              <p>{employmentsType.toUpperCase()}</p>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
