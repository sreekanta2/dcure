import { getDoctor } from "@/config/doctors/doctors.config";
import ClinicLocation from "./components/clinics-locatin";
import Experience from "./components/experience";
import DoctorHero from "./components/hero";
import ProfileHashTag from "./components/profile-hash-nav";
import ProfileHeader from "./components/profile-header";
import ReviewForm from "./components/review-form";
import ReviewPage from "./components/review-page";
const demoClinics = [
  {
    id: "clinic-1",
    name: "City Heart Center",
    price: 120,
    address: "Dinajpur 5200 ",
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
  {
    id: "clinic-3",
    name: "Metro Children's Hospital",
    price: 150,
    address: "789 Pediatric Avenue, New York, NY 10003",
    phone: "+1 (555) 345-6789",
    distance: "3.8 miles",
    schedule: [
      { day: "Monday", hours: "8:00 AM - 6:00 PM" },
      { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
      { day: "Friday", hours: "8:00 AM - 5:00 PM" },
    ],
  },
  {
    id: "clinic-4",
    name: "Westside Urgent Care",
    price: 75,
    address: "321 Emergency Lane, New York, NY 10004",
    distance: "0.8 miles",
    schedule: [
      { day: "Monday", hours: "8:00 AM - 8:00 PM" },
      { day: "Tuesday", hours: "8:00 AM - 8:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 8:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 8:00 PM" },
      { day: "Friday", hours: "8:00 AM - 8:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
      { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    ],
  },
  {
    id: "clinic-5",
    name: "Advanced Neurology Center",
    price: 180,
    address: "654 Brain Street, Suite 200, New York, NY 10005",
    phone: "+1 (555) 456-7890",
    distance: "4.2 miles",
    schedule: [
      { day: "Monday", hours: "10:00 AM - 4:00 PM" },
      { day: "Wednesday", hours: "10:00 AM - 4:00 PM" },
      { day: "Friday", hours: "10:00 AM - 2:00 PM" },
    ],
  },
];
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
  return (
    <>
      <DoctorHero doctorId={doctorId} />
      <div className="bg-background pt-8">
        <div className="container mx-auto space-y-8 pb-8    ">
          <ProfileHeader doctorId={doctorId} doctor={doctor?.data} />
          <ProfileHashTag doctorId={doctorId} />
          <p> {doctor?.data?.bio}</p>
          <ClinicLocation clinics={demoClinics} />
          <Experience experience={doctor?.data?.experience} />

          {/* <BusinessOur /> */}
          <ReviewPage reviews={doctor?.data?.reviews} />
          <ReviewForm doctorId={doctor?.data?.id} />
        </div>
      </div>
    </>
  );
}
