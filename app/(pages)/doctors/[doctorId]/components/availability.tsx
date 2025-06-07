"use client";

import DateSlider from "@/components/date-slider";
import "swiper/css";

interface AvailabilityProps {
  id: string;
  availability: any;
}

const Availability = ({ availability, id }: AvailabilityProps) => {
  return <DateSlider id={id} availability={availability} disabled />;
};

export default Availability;
