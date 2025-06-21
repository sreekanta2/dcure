"use client";
import Header from "./header";

import LayoutLoader from "@/components/layout-loader";
import { useMounted } from "@/hooks/use-mounted";

import BestDoctors from "./best-doctors";
import Faq from "./faq";
import Footer from "./footer";

import { HomeBanner } from "./hero";
import SpecialtiesCarousel from "./Specialites";
import Summary from "./summary";
import Testimonial from "./testimonial";

const LandingPageView = () => {
  const mounted = useMounted();
  if (!mounted) {
    return <LayoutLoader />;
  }
  return (
    <div className="bg-card/50 backdrop-blur-lg shadow-md dark:bg-card/70">
      <Header />
      {/* Your code here */}

      <HomeBanner />
      {/* <ClinicsAndSpecialties /> */}
      <SpecialtiesCarousel />
      <BestDoctors />
      {/* <FeaturesSlide /> */}
      <Summary />

      <Faq />

      <Testimonial />
      {/* <PartnersPage /> */}

      <Footer />
    </div>
  );
};

export default LandingPageView;
