import CustomImage from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { MapPin, User } from "lucide-react";
import Link from "next/link";

export default function FavouritesDoctorCard({ doctor }: { doctor: any }) {
  return (
    <Card className="bg-card shadow-lg rounded-lg p-2 text-left border">
      <CardHeader className="p-0 border-b-0">
        <div className="w-full   relative overflow-hidden border rounded-md">
          <CustomImage
            src={doctor?.user.image}
            alt={doctor?.user.name}
            className="object-cover cursor-pointer duration-500 hover:scale-110 transition-transform group-hover:opacity-50 rounded-md"
            aspectRatio="1/1"
          />
        </div>
      </CardHeader>
      <CardContent className="p-0 space-y-2">
        <div className="flex items-center gap-x-2">
          <Rating
            value={doctor?.rating} // Use dynamic rating
            readOnly
            className="gap-x-1.5 max-w-[120px]"
          />
          <span className="px-1 bg-primary rounded-md text-primary-foreground">
            {doctor?.reviews[0]?.rating?.toFixed(1)}{" "}
            {/* Ensure proper formatting */}
          </span>
        </div>
        <Link href={`/doctors/${doctor.id}`}>
          <CardTitle className="text-base lg:text-xl">
            {doctor?.user.name}
          </CardTitle>
        </Link>

        <div className="text-xs space-y-1">
          <p className="text-sm text-default-400">{doctor.qualification}</p>
          <p className="flex items-center gap-2">
            <MapPin size={14} />
            <span>{doctor.addresses.address}</span>
          </p>
          <p className="flex items-center gap-2">
            <User size={14} />
            <span>{doctor.consultations} Consultations</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2 p-0  mt-4">
        <Button variant="soft" color="primary" className="text-primary">
          <Link href={`/doctors/${doctor.id}/booking`}>Book Now</Link>
        </Button>
        <Button variant="soft" color="primary" className="text-primary">
          <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
