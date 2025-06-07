"use client";

import LimitSelect from "@/components/limit-select";
import SearchInput from "@/components/SearchInput";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface TabsNavigationProps {
  activeTab: "active" | "inactive";
}

const TabsNavigation: FC<TabsNavigationProps> = ({ activeTab }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTabChange = (value: "active" | "inactive") => {
    const params = new URLSearchParams();

    // Keep only relevant parameters
    params.set("status", value);

    // Preserve `q` (search query) if it exists
    const q = searchParams.get("q");
    if (q) params.set("q", q);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex h-full flex-col lg:flex-row items-start justify-between gap-4 mb-4">
      <TabsList className="flex gap-4 bg-transparent justify-start h-12">
        {["active", "inactive"].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            onClick={() => handleTabChange(tab as "active" | "inactive")}
            className={`h-10 w-32 bg-primary/10 hover:text-blue-500 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-4 ${
              activeTab === tab ? "bg-primary text-primary-foreground" : ""
            }`}
          >
            <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="flex w-full flex-wrap md:flex-nowrap lg:w-fit gap-4">
        <SearchInput searchParamKey="q" className="w-full max-w-2xl" />
        <LimitSelect />
      </div>
    </div>
  );
};

export default TabsNavigation;
