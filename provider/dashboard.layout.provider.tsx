"use client";
import Header from "@/components/partials/header";
import Sidebar from "@/components/partials/sidebar";
import React from "react";

import LayoutLoader from "@/components/layout-loader";
import Footer from "@/components/partials/footer";
import MobileSidebar from "@/components/partials/sidebar/mobile-sidebar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useMounted } from "@/hooks/use-mounted";
import { useSidebar } from "@/store";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
const DashBoardLayoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { collapsed } = useSidebar();

  const [open, setOpen] = React.useState(false);

  const location = usePathname();
  const isMobile = useMediaQuery("(min-width: 768px)");
  const mounted = useMounted();

  if (!mounted) {
    return <LayoutLoader />;
  }

  return (
    <div>
      <Header />
      <Sidebar />

      <div className={` ${!collapsed ? "collapsed  " : "not-collapsed "}`}>
        <div className={cn(" layout-padding px-4 pt-4  page-min-height ")}>
          <LayoutWrapper
            isMobile={isMobile}
            setOpen={setOpen}
            open={open}
            location={location}
          >
            {children}
          </LayoutWrapper>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardLayoutProvider;

const LayoutWrapper = ({
  children,

  location,
}: {
  children: React.ReactNode;
  isMobile: boolean;
  setOpen: any;
  open: boolean;
  location: any;
}) => {
  return (
    <>
      <motion.div
        key={location}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            y: 50,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
          },
          pageExit: {
            opacity: 0,
            y: -50,
          },
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <main>{children}</main>
      </motion.div>

      <MobileSidebar className="left-[300px]" />
    </>
  );
};
