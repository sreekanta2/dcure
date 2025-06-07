"use client";
import {
  Partners1,
  Partners2,
  Partners3,
  Partners4,
  Partners5,
  Partners6,
  Urology,
} from "@/components/svg";
import { IInsurance } from "@/types/doctor";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const items = [
  { src: <Partners1 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners2 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners3 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners1 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },

  { src: <Partners4 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners5 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners6 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
  { src: <Partners4 />, alt: "Slide 1", inner: <Urology />, label: "Urology" },
];

interface InsurancePropsType {
  insurances?: IInsurance[];
}
const Insurances = ({ insurances }: any) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    const handleResize = () => {
      swiperInstance?.update();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperInstance]);

  return (
    <div className=" bg-background   rounded-md shadow-lg py-2" id="insurances">
      <div className=" space-y-5">
        <h1 className="text-lg   ">Insurance Accepted</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          speed={1500}
          loop={true}
          grabCursor={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            delay: 3000,
          }}
          breakpoints={{
            1024: { slidesPerView: 5, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            0: { slidesPerView: 1, spaceBetween: 15 },
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className=" "
        >
          {insurances?.map((item: any, index: number) => (
            <SwiperSlide key={`insurances-${index}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="w-full h-20 relative overflow-hidden border rounded-md p-2">
                  <Image
                    src={item?.thumbnail || ""}
                    alt={item.name}
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Insurances;
