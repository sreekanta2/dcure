import CustomImage from "@/components/ImageComponent";
import { avatar } from "@/config/user/user.config";
import {
  CakeIcon,
  DropletIcon,
  MessageCircleIcon,
  ScaleIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import ProfileDetails from "../patients/components/patient-profile";

export default function PatientCard({ patient }: { patient: any }) {
  return (
    <div className="bg-background/50 rounded-lg border shadow-sm hover:shadow-md transition-shadow p-4">
      {/* Patient Header and Details */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-4">
        {/* Patient Image and Info */}
        <div className="flex flex-col  sm:flex-row items-start gap-4 flex-1">
          {/* Patient Image */}
          <CustomImage
            src={patient?.image || avatar}
            alt={patient?.name || ""}
            aspectRatio="1/1"
            containerClass="w-[110px] "
            className="rounded-lg w-24"
          />

          {/* Patient Details */}
          <div className="flex-1">
            {/* Patient Name */}
            <h1 className="text-xl font-semibold text-card-foreground">
              {patient.name}
            </h1>

            {/* Basic Info */}
            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <UserIcon className="w-4 h-4" />
                <span>{patient.gender}</span>
              </div>
              <div className="flex items-center gap-2">
                <CakeIcon className="w-4 h-4" />
                <span>{patient.dateOfBirth}</span>
              </div>
              <div className="flex items-center gap-2">
                <DropletIcon className="w-4 h-4" />
                <span>Blood Group: {patient.bloodGroup}</span>
              </div>
              <div className="flex items-center gap-2">
                <ScaleIcon className="w-4 h-4" />
                <span>Weight: {patient.weight} kg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons Aligned to the End */}
        <div className="flex flex-col gap-2 w-full  lg:max-w-[130px]">
          <Link href={"/doctor/chat"}>
            <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              {" "}
              <MessageCircleIcon className="w-4 h-4" />
              Send SMS
            </button>
          </Link>
          <ProfileDetails />
        </div>
      </div>

      {/* Additional Details */}
    </div>
  );
}
