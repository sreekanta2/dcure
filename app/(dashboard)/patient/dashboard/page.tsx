import CustomImage from "@/components/ImageComponent";
import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import LimitSelect from "@/components/limit-select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { getDoctors } from "@/config/doctors/doctors.config";
import { cn } from "@/lib/utils";
import { MapPin, User, UserX } from "lucide-react";
import Link from "next/link";
import FavouritesDoctorCard from "./components/favourite-doctor-card";

const tabsTrigger = [
  {
    value: "all",
    text: "Booked Appointments",
    total: "5",
    color: "primary",
  },
  {
    value: "event",
    text: "Medical Records",
    total: "12",
    color: "warning",
  },
  {
    value: "conversation",
    text: "conversations",
    total: "21",
    color: "success",
  },
];

const PatientDashboardPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = parseInt(searchParams?.page || "1", 10);
  const limit = parseInt(searchParams?.limit || "8", 10);

  // Fetch doctors data based on page and limit
  const doctors = await getDoctors({ page, limit });
  return (
    <div className="space-y-14    rounded-md">
      {/* <!-- Stats Overview Section --> */}
      <section>
        <h2 className="sr-only">Statistics Overview</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 justify-start w-full bg-transparent h-full">
          {tabsTrigger.map((item, index) => (
            <article
              key={`report-trigger-${index}`}
              className={cn(
                "flex flex-col gap-1.5 p-4 overflow-hidden items-start relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden data-[state=active]:shadow-none data-[state=active]:before:block",
                {
                  "bg-primary/30 data-[state=active]:bg-primary/30 dark:bg-primary/70":
                    item.color === "primary",
                  "bg-orange-50 data-[state=active]:bg-orange-50 dark:bg-orange-500":
                    item.color === "warning",
                  "bg-green-50 data-[state=active]:bg-green-50 dark:bg-green-500":
                    item.color === "success",
                  "bg-cyan-50 data-[state=active]:bg-cyan-50 dark:bg-cyan-500 ":
                    item.color === "info",
                }
              )}
            >
              <span
                className={cn(
                  "h-10 w-10 rounded-full bg-primary/40 absolute -top-3 -right-3 ring-8 ring-primary/30",
                  {
                    "bg-primary/50 ring-primary/20 dark:bg-primary dark:ring-primary/40":
                      item.color === "primary",
                    "bg-orange-200 ring-orange-100 dark:bg-orange-300 dark:ring-orange-400":
                      item.color === "warning",
                    "bg-green-200 ring-green-100 dark:bg-green-300 dark:ring-green-400":
                      item.color === "success",
                    "bg-cyan-200 ring-cyan-100 dark:bg-cyan-300 dark:ring-cyan-400":
                      item.color === "info",
                  }
                )}
                aria-hidden="true"
              ></span>
              <h3 className="text-sm text-default-800 dark:text-primary-foreground font-semibold capitalize relative z-10">
                {item.text}
              </h3>
              <p className="text-lg font-semibold text-primary/80 dark:text-primary-foreground">
                {item.total}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* <!-- Booked Doctors Section --> */}
      <section>
        <Card>
          <CardHeader className="border-none pb-0">
            <div className="flex flex-col md:flex-row items-center flex-wrap justify-between gap-4">
              <CardTitle>Booked Appointment Doctors</CardTitle>
              <div className="flex w-full flex-wrap md:flex-nowrap lg:w-fit gap-4">
                <SearchInput searchParamKey="q" className="w-full max-w-2xl" />
                <LimitSelect />
              </div>
            </div>
          </CardHeader>
          <hr className="my-2" />

          <CardContent className="p-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {doctors?.data?.length > 0 ? (
                doctors?.data?.map((doctor: any) => (
                  <Card
                    key={doctor.id}
                    className="bg-card shadow-lg rounded-lg p-4 text-left border"
                  >
                    <CardHeader className="p-0 border-b-0">
                      <figure className="w-full relative overflow-hidden border rounded-md">
                        <CustomImage
                          src={doctor?.user.image}
                          alt={`Profile picture of ${doctor?.user.name}`}
                          className="object-cover cursor-pointer duration-500 hover:scale-110 transition-transform group-hover:opacity-50 rounded-md"
                          aspectRatio="1/1"
                        />
                      </figure>
                    </CardHeader>
                    <CardContent className="p-0 space-y-2">
                      <div className="flex items-center gap-x-2">
                        <Rating
                          value={doctor?.rating}
                          readOnly
                          className="gap-x-1.5 max-w-[120px]"
                        />
                        <span className="px-1 bg-primary rounded-md text-primary-foreground">
                          {doctor?.reviews[0]?.rating?.toFixed(1)}
                        </span>
                      </div>
                      <Link href={`/doctors/${doctor.id}`}>
                        <CardTitle className="text-base lg:text-xl">
                          {doctor?.user.name}
                        </CardTitle>
                      </Link>

                      <div className="text-xs space-y-1">
                        <p className="text-sm text-default-400">
                          {doctor.qualification}
                        </p>
                        <address className="flex items-center gap-2 not-italic">
                          <MapPin size={14} />
                          <span>{doctor.addresses.address}</span>
                        </address>
                        <p className="flex items-center gap-2">
                          <User size={14} />
                          <span>{doctor.consultations} Consultations</span>
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="grid grid-cols-2 gap-2 p-0 mt-4">
                      <Button
                        variant="soft"
                        color="primary"
                        className="text-primary"
                        asChild
                      >
                        <Link href={`/patient/dashboard/${doctor?.user.name}`}>
                          View Reports
                        </Link>
                      </Button>
                      <Button
                        variant="soft"
                        color="primary"
                        className="text-primary"
                        asChild
                      >
                        <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <p className="col-span-full text-center">
                  No completed doctors found!
                </p>
              )}
            </div>
            {doctors?.pagination?.totalRecords >
              doctors?.pagination?.perPage && (
              <nav className="mt-4" aria-label="Pagination">
                <Pagination
                  currentPage={doctors?.pagination?.currentPage}
                  totalPages={doctors?.pagination?.totalPages}
                />
              </nav>
            )}
          </CardContent>
        </Card>
      </section>

      {/* <!-- Favorite Doctors Section --> */}
      <section
        className="py-4 bg-card rounded-lg shadow-sm border "
        aria-labelledby="favorite-doctors-heading"
      >
        <header className="p-4 pb-0">
          <div className="flex flex-col md:flex-row items-center flex-wrap justify-between gap-4">
            <h2
              id="favorite-doctors-heading"
              className="text-xl font-semibold text-default-900"
            >
              Favorite Doctors
            </h2>
            <div className="flex w-full flex-wrap md:flex-nowrap lg:w-fit gap-4">
              <SearchInput
                searchParamKey="q"
                className="w-full max-w-2xl"
                aria-label="Search favorite doctors"
              />
              <LimitSelect aria-label="Items per page" />
            </div>
          </div>
        </header>

        <hr className="my-4 border-default-200" />

        <div className="p-4 space-y-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {doctors?.data?.length > 0 ? (
              doctors.data.map((doctor: any) => (
                <li
                  key={doctor.id}
                  className="bg-card rounded-lg shadow-sm border border-default-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <FavouritesDoctorCard doctor={doctor} />
                </li>
              ))
            ) : (
              <li className="col-span-full">
                <div className="text-center p-8">
                  <UserX className="mx-auto h-12 w-12 text-default-400" />
                  <h3 className="mt-2 text-lg font-medium text-default-900">
                    No favorite doctors
                  </h3>
                  <p className="mt-1 text-default-500">
                    You haven't added any doctors to your favorites yet.
                  </p>
                </div>
              </li>
            )}
          </ul>

          {doctors?.pagination?.totalRecords > doctors?.pagination?.perPage && (
            <nav className="mt-6" aria-label="Favorite doctors pagination">
              <Pagination
                currentPage={doctors.pagination.currentPage}
                totalPages={doctors.pagination.totalPages}
              />
            </nav>
          )}
        </div>
      </section>
    </div>
  );
};

export default PatientDashboardPage;
