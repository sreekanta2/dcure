import CustomImage from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDoctors } from "@/config/doctors/doctors.config";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

export default async function FavoritesCard() {
  const doctorResponse = await getDoctors({ page: 1, limit: 5 });
  return (
    <Card className="border">
      <CardHeader className="flex-row items-center justify-between border-none pb-0">
        <CardTitle> Favorite Doctors </CardTitle>
      </CardHeader>
      <hr className="my-2" />

      <CardContent className="  space-y-2 max-h-[600px] px-2 ">
        {doctorResponse?.data?.length > 0 &&
          doctorResponse?.data.map((doctor: any) => (
            <div
              className="w-full flex justify-between items-center p-2 border   rounded-md hover:bg-default-200 dark:hover:bg-default-200 transition-all duration-500"
              key={doctor.id}
            >
              <div className="flex gap-3 items-start">
                <CustomImage
                  src={doctor?.user?.image}
                  alt=""
                  containerClass="w-12 h-12  "
                  className="rounded-full"
                  aspectRatio="1/1"
                />
                <Link href={`#`} className="flex flex-col items-start">
                  <h1 className="text-sm font-semibold">
                    {doctor?.user?.name}
                  </h1>
                  <p className="text-gray-500">DID{doctor?.user?.id}</p>
                </Link>
              </div>

              <Button
                size="icon"
                variant="outline"
                className="h-7 w-7 rounded-full"
                color="info"
              >
                <CalendarDays className="h-4 w-4" />
              </Button>
            </div>
          ))}
        <Link
          href="/patient/favorites"
          className=" text-default-700 text-sm hover:text-blue-400  text-center mt-3  flex justify-center  "
        >
          View All
        </Link>
      </CardContent>
    </Card>
  );
}
