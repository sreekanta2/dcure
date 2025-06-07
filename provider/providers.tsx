"use client";
import { SonnToaster } from "@/components/ui/sonner";
import { Toaster as ReactToaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={cn("decure-app ", poppins.className)}>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
        <div className={cn("h-full  ")}>
          {children}
          <ReactToaster />
        </div>
        <Toaster />
        <SonnToaster />
      </ThemeProvider>
    </body>
  );
};

export default Providers;
