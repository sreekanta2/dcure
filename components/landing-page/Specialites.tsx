"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const specialtiesWithCount = [
  { name: "Anesthesia", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Cardiology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Colorectal Surgery", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Dentistry", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Dermatology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "ENT", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Endocrinology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Gastroenterology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "General Physician", count: Math.floor(Math.random() * 20) + 1 },
  { name: "General Surgery", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Gynaecologic Oncology", count: Math.floor(Math.random() * 20) + 1 },
  {
    name: "Gynaecology and Obstetrics",
    count: Math.floor(Math.random() * 20) + 1,
  },
  { name: "Haematology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Hepatology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Medical Oncology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Medicine", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Nephrology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Neuromedicine", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Neurosurgery", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Oncology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Ophthalmology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Orthopaedics", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Paediatric Surgery", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Paediatrics", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Physical Medicine", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Plastic Surgery", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Psychiatry", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Radiation Oncology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Respiratory Medicine", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Rheumatology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Thoracic Surgery", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Urology", count: Math.floor(Math.random() * 20) + 1 },
  { name: "Vascular Surgery", count: Math.floor(Math.random() * 20) + 1 },
];

const SpecialtiesCarousel = () => {
  return (
    <motion.section className="bg-background    pt-16 lg:py-20">
      <div className="container    ">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-default-800 dark:text-white mb-4"
          >
            Our Medical Specialties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-default-600 dark:text-default-300 max-w-2xl mx-auto"
          >
            Explore our comprehensive range of medical specialties with top-tier
            healthcare professionals
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative  ">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            speed={1000}
            loop={true}
            grabCursor={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              delay: 2000,
            }}
            breakpoints={{
              1280: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              640: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            navigation={{
              prevEl: ".specialty-prev",
              nextEl: ".specialty-next",
            }}
            className="!py-4"
          >
            {specialtiesWithCount.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={`/doctors?specialty=${item.name}`}
                  className="block h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group relative bg-card rounded-lg shadow-md p-6 text-left border dark:border-0 h-full"
                  >
                    <div className="absolute top-4 right-4 bg-primary-50 dark:bg-primary-900/30 text-primary  text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {item.count}+ Doctors
                    </div>

                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 mb-4">
                      <Icon icon="heroicons:user-group" className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-base font-semibold text-default-800 dark:text-white line-clamp-2">
                        {item.name}
                      </h3>
                      <button className="mt-3 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 flex items-center gap-1">
                        View specialists
                        <Icon
                          icon="heroicons:arrow-right"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="specialty-prev absolute left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-default-800 shadow-md flex items-center justify-center text-default-700 dark:text-default-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors -translate-x-1/2">
            <Icon icon="heroicons:chevron-left" className="w-5 h-5" />
          </button>
          <button className="specialty-next absolute right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-default-800 shadow-md flex items-center justify-center text-default-700 dark:text-default-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors translate-x-1/2">
            <Icon icon="heroicons:chevron-right" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default SpecialtiesCarousel;
