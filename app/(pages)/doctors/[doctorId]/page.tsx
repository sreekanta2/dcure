import { CheckMark, User } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/rating";
import { getDoctor } from "@/config/doctors/doctors.config";
import { Bookmark, Clock, ThumbsUp } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClinicCard from "./components/clinic-card";
import DoctorHero from "./components/hero";
import ReviewForm from "./components/review-form";
import ReviewPage from "./components/review-page";

// Structured Data Component
function StructuredData({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const demoClinics = [
  {
    id: "clinic-1",
    name: "City Heart Center",
    price: 120,
    address: "Dinajpur 5200",
    phone: "+1 (555) 123-4567",
    distance: "1.2 miles",
    schedule: [
      { day: "Monday", hours: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Friday", hours: "9:00 AM - 3:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    ],
  },
  {
    id: "clinic-2",
    name: "Downtown Medical Clinic",
    price: 95,
    address: "456 Health Street, Floor 2, New York, NY 10002",
    phone: "+1 (555) 234-5678",
    distance: "2.5 miles",
    schedule: [
      { day: "Tuesday", hours: "8:00 AM - 4:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 4:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    ],
  },
];

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { doctorId: string };
}): Promise<Metadata> {
  const doctor = await getDoctor(params.doctorId, 1, 5);
  const doctorName = `Dr. ${
    doctor?.data?.user?.name ||
    doctor?.data?.displayName ||
    "Medical Specialist"
  }`;
  const specialties = "Medical Specialist";
  const location = "New York, USA";

  return {
    title: `${doctorName} - ${specialties} | MediBook`,
    description: `Book appointments with ${doctorName}, ${specialties} in ${location}. Read patient reviews and schedule online.`,
    alternates: {
      canonical: `https://yourdomain.com/doctors/${params.doctorId}`,
    },
    openGraph: {
      title: `${doctorName} - ${specialties}`,
      description: `Book appointments with ${doctorName} in ${location}. ${
        doctor?.data?.bio?.substring(0, 100) || ""
      }`,
      url: `https://yourdomain.com/doctors/${params.doctorId}`,
      images: doctor?.data?.user?.image
        ? [
            {
              url: doctor.data.user.image,
              width: 300,
              height: 300,
              alt: `${doctorName} profile photo`,
            },
          ]
        : [
            {
              url: "https://yourdomain.com/default-doctor.jpg",
              width: 300,
              height: 300,
              alt: "Doctor profile",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${doctorName} - ${specialties}`,
      description: `Book appointments with ${doctorName} in ${location}`,
      images: doctor?.data?.user?.image
        ? [doctor.data.user.image]
        : ["https://yourdomain.com/default-doctor.jpg"],
    },
    keywords: [
      doctorName,
      specialties,
      `${specialties} near me`,
      `doctor ${location}`,
      "book doctor appointment",
    ],
  };
}

export default async function DoctorPage({
  params,
}: {
  params: { doctorId: string };
}) {
  const { doctorId } = params;
  const doctor = await getDoctor(doctorId, 1, 5);

  if (!doctor?.data) {
    return <div>Doctor not found</div>;
  }

  const doctorName = `Dr. ${
    doctor?.data?.user?.name || doctor?.data?.displayName
  }`;
  const specialties = "Cardiology, Orthopedics";
  const hospital = "Mymensingh Medical College & Hospital";

  return (
    <>
      <DoctorHero doctorId={doctorId} />

      <main className="bg-background">
        <div className="container space-y-8 py-4">
          {/* Doctor Profile Section */}
          <article
            className="bg-card rounded-lg shadow-sm overflow-hidden border"
            itemScope
            itemType="https://schema.org/Physician"
          >
            <meta itemProp="medicalSpecialty" content={specialties} />
            <div className="w-full grid grid-cols-1 lg:grid-cols-4">
              <div className="w-full col-span-4 flex flex-col sm:flex-row gap-4 p-4">
                <figure className="relative h-[120px] w-[120px] min-w-[120px] aspect-square">
                  {doctor?.data?.user?.image ? (
                    <Image
                      src={doctor?.data?.user?.image}
                      fill
                      alt={`${doctorName}, ${specialties}`}
                      className="rounded-lg object-cover"
                      priority
                      itemProp="image"
                    />
                  ) : (
                    <div className="w-full h-full p-2 rounded-md border flex items-center justify-center bg-default-70">
                      <User className="w-1/2 h-1/2 text-default-700" />
                    </div>
                  )}
                </figure>

                <div className="flex-1 space-y-3">
                  <header className="flex items-center gap-2 flex-wrap">
                    <h1
                      className="text-xl sm:text-2xl font-medium"
                      itemProp="name"
                    >
                      <Link
                        href={`/doctors/${doctor?.data.id}`}
                        className="hover:text-primary-600 transition-colors"
                        itemProp="url"
                      >
                        {doctorName}
                      </Link>
                    </h1>
                    <span
                      className="w-5 h-5 text-blue-500 flex-shrink-0"
                      aria-label="Verified doctor"
                      itemProp="hasCredential"
                    >
                      <CheckMark />
                    </span>
                  </header>

                  <p
                    className="text-sm sm:text-base text-default-700"
                    itemProp="description"
                  >
                    {specialties}
                  </p>

                  <h2
                    className="text-lg font-medium text-primary-600"
                    itemProp="affiliation"
                  >
                    {hospital}
                  </h2>

                  <Button
                    asChild
                    variant="outline"
                    color="primary"
                    size="sm"
                    className="w-fit"
                  >
                    <Link href="#" aria-label={`Visit ${doctorName}'s website`}>
                      Website
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <section className="border-t p-4 lg:hidden">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="space-y-2">
                  <div
                    className="flex items-center gap-2 text-sm"
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <Clock size={14} />
                    <span>
                      0.9 mi - <span itemProp="addressLocality">New York</span>,{" "}
                      <span itemProp="addressRegion">USA</span>
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 text-sm"
                    itemProp="aggregateRating"
                    itemScope
                    itemType="https://schema.org/AggregateRating"
                  >
                    <ThumbsUp size={14} />
                    <span>
                      <span itemProp="ratingValue">4.9</span> (
                      <span itemProp="reviewCount">252</span> Votes)
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  type="button"
                  variant="soft"
                  color="info"
                  className="w-full sm:w-fit"
                >
                  <Link
                    href={`/doctors/${doctorId}/appointments`}
                    aria-label={`Book appointment with ${doctorName}`}
                  >
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </section>

            <footer className="border-t p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 text-sm">
                <div
                  className="flex items-center gap-1"
                  itemProp="aggregateRating"
                  itemScope
                  itemType="https://schema.org/AggregateRating"
                >
                  <span className="text-primary">●</span>
                  <span>Patient Rating:</span>
                  <Rating
                    value={4}
                    readOnly
                    className="gap-x-1.5 max-w-[125px]"
                    aria-label={`${4} out of 5 stars`}
                  />
                  <meta itemProp="ratingValue" content={"4"} />
                  <meta itemProp="bestRating" content="5" />
                  <meta itemProp="reviewCount" content={"43"} />
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-primary">●</span>
                  <span>{43} Reviews</span>
                </div>

                <div
                  className="flex items-center gap-1"
                  itemProp="yearsOfExperience"
                >
                  <span className="text-primary">●</span>
                  <span>{21}+ Years of Experience</span>
                </div>

                {doctor.data.languages && (
                  <div className="hidden sm:flex items-center gap-1">
                    <span className="text-primary">●</span>
                    <span>
                      {doctor.data.languages.length} Language
                      {doctor.data.languages.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                )}
              </div>

              <Button
                variant="soft"
                size="sm"
                aria-label={`Save ${doctorName}'s profile`}
              >
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </footer>
          </article>

          <section aria-labelledby="bio-heading">
            <h1
              id="bio-heading"
              className="font-semibold text-xl text-default-800 mb-2"
            >
              About {doctorName}
            </h1>
            <p className="text-default-600" itemProp="description">
              {doctor?.data?.bio || "No biography available."}
            </p>
          </section>

          <section aria-labelledby="clinics-heading">
            <header className="mb-4">
              <h1
                id="clinics-heading"
                className="font-semibold text-xl text-default-800"
              >
                Chambers & Clinics
              </h1>
            </header>

            <div className="grid gap-6">
              {demoClinics.map((clinic) => (
                <ClinicCard key={clinic.id} clinic={clinic} />
              ))}
            </div>
          </section>

          <section aria-labelledby="reviews-heading">
            <h2
              id="reviews-heading"
              className="font-semibold text-xl text-default-800 mb-4"
            >
              Patient Reviews
            </h2>
            <ReviewPage reviews={doctor?.data?.reviews} />
          </section>

          <section aria-labelledby="add-review-heading">
            <h2
              id="add-review-heading"
              className="font-semibold text-xl text-default-800 mb-4"
            >
              Share Your Experience
            </h2>
            <ReviewForm doctorId={doctor?.data?.id} />
          </section>
        </div>
      </main>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Physician",
          "@id": `https://yourdomain.com/doctors/${doctorId}`,
          name: doctorName,
          image:
            doctor?.data?.user?.image ||
            "https://yourdomain.com/default-doctor.jpg",
          url: `https://yourdomain.com/doctors/${doctorId}`,
          telephone: "+1-555-123-4567",
          address: {
            "@type": "PostalAddress",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10001",
            streetAddress: "123 Medical Center Drive",
          },
          medicalSpecialty: specialties,
          alumniOf: hospital,
          description:
            doctor?.data?.bio?.substring(0, 200) ||
            `${doctorName} is a ${specialties} at ${hospital}`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: 4.5,
            ratingCount: 43,
            bestRating: "5",
          },
          sameAs: [
            "https://twitter.com/doctor",
            "https://linkedin.com/in/doctor",
          ],
        }}
      />

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://yourdomain.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Doctors",
              item: "https://yourdomain.com/doctors",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: doctorName,
              item: `https://yourdomain.com/doctors/${doctorId}`,
            },
          ],
        }}
      />
    </>
  );
}
