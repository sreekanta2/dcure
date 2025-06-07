import BookingHero from "./components/hero";

import { CheckMark } from "@/components/svg";
import { Rating } from "@/components/ui/rating";
import { avatar } from "@/config/user/user.config";
import Image from "next/image";
import Link from "next/link";
import DateSlider from "./components/date-slider";

export default function page({ params }: { params: { doctorId: string } }) {
  const { doctorId } = params;
  return (
    <div>
      <BookingHero doctorId={doctorId} />
      <div className="bg-background pt-8">
        <div className="container space-y-4 my-8">
          <div className="flex flex-col md:flex-row  items-start gap-x-4 p-4 border rounded-md bg-card">
            <div className="p-0 border-b-0 rounded-md overflow-hidden ">
              <Image src={avatar} alt="jj" width={100} height={100} />
            </div>
            <div className="space-y-1 p-0">
              <div>
                <div className="flex items-center gap-x-4">
                  <h1 className="text-lg">
                    <Link href={`/doctors/${1}`}>Jhon doe</Link>
                  </h1>
                  <span className="w-5 h-5">
                    <CheckMark />
                  </span>
                </div>
                <p className="text-xs text-default-600 -mt-1">MBBS, Dentist</p>
              </div>

              <div className="  text-default-600 flex flex-col gap-1">
                <Rating
                  value={parseInt("4")}
                  readOnly
                  className="gap-x-1.5 max-w-[125px]"
                />

                <span>(44) reviews</span>
              </div>
            </div>
          </div>

          <DateSlider />
        </div>
      </div>
    </div>
  );
}
