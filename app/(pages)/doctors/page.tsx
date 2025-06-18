import Pagination from "@/components/PaginationComponents";
import { CheckMark, User } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { getDoctors } from "@/config/doctors/doctors.config";
import { Bookmark, ChevronDown } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "../../../components/hero";
import FilterForm from "./components/doctors-filtering-form";

// Structured Data Component
function StructuredData({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Generate dynamic metadata
export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}): Promise<Metadata> {
  const specialty = searchParams.specialty || "";
  const location = searchParams.location || "";

  return {
    title: `${specialty ? specialty + " " : ""}Doctors Near ${
      location || "You"
    } | Book Online`,
    description: `Find and book appointments with ${
      specialty || "qualified"
    } doctors ${
      location ? "in " + location : "near you"
    }. Read patient reviews and ratings.`,
    alternates: {
      canonical: `https://yourdomain.com/doctors${
        specialty || location
          ? "?" + new URLSearchParams(searchParams).toString()
          : ""
      }`,
    },
    openGraph: {
      title: `${specialty ? specialty + " " : ""}Doctors Near ${
        location || "You"
      }`,
      description: `Find and book ${
        specialty || "medical"
      } specialists online ${location ? "in " + location : ""}`,
    },
    twitter: {
      title: `${specialty ? specialty + " " : ""}Doctors Near ${
        location || "You"
      }`,
    },
    keywords: [
      "find doctors",
      "book doctor appointment",
      ...(specialty ? [specialty + " near me"] : []),
      ...(location ? ["doctors in " + location] : []),
    ],
  };
}

export default async function DoctorsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const specialty = searchParams.specialty || "";
  const name = searchParams.name || "";
  const gender = searchParams.gender || "";
  const language = searchParams.language || "";
  const location = searchParams.location || "";

  const filter = { name, gender, language, specialty, location };
  const limit = 10;

  const doctorsResponse = await getDoctors({ page, limit, filter });

  return (
    <>
      <Hero
        title={<span className="text-primary">Search Doctor</span>}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
      />

      <section className="bg-background">
        <div className="container   relative   py-8">
          <FilterForm />

          <article className="w-full">
            <header>
              <h1 className="text-lg font-semibold">
                Showing{" "}
                <span className="text-primary font-bold">
                  {doctorsResponse?.pagination?.totalRecords}
                </span>{" "}
                Doctors Matching Your Criteria
              </h1>
              <p className="text-sm text-default-600 mt-1">
                {specialty && (
                  <span>
                    Specialty: <strong>{specialty}</strong>{" "}
                  </span>
                )}
                {location && (
                  <span>
                    Location: <strong>{location}</strong>
                  </span>
                )}
              </p>
            </header>

            <div className="my-4 space-y-4">
              {doctorsResponse?.data?.map((doctor: any, index: number) => (
                <article
                  key={doctor.id}
                  className="border bg-card rounded-md shadow-md overflow-hidden"
                  itemScope
                  itemType="https://schema.org/Physician"
                >
                  <meta
                    itemProp="@id"
                    content={`https://yourdomain.com/doctors/${doctor.id}`}
                  />
                  <meta
                    itemProp="medicalSpecialty"
                    content={doctor.specialties?.[0] || "General Practice"}
                  />

                  <div className="w-full grid grid-cols-1 lg:grid-cols-4">
                    <div className="w-full col-span-4 flex flex-col sm:flex-row gap-4 p-4">
                      <figure className="relative h-[120px] w-[120px] min-w-[120px] aspect-square">
                        {doctor?.user?.image ? (
                          <Image
                            src={doctor?.user?.image}
                            alt={`Dr. ${
                              doctor?.user?.name || doctor?.displayName
                            }, ${doctor.specialties?.[0] || "Doctor"}`}
                            fill
                            className="rounded-lg object-cover"
                            itemProp="image"
                            sizes="(max-width: 768px) 100vw, 120px"
                          />
                        ) : (
                          <div className="w-full h-full p-2 rounded-md border flex items-center justify-center bg-default-70">
                            <User className="w-1/2 h-1/2 text-default-700" />
                          </div>
                        )}
                      </figure>

                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2
                            className="text-xl sm:text-2xl font-medium"
                            itemProp="name"
                          >
                            <Link
                              href={`/doctors/${doctor.id}`}
                              itemProp="url"
                              className="hover:underline"
                            >
                              Dr. {doctor?.user?.name || doctor?.displayName}
                            </Link>
                          </h2>
                          <span
                            className="w-5 h-5 text-blue-500 flex-shrink-0"
                            aria-label="Verified doctor"
                          >
                            <CheckMark />
                          </span>
                        </div>

                        <p
                          className="text-sm sm:text-base text-default-700"
                          itemProp="description"
                        >
                          {doctor.specialties?.join(", ") ||
                            "MBBS, BCS (Health), MS (Ortho)"}
                        </p>

                        <h3
                          className="text-lg font-medium text-primary-600"
                          itemProp="affiliation"
                        >
                          {doctor.hospital ||
                            "Mymensingh Medical College & Hospital"}
                        </h3>

                        <div className="pt-2 flex gap-2 sm:gap-8 items-center">
                          <Button
                            asChild
                            variant="outline"
                            color="primary"
                            size="sm"
                            className="w-fit"
                          >
                            <Link
                              href={`#`}
                              aria-label="Visit doctor's website"
                            >
                              Website
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            color="primary"
                            size="sm"
                            className="w-fit"
                          >
                            <Link
                              href={`/doctors/${doctor.id}`}
                              aria-label="View doctor's chambers"
                            >
                              Chambers
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <footer className="border-t p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                      <div
                        className="flex items-center gap-1"
                        itemProp="aggregateRating"
                        itemScope
                        itemType="https://schema.org/AggregateRating"
                      >
                        <span className="text-primary">●</span>
                        <span>Patient Rating:</span>
                        <Rating
                          value={doctor.rating || 4}
                          readOnly
                          className="gap-x-1.5 max-w-[125px]"
                        />
                        <meta
                          itemProp="ratingValue"
                          content={doctor.rating?.toString() || "4"}
                        />
                        <meta itemProp="bestRating" content="5" />
                        <meta
                          itemProp="reviewCount"
                          content={doctor.reviewCount?.toString() || "43"}
                        />
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="text-primary">●</span>
                        <span>{doctor.reviewCount || 43} Reviews</span>
                        <ChevronDown className="w-4 h-4 text-default-700" />
                      </div>

                      <div itemProp="yearsOfExperience">
                        <span className="text-primary">● </span>
                        <span> {21}+ Years of Experience</span>
                      </div>

                      {doctor.languages && (
                        <div className="hidden sm:flex items-center gap-1">
                          <span className="text-primary">●</span>
                          <span>
                            {doctor.languages.length} Language
                            {doctor.languages.length !== 1 ? "s" : ""}
                          </span>
                        </div>
                      )}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="  dark:hover:text-white"
                      aria-label="Save doctor to favorites"
                    >
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </footer>
                </article>
              ))}

              {doctorsResponse?.pagination?.totalRecords >
                doctorsResponse?.pagination?.perPage && (
                <nav className="mt-24" aria-label="Pagination navigation">
                  <Pagination
                    scrollTarget="top"
                    currentPage={doctorsResponse?.pagination?.currentPage}
                    totalPages={doctorsResponse?.pagination?.totalPages}
                  />
                </nav>
              )}
            </div>
          </article>

          <StructuredData
            data={{
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: doctorsResponse?.data?.map(
                (doctor: any, index: number) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: {
                    "@type": "Physician",
                    name: `Dr. ${doctor?.user?.name || doctor?.displayName}`,
                    url: `https://yourdomain.com/doctors/${doctor.id}`,
                    image: doctor?.user?.image,
                    medicalSpecialty:
                      doctor.specialties?.[0] || "General Practice",
                    hospitalAffiliation:
                      doctor.hospital ||
                      "Mymensingh Medical College & Hospital",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "New York",
                      addressRegion: "NY",
                      addressCountry: "USA",
                    },
                    aggregateRating: {
                      "@type": "AggregateRating",
                      ratingValue: doctor.rating || 4,
                      reviewCount: doctor.reviewCount || 43,
                      bestRating: "5",
                    },
                    priceRange: "$$$",
                  },
                })
              ),
            }}
          />
        </div>
      </section>
    </>
  );
}
