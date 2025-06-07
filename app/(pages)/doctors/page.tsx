import Pagination from "@/components/PaginationComponents";
import { CheckMark, User } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { getDoctors } from "@/config/doctors/doctors.config";
import { Bookmark, ChevronDown, Clock, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "../../../components/hero";
import FilterForm from "./components/doctors-filtering-form";
interface DoctorFilterParams {
  name?: string;
  gender?: string;
  specialty?: string;
  location?: string;
}
export default async function DoctorsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // If searchParams is a plain object, get the page param
  const page = parseInt(searchParams.page || "1", 10);
  const specialty = searchParams.specialty || "";
  const name = searchParams.name || "";
  const gender = searchParams.gender || "";
  const language = searchParams.language || "";
  const filter = {
    name,
    gender,
    language,
    specialty,
  };
  const limit = 10;
  console.log(specialty);

  // Fetch doctors data based on page and limit
  const doctorsResponse = await getDoctors({ page, limit, filter });

  return (
    <>
      <Hero
        title={<span className="text-primary">Search Doctor</span>}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
      />
      <section className="bg-background">
        <div className="container mx-auto relative  px-6 py-8  ">
          {/* Sidebar Filter */}

          <FilterForm />

          {/* Doctors List */}
          <div className="w-full">
            <h1 className="text-lg">
              Showing{" "}
              <span className="text-primary font-bold">
                {doctorsResponse?.pagination?.totalRecords}
              </span>{" "}
              Doctors For You
            </h1>

            <div className="my-4 space-y-4 ">
              {doctorsResponse?.data?.map((doctor: any) => (
                <div className="border bg-card rounded-md shadow-md overflow-hidden">
                  <div
                    key={doctor.id}
                    className="w-full grid grid-cols-1 lg:grid-cols-4"
                  >
                    {/* Main Content (Left Side) */}
                    <div className="w-full col-span-4 flex flex-col sm:flex-row     gap-4 p-4">
                      {/* Image Container */}
                      <div className="relative h-[120px] w-[120px] min-w-[120px] aspect-square">
                        {doctor?.user?.image ? (
                          <Image
                            src={doctor?.user?.image}
                            alt={doctor?.user?.name || doctor?.displayName}
                            fill
                            className="rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-full h-full p-2 rounded-md border flex items-center justify-center bg-default-70">
                            <User className="w-1/2 h-1/2 text-default-700" />
                          </div>
                        )}
                      </div>

                      {/* Doctor Info */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-xl sm:text-2xl font-medium">
                            <Link href={`/doctors/${doctor.id}`}>
                              {doctor?.user?.name || doctor?.displayName}
                            </Link>
                          </CardTitle>
                          <span className="w-5 h-5 text-blue-500 flex-shrink-0">
                            <CheckMark />
                          </span>
                        </div>

                        <p className="text-sm sm:text-base text-default-700">
                          MBBS, BCS (Health), MS (Ortho), MRCS (Edinburgh), MRCS
                          (England), FACS (USA)
                        </p>

                        <h3 className="text-lg font-medium text-primary-600">
                          Mymensingh Medical College & Hospital
                        </h3>

                        <div className="pt-2 flex gap-2 sm:gap-8 items-center">
                          <Button
                            variant="outline"
                            color="primary"
                            size="sm"
                            className="w-fit"
                          >
                            <Link href={`#`}>Website</Link>
                          </Button>
                          <Button
                            variant="outline"
                            color="primary"
                            size="sm"
                            className="w-fit"
                          >
                            <Link href={`/doctors/1`}>Chambers</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Actions & Additional Info */}
                  <div className="border-t p-4 lg:hidden">
                    <div className=" flex flex-col sm:flex-row  justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock size={14} />
                          <span>0.9 mi - New York, USA</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <ThumbsUp size={14} />
                          <span>98% (252 Votes)</span>
                        </div>
                      </div>

                      <Button
                        type="button"
                        variant="soft"
                        color="info"
                        className=" w-full sm:w-fit"
                      >
                        <Link href={`/doctors/1`}>Book Appointment</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Footer - Clinic Info */}
                  <div className="border-t p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    {/* Rating Info */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="text-primary">●</span>
                        <h1>Patient Rating:</h1>
                        <Rating
                          value={4}
                          readOnly
                          className="gap-x-1.5 max-w-[125px]"
                        />{" "}
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="text-primary">●</span>

                        <span>43 Reviews</span>
                        <ChevronDown className="w-4 h-4 text-default-700" />
                      </div>

                      <div>
                        <span className="text-primary">●</span>
                        <span> 21+ Years of Experience</span>
                      </div>

                      <div className="hidden sm:flex items-center gap-1">
                        <span className="text-primary hidden sm:inline">●</span>
                        <span className="hidden sm:inline">1 Language</span>
                      </div>
                    </div>

                    {/* Save Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-primary border-primary hover:bg-primary/10"
                    >
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>
              ))}

              {/* Pagination Component */}
              {doctorsResponse?.pagination?.totalRecords >
                doctorsResponse?.pagination?.perPage && (
                <div className="mt-24">
                  <Pagination
                    scrollTarget="top"
                    currentPage={doctorsResponse?.pagination?.currentPage}
                    totalPages={doctorsResponse?.pagination?.totalPages}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
