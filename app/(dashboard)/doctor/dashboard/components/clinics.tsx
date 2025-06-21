"use client";
import CustomImage from "@/components/ImageComponent";
import { Icon } from "@iconify/react";
import { ActivityIcon } from "lucide-react";

const Clinics = ({ clinics }: { clinics: any }) => {
  return (
    <div className=" w-full">
      <div className="border p-4 bg-card rounded-md space-y-2">
        <h1 className="text-lg md:text-xl font-medium     bg-card/50 text-default-700      ">
          Clinics Schedules
        </h1>
        <hr className="" />

        <div className="md:max-h-[620px] space-y-4">
          {clinics?.map((item: any, index: number) => (
            <div
              key={`socials-${index}`}
              className="bg-background/50 rounded-md p-2 border"
            >
              {/* Clinic Header and Details */}
              <div className="w-full flex flex-col md:flex-row justify-between items-start gap-3   pb-2">
                {/* Clinic Image and Info */}
                <div className="flex flex-col sm:flex-row w-full items-start gap-3 flex-1">
                  <CustomImage
                    src={item.image}
                    alt={item.name}
                    aspectRatio="1/1"
                    containerClass="w-[109px]"
                    className="rounded-lg"
                  />

                  {/* Clinic Name and Details */}
                  <div className="flex-1">
                    <h1 className="font-medium">
                      {item.name.length > 35
                        ? `${item.name.slice(0, 35)}...`
                        : item.name}
                    </h1>
                    <span className="text-sm text-muted-foreground">
                      $100 per consultation
                    </span>
                    <div className="w-full flex flex-col p-2 rounded-md text-xs gap-2">
                      <span>Tue : 07:00 AM - 09:00 PM</span>
                      <span>Wed : 07:00 AM - 09:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Buttons Aligned to the End */}
                <div className="flex flex-col gap-2 w-full md:w-auto md:max-w-[150px]">
                  <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                    <Icon icon="heroicons:pencil" className="h-4 w-4" />
                    Manege
                  </button>
                  <button className="w-full bg-secondary text-card-foreground py-2 px-2 rounded-lg hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2">
                    <ActivityIcon className="w-4 h-4" />
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clinics;
