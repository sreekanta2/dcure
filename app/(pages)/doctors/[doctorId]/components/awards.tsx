"use client";
import { motion } from "framer-motion";
import { BookmarkPlusIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

interface AwardsProps {
  awards: any;
}
const Awards = ({ awards }: AwardsProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    const handleResize = () => {
      swiperInstance?.update();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperInstance]);

  return (
    <div className=" space-y-3 py-5 " id="awards">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg   ">Awards</h1>
        <div>
          <button onClick={() => swiperInstance?.slidePrev()}>
            <ChevronLeft size={30} className="text-primary" />
          </button>
          <button onClick={() => swiperInstance?.slideNext()}>
            <ChevronRight size={30} className="text-primary" />
          </button>
        </div>
      </div>

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
          1024: { slidesPerView: 4, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          0: { slidesPerView: 1, spaceBetween: 15 },
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        className="my-16 h-fit "
      >
        {awards.map((award: any, index: any) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="relative w-full h-full min-h-full flex justify-center items-center"
            >
              <div className="relative w-full h-full border rounded-md flex-shrink-0 max-w-full py-4  px-6 bg-card   ">
                <span className="w-8 h-8 rounded-full flex items-center justify-center border bg-success text-primary-foreground">
                  <BookmarkPlusIcon size={18} />
                </span>
                <h1 className="text-lg">{award.name} (2021)</h1>
                <h1 className="font-medium text-primary">
                  {award.organization}
                </h1>
                <p>{award.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Awards;
