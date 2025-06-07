"use client";
import Image from "next/image";
import lightImage from "@/public/images/error/light-401.png";
import darkImage from "@/public/images/error/dark-401.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
const ErrorPage = () => {
  const { theme } = useTheme();
  return (
    <div className="h-screen    flex justify-center items-center p-10">
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[542px]">
          <Image
            src={theme === "dark" ? darkImage : lightImage}
            alt="error image"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="mt-16 text-center">
          <div className="text-2xl md:text-2xl lg:text-2xl font-semibold text-destructive-700">
            Opps! something went wrong!
          </div>

          <Button asChild className="mt-9  md:min-w-[300px]" size="lg">
            <Link href="/auth/login">Go to Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
