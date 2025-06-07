"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { mainMenu } from "@/components/landing-page/header/config";
import LogoutButton from "@/components/logout";
import SidebarLogo from "@/components/partials/sidebar/common/logo";
import MenuLabel from "@/components/partials/sidebar/common/menu-label";
import SingleMenuItem from "@/components/partials/sidebar/mobile-sidebar/single-menu-item";
import { User } from "@/components/svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboard, LogIn, Search, Settings } from "lucide-react";

const LandingMobileSidebar = ({
  className,
  type,
}: {
  className?: string;
  type?: string;
}) => {
  const { sidebarBg, mobileMenu, setMobileMenu, collapsed } = useSidebar();
  const session = useSession();

  return (
    <div className="relative">
      <div
        className={cn(
          "fixed top-0 bg-card h-screen w-[248px] z-[9999] flex flex-col transition-all",
          className,
          {
            "-left-[300px] invisible opacity-0": !mobileMenu,
            "left-0 visible opacity-100": mobileMenu,
          }
        )}
      >
        <SidebarLogo />
        <Separator />

        <ScrollArea className="flex-1 overflow-y-auto pb-4 px-4">
          {type === "pharmacy" && (
            <div className="border rounded-md bg-background flex items-center pl-2 p-1 my-2">
              <Input
                className="border-0 bg-transparent"
                placeholder="Search for medicine"
              />
              <Search className="w-5 h-5 text-default-500" />
            </div>
          )}

          <ul className={cn("space-y-1", { "space-y-2 my-2 ": collapsed })}>
            {mainMenu.map((item, i) => (
              <li key={`menu_key_${i}`}>
                {!item.child && !item.isHeader && (
                  <SingleMenuItem item={item} collapsed={collapsed} />
                )}
                {item.isHeader && !item.child && !collapsed && (
                  <MenuLabel item={item} />
                )}
              </li>
            ))}
          </ul>
        </ScrollArea>

        <div className="mt-auto mb-2">
          <Separator className="border-1" />
          {!session.data?.user ? (
            <div className="m-4">
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
            <div className="m-4 ">
              <div className="p-2 flex items-center gap-2">
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
      </div>
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="overlay h-screen bg-black/60 backdrop-filter backdrop-blur-sm opacity-100 fixed inset-0 z-[999]"
        ></div>
      )}
    </div>
  );
};

export default LandingMobileSidebar;
