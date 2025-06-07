"use client";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IAvailability, ITimeSlot } from "@/types/doctor";
import { TooltipContent } from "@radix-ui/react-tooltip";
import clsx from "clsx";
import { addDays, format, isSameDay } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

interface AvailabilityProps {
  id?: string;
  availability: IAvailability[];
  disabled?: boolean;
}

const DateSlider = ({
  id,
  availability,
  disabled = false,
}: AvailabilityProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dates, setDates] = useState<Date[]>([]);
  const [selectedSchedule, setSelectedSchedule] = useState<ITimeSlot[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const router = useRouter();

  useEffect(() => {
    const today = new Date();
    const endDate = addDays(today, 30);
    const tempDates: Date[] = [];

    for (let date = today; date <= endDate; date = addDays(date, 1)) {
      tempDates.push(new Date(date));
    }

    setDates(tempDates);
  }, []);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    const schedule = availability.find(
      (sched) =>
        sched.date.toString().split("T")[0] === date.toISOString().split("T")[0]
    );
    setSelectedSchedule(schedule ? schedule.timeSlots : []);
    setSelectedTime(null);
  };

  const handleTimeClick = (timeSlotId: string) => {
    setSelectedTime(timeSlotId);
  };

  const hasSchedule = (date: Date) => {
    return availability.some(
      (sched) =>
        sched.date.toString().split("T")[0] === date.toISOString().split("T")[0]
    );
  };

  return (
    <div className=" space-y-3 py-4   " id={id}>
      <div className="flex justify-between ">
        <h1 className="text-lg  ">Schedule</h1>
        <div className="flex gap-2">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="  bg-card border rounded-md py-12 px-6 space-y-10">
        <Swiper
          modules={[Navigation]}
          slidesPerView={8}
          spaceBetween={15}
          breakpoints={{
            1024: { slidesPerView: 7, spaceBetween: 15 },
            920: { slidesPerView: 6, spaceBetween: 15 },
            600: { slidesPerView: 4, spaceBetween: 15 },
            0: { slidesPerView: 2, spaceBetween: 15 },
          }}
          onSwiper={setSwiperInstance}
        >
          {dates.map((date, index) => (
            <SwiperSlide key={`abaility-${index}`}>
              <button
                onClick={() => handleDateClick(date)}
                className={clsx(
                  "w-full h-14 bg-muted flex flex-col items-center justify-center rounded-lg transition-colors duration-300",
                  selectedDate && isSameDay(date, selectedDate)
                    ? "bg-primary text-primary-foreground"
                    : "border hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                <span>{format(date, "dd MMM EEE")}</span>

                {hasSchedule(date) && (
                  <span
                    className="absolute top-1 right-1 h-2 w-2 rounded-full bg-success"
                    title="Available Schedule"
                  ></span>
                )}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" ">
          {selectedSchedule.length > 0 ? (
            <div className="flex gap-4 justify-center flex-wrap z-[9999]">
              {selectedSchedule.map((timeSlot) => (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        disabled={disabled}
                        onClick={() => handleTimeClick(timeSlot.id)}
                        className={clsx(
                          "px-4 py-2 rounded-md border-2 text-center transition-colors",
                          selectedTime === timeSlot.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-primary/10 hover:text-primary"
                        )}
                      >
                        {timeSlot.startTime} - {timeSlot.endTime}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="px-4 py-1 border rounded-md bg-primary text-primary-foreground z-[9999]">
                        {timeSlot.type}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No schedule available for this date.
            </p>
          )}
        </div>

        {selectedDate && selectedTime && (
          <div className="mt-4 text-center">
            <p>
              Selected Date: {format(selectedDate, "dd MMM yyyy")} at{" "}
              {selectedTime}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateSlider;
