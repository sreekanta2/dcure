"use client";
import {
  adminConfig,
  doctorConfig,
  MenuItemProps,
  patientConfig,
} from "@/config/menus";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useSession } from "next-auth/react";
import MobileSidebar from "./mobile-sidebar";
import PopoverSidebar from "./popover";

const Sidebar = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const session = useSession();

  let menus: MenuItemProps[];

  switch (session?.data?.user?.role) {
    case "admin":
      menus = adminConfig;
      break;

    case "doctor":
      menus = doctorConfig;
      break;

    case "patient":
      menus = patientConfig;
      break;
    default:
      menus = [];
  }
  const selectedSidebar = !isDesktop ? (
    <MobileSidebar menus={menus} />
  ) : (
    <PopoverSidebar />
  );

  return <div>{selectedSidebar}</div>;
};

export default Sidebar;
