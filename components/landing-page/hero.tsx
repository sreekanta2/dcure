"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { fadeIn, staggerContainer, textVariant, zoomIn } from "@/utils/framer";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function HomeBanner() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");

  const specialties = [
    "Anesthesia",
    "Cardiology",
    "Colorectal Surgery",
    "Dentistry",
    "Dermatology",
    "ENT",
    "Endocrinology",
    "Gastroenterology",
    "General Physician",
    "General Surgery",
    "Gynaecologic Oncology",
    "Gynaecology and Obstetrics",
    "Haematology",
    "Hepatology",
    "Medical Oncology",
    "Medicine",
    "Nephrology",
    "Neuromedicine",
    "Neurosurgery",
    "Oncology",
    "Ophthalmology",
    "Orthopaedics",
    "Paediatric Surgery",
    "Paediatrics",
    "Physical Medicine",
    "Plastic Surgery",
    "Psychiatry",
    "Radiation Oncology",
    "Respiratory Medicine",
    "Rheumatology",
    "Thoracic Surgery",
    "Urology",
    "Vascular Surgery",
  ];
  const locations = [
    "বাগেরহাট",
    "বান্দরবান",
    "বরগুনা",
    "বরিশাল",
    "ভোলা",
    "বগুড়া",
    "ব্রাহ্মণবাড়িয়া",
    "চাঁদপুর",
    "চাঁপাইনবাবগঞ্জ",
    "চট্টগ্রাম",
    "চুয়াডাঙ্গা",
    "কক্সবাজার",
    "কুমিল্লা",
    "ঢাকা",
    "দিনাজপুর",
    "ফরিদপুর",
    "ফেনী",
    "গাইবান্ধা",
    "গাজীপুর",
    "গোপালগঞ্জ",
    "হবিগঞ্জ",
    "জামালপুর",
    "যশোর",
    "ঝালকাঠি",
    "ঝিনাইদহ",
    "জয়পুরহাট",
    "খাগড়াছড়ি",
    "খুলনা",
    "কিশোরগঞ্জ",
    "কুড়িগ্রাম",
    "কুষ্টিয়া",
    "লক্ষ্মীপুর",
    "লালমনিরহাট",
    "মাদারীপুর",
    "মাগুরা",
    "মানিকগঞ্জ",
    "মেহেরপুর",
    "মৌলভীবাজার",
    "মুন্সিগঞ্জ",
    "ময়মনসিংহ",
    "নওগাঁ",
    "নড়াইল",
    "নারায়ণগঞ্জ",
    "নরসিংদী",
    "নাটোর",
    "নেত্রকোণা",
    "নীলফামারী",
    "নোয়াখালী",
    "পাবনা",
    "পঞ্চগড়",
    "পটুয়াখালী",
    "পিরোজপুর",
    "রাজবাড়ী",
    "রাজশাহী",
    "রাঙ্গামাটি",
    "রংপুর",
    "সাতক্ষীরা",
    "শরীয়তপুর",
    "শেরপুর",
    "সিরাজগঞ্জ",
    "সুনামগঞ্জ",
    "সিলেট",
    "টাঙ্গাইল",
    "ঠাকুরগাঁও",
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("query", searchQuery);
    if (specialty) params.set("specialty", specialty);
    if (location) params.set("location", location);
    router.push(`/doctors?${params.toString()}`);
  };

  const backgroundImage =
    "https://dashboi-one.vercel.app/images/home/hero-bg.png";

  return (
    <section className="relative bg-cover bg-center bg-no-repeat overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
        }}
      />

      <div
        className={cn(
          "w-full h-full absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
        )}
      />

      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container relative z-10 py-20 md:py-28 lg:py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={textVariant(0.4)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 
                  bg-[linear-gradient(328deg,#42d392,#647eff)] bg-clip-text text-transparent"
          >
            Find the Right Doctor for Your Needs
          </motion.h1>

          <motion.p
            variants={textVariant(0.6)}
            className="text-lg md:text-xl text-primary mb-8 max-w-2xl mx-auto"
          >
            Connect with trusted healthcare professionals in your area. Book
            appointments instantly.
          </motion.p>

          {/* Search Form */}
          <motion.div
            variants={fadeIn("right", "spring", 0.8, 0.75)}
            className="   rounded-md md:rounded-full  "
          >
            <div className="flex flex-col md:flex-row gap-2">
              <motion.div variants={zoomIn(0.1, 0.5)} className="flex-1">
                <Input
                  type="text"
                  placeholder="Search doctors"
                  className="md:h-12 border-0 bg-primary/10 placeholder:text-sm md:placeholder:text-base text-sm md:text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  variant="flat"
                  color="primary"
                />
              </motion.div>

              <motion.div variants={zoomIn(0.2, 0.5)} className="flex-1">
                <Select onValueChange={setSpecialty} value={specialty}>
                  <SelectTrigger
                    className="md:h-12 border-0 bg-primary/10 text-sm md:text-base"
                    variant="flat"
                    color="primary"
                    size="lg"
                  >
                    <SelectValue placeholder="Specialty" />
                  </SelectTrigger>
                  <SelectContent className=" text-sm md:text-base">
                    <SelectItem value="">All Specialties</SelectItem>
                    {specialties.map((spec) => (
                      <SelectItem
                        key={spec}
                        value={spec}
                        className=" text-sm md:text-base"
                      >
                        {spec}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div variants={zoomIn(0.3, 0.5)} className="flex-1">
                <Select onValueChange={setLocation} value={location}>
                  <SelectTrigger
                    className="md:h-12 border-0 bg-primary/10 text-primary"
                    variant="flat"
                    color="primary"
                    size="lg"
                  >
                    <SelectValue
                      placeholder="Location"
                      className="text-primary"
                    />
                  </SelectTrigger>
                  <SelectContent className=" text-sm md:text-base">
                    <SelectItem value="">All Locations</SelectItem>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                variants={zoomIn(0.2, 0.3)}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-fit"
              >
                <Button
                  onClick={handleSearch}
                  className="w-full md:h-12 px-8 text-sm md:text-base hover:text-white"
                  variant="outline"
                >
                  <Icon
                    icon="heroicons:magnifying-glass"
                    className="mr-2 h-5 w-5"
                  />
                  Search
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeIn("up", "spring", 1, 0.75)}
            className="mt-10 flex flex-wrap justify-center gap-6 text-primary"
          >
            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-center gap-2"
            >
              <Icon
                icon="heroicons:check-badge"
                className="h-5 w-5 text-success"
              />
              <span>Verified Doctors</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-center gap-2"
            >
              <Icon icon="heroicons:clock" className="h-5 w-5 text-success" />
              <span>Same-Day Appointments</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-center gap-2"
            >
              <Icon
                icon="heroicons:shield-check"
                className="h-5 w-5 text-success"
              />
              <span>Secure Booking</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
