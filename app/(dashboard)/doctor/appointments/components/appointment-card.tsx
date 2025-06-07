import CustomImage from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import { Clock, EyeIcon, MessageCircle, Trash } from "lucide-react";
import Link from "next/link";

export default function AppointmentCard({ appointment }: { appointment: any }) {
  return (
    <div
      className=" w-full border flex  gap-4 p-3 rounded-md"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
      }}
    >
      <CustomImage
        src={appointment.image}
        alt={appointment.patientName || ""}
        aspectRatio="1/1"
        containerClass="w-28  "
        className="rounded-md"
      />

      <div className=" space-y-4">
        <Link
          href={`/patient/${1}`}
          className=" font-semibold hover:text-blue-400"
        >
          {appointment.patientName}
        </Link>
        <div>
          <div className="flex gap-x-2 text-sm">
            <Clock size={15} />
            <span className="text-gray-700 dark:text-gray-300 -mt-1">
              02:00 PM - 03:00 PM
            </span>
          </div>
          <h1 className="font-serif ml-6 text-sm">General visit</h1>
        </div>

        <div className="flex gap-x-2  ">
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7 rounded-full"
            color="secondary"
          >
            <EyeIcon className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7 rounded-full"
            color="info"
          >
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-7 w-7 rounded-full"
            color="destructive"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
