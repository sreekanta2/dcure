"use client";
import ThemeButton from "@/components/partials/header/theme-button";
import { SiteLogo } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

import FullScreenToggle from "@/components/partials/header/full-screen";
import MobileMenuHandler from "@/components/partials/header/mobile-menu-handler";
import ProfileInfo from "@/components/partials/header/profile-info";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import MobileSidebar from "@/components/partials/sidebar/mobile-sidebar";
import { menus } from "@/config/menus";
const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const session = useSession();

  if (!isDesktop) {
    return (
      <>
        <div
          className={
            scroll
              ? " bg-card/50 backdrop-blur-lg shadow-xl  z-50   fixed top-0 left-0 w-full py-3"
              : "fixed top-0 left-0 w-full py-6 z-50"
          }
        >
          <nav className="container flex justify-between relative z-50">
            <div className="w-full flex items-center gap-1">
              <MobileSidebar menus={menus} />
              <Link href="/" className="flex gap-1 items-center">
                <SiteLogo className="h-6 w-6  text-primary" />
                <span className="text-primary-500 font-medium text-xl">
                  Decure
                </span>
              </Link>
            </div>

            <div className="w-full flex items-center justify-end gap-6">
              <ThemeButton />
              <MobileMenuHandler />
            </div>
          </nav>
        </div>
      </>
    );
  }
  return (
    <div
      className={
        scroll
          ? "bg-card/50 backdrop-blur-lg shadow-xl z-30 dark:bg-card/70 fixed top-0 left-0 w-full py-3"
          : " z-30 fixed top-0 left-0 w-full py-3"
      }
    >
      <nav className="container   flex justify-between">
        <Link href="/" className="flex items-center gap-1">
          <SiteLogo className="h-8 w-8  text-primary" />
          <span className="text-primary-500 font-medium text-xl">cure</span>
        </Link>
        <ul className="  flex gap-4">
          {menus?.map((item, i) => (
            <li
              key={`main-item-${i}`}
              className=" block text-base font-medium text-default-600 hover:text-primary"
            >
              <Link href={item.href || ""}>{item.title} </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <FullScreenToggle />
          <ThemeButton />
          {!session.data?.user ? (
            <Button size="sm">
              <Link href="/auth/login" className="text-sm font-semibold ">
                Login
              </Link>
            </Button>
          ) : (
            <ProfileInfo />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
