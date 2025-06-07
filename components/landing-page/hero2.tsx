"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function HomeBanner() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");

  const specialties = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "General Medicine",
    "Orthopedics",
  ];

  const locations = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("query", searchQuery);
    if (specialty) params.set("specialty", specialty);
    if (location) params.set("location", location);
    router.push(`/doctors?${params.toString()}`);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };
  return (
    <section className="relative    " id="home">
      <div className="dark:from-primary/20 dark:to-[#0F172A] relative flex   md:h-screen w-full items-center justify-center   bg-gradient-to-b from-primary/20 to-[#0F172A]">
        <h1>hello</h1>
      </div>
    </section>
  );
}
