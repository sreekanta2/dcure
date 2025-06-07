"use client";

import { CheckMark, User } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";

import { motion } from "framer-motion";
import { Award, DollarSign, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Overlay animation variants
const overlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 },
};

export default function DoctorCard({
  doctor,
  index,
}: {
  doctor: any;
  index: number;
}) {
  return (
    <motion.div
      className="relative group w-full md:w-72 lg:w-80 h-[400px] overflow-hidden border rounded-lg shadow-md cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      {/* Image Container */}
      <div className="w-full h-full relative">
        {doctor?.user?.image ? (
          <Image
            src={doctor?.user?.image}
            alt={doctor?.user?.name || doctor?.displayName}
            fill
            className="rounded-lg object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <User className="w-24 h-24 text-gray-500" />
          </div>
        )}

        {/* Red Overlay with Social Icons */}
        <motion.div
          variants={overlayVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 bg-primary/90 z-10 flex h-full items-center justify-center gap-3 opacity-0 group-hover:opacity-100"
        >
          {/* Add social buttons here if needed */}
        </motion.div>
      </div>

      {/* Name & Details */}
      <div className="absolute bottom-0 w-full bg-white p-3 text-center z-20 shadow-md">
        <div className="flex items-center justify-center gap-x-2">
          <CardTitle className="text-lg">
            <Link
              href={`/doctors/${doctor.user.id}`}
              className="hover:underline"
            >
              {doctor?.user?.name || doctor?.displayName}
            </Link>
          </CardTitle>
          <CheckMark className="w-5 h-5 text-green-500" />
        </div>
        <p className="text-xs text-gray-500">MBBS, Dentist</p>

        {/* Address, Experience, Rating */}
        <div className="text-gray-600 text-sm mt-2 space-y-1">
          <div className="flex items-center justify-center gap-1">
            <MapPin size={14} />
            <span>
              {doctor.doctorProfile.addresses.address}, {doctor.country}
            </span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Award size={14} />
            <span>10 Years of Experience</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Rating
              value={parseInt("4")}
              readOnly
              className="gap-x-1.5 max-w-[125px]"
            />
            <span>(44 reviews)</span>
          </div>
        </div>

        {/* Price & Booking */}
        <div className="mt-2">
          <div className="flex justify-center gap-2 text-gray-700">
            <DollarSign size={14} />
            <span>$400</span>
          </div>
          <Button type="button" variant="soft" className="mt-2">
            <Link href={`/doctors/${doctor.id}/booking`}>Book Appointment</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
