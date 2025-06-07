"use client";

import { User } from "@/components/svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import { LayoutDashboard, LogOut, Settings } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const ProfileInfo = () => {
  const [open, setOpen] = useState(false);
  const session = useSession();
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  };
  return (
    <DropdownMenu onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DropdownMenuTrigger
        asChild
        className={`cursor-pointer ${open ? "mr-4 lg:mr-0" : ""}`}
      >
        <div className=" flex items-center  ">
          <Avatar>
            <AvatarImage src={session?.data?.user?.image || ""} />

            <AvatarFallback className="p-1 bg-primary">
              <User />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-0" align="end">
        <DropdownMenuLabel className="flex gap-2 items-center mb-1 p-3">
          <Avatar>
            <AvatarImage src={session?.data?.user?.image || ""} />

            <AvatarFallback className="p-1 bg-primary">
              <User />
            </AvatarFallback>
          </Avatar>

          <div className="text-xs text-default-600 hover:text-primary">
            <div className="text-sm font-medium text-default-800 capitalize ">
              {session.data?.user.name}
            </div>
            <span className="text-xs  text-primary">
              {session?.data?.user?.role}
            </span>
          </div>
        </DropdownMenuLabel>
        <Separator />
        <DropdownMenuGroup>
          {[
            {
              name: "Dashboard",
              icon: LayoutDashboard,
              href: `/${session?.data?.user?.role}/dashboard`,
            },

            {
              name: "Profile",
              icon: User,
              href: "/profile",
            },
            {
              name: "Settings",
              icon: Settings,
              href: "/settings",
            },
          ].map((item, index) => (
            <Link
              href={`${item.href}`}
              key={`info-menu-${index}`}
              className="cursor-pointer"
            >
              <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                {item?.icon && <item.icon className="w-4 h-4" />}
                {item.name}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="mb-0 dark:bg-background" />
        <button
          type="button"
          onClick={handleSignOut}
          className={`relative flex w-full   hover:bg-default-200 items-center rounded-sm px-4 my-1 py-1.5 text-sm outline-none transition-colors   text-default-600 hover:text-default-800 `}
        >
          <LogOut size={16} />
          Logout
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ProfileInfo;
