"use client";
import doctor1 from "@/public/images/doctors/doctor1.webp";
import doctor2 from "@/public/images/doctors/doctor2.webp";
import doctor3 from "@/public/images/doctors/doctor3.webp";
import doctor4 from "@/public/images/doctors/doctor4.webp";
import doctor5 from "@/public/images/doctors/doctor5.webp";
import { motion, useInView } from "framer-motion";
import { Bookmark, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { AnimatedButton } from "../animated-button";
import { User } from "../svg";
import { Button } from "../ui/button";

const doctors = [
  {
    id: 1,
    image: doctor1,
    name: "Dr. Ruby Perrin",
    rating: 3.0,
    qualification: "BDS, MDS - Oral & Maxillofacial",
    location: "Dallas, USA",
    consultations: 400,
  },
  {
    id: 2,
    image: doctor2,
    name: "Dr. John Doe",
    rating: 4.5,
    qualification: "MBBS, MD - Cardiology",
    location: "New York, USA",
    consultations: 550,
  },
  {
    id: 3,
    image: doctor3,
    name: "Dr. Emily Carter",
    rating: 4.2,
    qualification: "MS - Orthopedics",
    location: "Los Angeles, USA",
    consultations: 620,
  },
  {
    id: 4,
    image: doctor4,
    name: "Dr. Michael Smith",
    rating: 4.8,
    qualification: "MD - Neurology",
    location: "Houston, USA",
    consultations: 710,
  },
  {
    id: 5,
    image: doctor5,
    name: "Dr. Sarah Johnson",
    rating: 3.9,
    qualification: "MD - Dermatology",
    location: "Chicago, USA",
    consultations: 480,
  },
  {
    id: 6,
    image: doctor2,
    name: "Dr. William Brown",
    rating: 4.6,
    qualification: "MD - Urology",
    location: "San Francisco, USA",
    consultations: 530,
  },
  {
    id: 7,
    image: doctor4,
    name: "Dr. Olivia Wilson",
    rating: 4.7,
    qualification: "MS - Gynecology",
    location: "Boston, USA",
    consultations: 590,
  },
];

const BestDoctors = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleResize = () => swiperInstance?.update();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperInstance]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-16 lg:pt-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Our Expert Doctors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Book appointments with our top-rated healthcare professionals
          </motion.p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Doctors Carousel */}
        <Swiper
          slidesPerView="auto"
          spaceBetween={24}
          speed={800}
          loop={true}
          modules={[Navigation]}
          grabCursor={true}
          breakpoints={{
            1536: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          onSwiper={setSwiperInstance}
          className="!py-2"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={doctor.id} className="!h-auto ">
              <motion.div
                transition={{ duration: 0.15, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group h-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border p-4 border-gray-100 dark:border-gray-700  space-y-4"
              >
                {/* Doctor Image */}
                <div className="relative lg:mx-auto h-full max-h-[250px] w-full max-w-[300px] aspect-square">
                  {doctor?.image ? (
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 640px) 100vw, 250px"
                    />
                  ) : (
                    <div className="w-full h-full p-2 rounded-md border flex items-center justify-center bg-default-70 aspect-square">
                      <User className="w-1/2 h-1/2 text-default-700" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 px-2 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span>{doctor.rating}</span>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="  flex-1 flex flex-col ">
                  <div className="  mb-4">
                    <div className="flex justify-between items-center">
                      <Link
                        href={`/doctors/${doctor.id}`}
                        className="text-xl font-bold text-gray-800 dark:text-white mb-1"
                      >
                        {doctor.name}
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <Bookmark className="w-5 h-5" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      MBBS, BCS (Health), MS (Ortho), MRCS (Edinburgh), MRCS
                      (England), FACS (USA)
                    </p>
                  </div>

                  {/* Location and Experience */}

                  {/* Rating Info */}
                  <div className="flex flex-col   items-start  gap-3 mb-2">
                    <div className="flex items-center gap-1">
                      <span className="text-primary">●</span>

                      <span>43 Reviews</span>
                      {/* <ChevronDown className="w-4 h-4 text-default-700" /> */}
                    </div>

                    <div>
                      <span className="text-primary">●</span>
                      <span> 21+ Years of Experience</span>
                    </div>
                  </div>

                  {/* Rating and Reviews */}
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="pt-2 flex gap-2 sm:gap-8 justify-between items-center">
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
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <AnimatedButton
          as="link"
          href="/doctors"
          text="View All Doctors"
          icon="heroicons:arrow-right"
          delay={0.4}
        />
      </div>
    </motion.section>
  );
};

export default BestDoctors;
