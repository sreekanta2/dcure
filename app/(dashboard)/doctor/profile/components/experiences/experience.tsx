import CustomImage from "@/components/ImageComponent";
import { Dot } from "lucide-react";
import ExperienceForm from "./experience-form";

export default function Experiences({ experience }: { experience: any }) {
  console.log();
  return (
    <div className="space-y-4">
      {experience?.length &&
        experience.map((experience: any) => (
          <div
            className="  w-full border  p-4 rounded-md bg-card  space-y-2 "
            id="experience"
            key={experience.id}
          >
            <div className="flex flex-col md:flex-row gap-4  ">
              <CustomImage
                src={experience?.thumbnail}
                aspectRatio="1/1"
                alt=""
                containerClass=" w-44"
                className="border w-44 rounded-md"
              />
              <div className="space-y-1 p-0 w-full">
                <h1 className="text-lg text-default-800">
                  {experience?.title}
                </h1>

                <div className="flex items-center gap-x-1   text-info-700  w-fit    ">
                  <span>ENT</span>
                  <span>
                    <Dot />
                  </span>
                  <span>{experience?.organization}</span>
                </div>
                <p className=" text-default-600  ">
                  {new Date().toDateString()} - {new Date().toDateString()}
                </p>
                <p>{experience?.description}</p>
              </div>
            </div>

            <ExperienceForm
              label="Edit experience"
              buttonText="Edit"
              experience={experience}
            />
          </div>
        ))}
      <ExperienceForm label="Add new experiences" buttonText="Add New" />
    </div>
  );
}
