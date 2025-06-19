"use client";
import { cn, isLocationMatch } from "@/lib/utils";
import { useSidebar } from "@/store";
import React, { useState } from "react";
import SidebarLogo from "../common/logo";

import LogoutButton from "@/components/logout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MenuItemProps } from "@/config/menus";
import { LayoutDashboard, LogIn, Settings, User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuLabel from "../common/menu-label";
import NestedSubMenu from "../common/nested-menus";
import SingleMenuItem from "./single-menu-item";
import SubMenuHandler from "./sub-menu-handler";
const MobileSidebar = ({
  className,
  menus,
}: {
  className?: string;
  menus: MenuItemProps[];
}) => {
  const { sidebarBg, mobileMenu, setMobileMenu } = useSidebar();
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [activeMultiMenu, setMultiMenu] = useState<number | null>(null);
  const session = useSession();
  const { collapsed } = useSidebar();

  const toggleSubmenu = (i: number) => {
    if (activeSubmenu === i) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(i);
    }
  };

  const toggleMultiMenu = (subIndex: number) => {
    if (activeMultiMenu === subIndex) {
      setMultiMenu(null);
    } else {
      setMultiMenu(subIndex);
    }
  };
  const locationName = usePathname();

  React.useEffect(() => {
    let subMenuIndex = null;
    let multiMenuIndex = null;
    menus?.map((item: any, i: number) => {
      if (item?.child) {
        item.child.map((childItem: any, j: number) => {
          if (isLocationMatch(childItem.href, locationName)) {
            subMenuIndex = i;
          }
          if (childItem?.multi_menu) {
            childItem.multi_menu.map((multiItem: any, k: number) => {
              if (isLocationMatch(multiItem.href, locationName)) {
                subMenuIndex = i;
                multiMenuIndex = j;
              }
            });
          }
        });
      }
      if (isLocationMatch(item.href, locationName)) {
        subMenuIndex = i;
      }
    });
    setActiveSubmenu(subMenuIndex);
    setMultiMenu(multiMenuIndex);
    if (mobileMenu) {
      setMobileMenu(false);
    }
  }, [locationName]);
  return (
    <>
      <div
        className={cn(
          "fixed top-0  bg-card h-screen w-[248px] z-[9999] ",
          className,
          {
            " -left-[300px] invisible opacity-0  ": !mobileMenu,
            " left-0 visible opacity-100  ": mobileMenu,
          }
        )}
      >
        {sidebarBg !== "none" && (
          <div
            className=" absolute left-0 top-0   z-[-1] w-full h-full bg-cover bg-center opacity-[0.07]"
            style={{ backgroundImage: `url(${sidebarBg})` }}
          ></div>
        )}
        <SidebarLogo />
        <ScrollArea
          className={cn("sidebar-menu  h-[calc(100%-80px)] ", {
            "px-4": !collapsed,
          })}
        >
          <ul
            className={cn("", {
              " space-y-2 ": collapsed,
            })}
          >
            {menus?.map((item, i) => (
              <li key={`menu_key_${i}`} className="my-1">
                {/* single menu  */}

                {!item.child && !item.isHeader && (
                  <SingleMenuItem item={item} collapsed={collapsed} />
                )}

                {/* menu label */}
                {item.isHeader && !item.child && !collapsed && (
                  <MenuLabel item={item} />
                )}

                {/* sub menu */}
                {item.child && (
                  <>
                    <SubMenuHandler
                      item={item}
                      toggleSubmenu={toggleSubmenu}
                      index={i}
                      activeSubmenu={activeSubmenu}
                      collapsed={collapsed}
                    />

                    {!collapsed && (
                      <NestedSubMenu
                        toggleMultiMenu={toggleMultiMenu}
                        activeMultiMenu={activeMultiMenu}
                        activeSubmenu={activeSubmenu}
                        item={item}
                        index={i}
                        title={""}
                      />
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-auto mb-2">
            <Separator className="mb-4" />
            {!session.data?.user ? (
              <div className="my-4">
                <Button className="w-full">
                  <Link
                    href="/auth/login"
                    className="font-semibold mx-3 flex items-center gap-1"
                  >
                    <LogIn size={16} /> Login
                  </Link>
                </Button>
              </div>
            ) : (
              <div className=" ">
                <div className="  flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={session?.data?.user?.image || ""} />
                    <AvatarFallback className="p-1 bg-primary">
                      <User />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="font-medium">{session?.data?.user?.name}</h1>
                    <p className="text-xs">{session?.data?.user?.email}</p>
                  </div>
                </div>
                {[
                  {
                    name: "Dashboard",
                    icon: LayoutDashboard,
                    href: `/${session?.data?.user?.role}/dashboard`,
                  },
                  { name: "Profile", icon: User, href: "/profile" },
                  { name: "Settings", icon: Settings, href: "/settings" },
                ].map((item, index) => (
                  <Link
                    href={item.href}
                    key={`info-menu-${index}`}
                    className="w-full cursor-pointer hover:bg-primary hover:text-default-100 p-2 rounded-md flex items-center gap-1"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                ))}
                <LogoutButton className="hover:bg-primary hover:text-default-100  rounded-md w-full" />
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="overlay bg-black/60 backdrop-filter backdrop-blur-sm opacity-100 fixed inset-0 z-[999] h-screen"
        ></div>
      )}
    </>
  );
};

export default MobileSidebar;
