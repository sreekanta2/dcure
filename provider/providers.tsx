"use client";
import { SonnToaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className={cn(poppins.className)}>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
        <div className={cn("h-full  ")}>{children}</div>

        <SonnToaster />
      </ThemeProvider>
    </body>
  );
};

export default Providers;
