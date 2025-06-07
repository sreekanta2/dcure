"use client";

import { Input } from "@/components/ui/input"; // Shadcn UI Input
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type SearchInputProps = {
  placeholder?: string;
  searchParamKey: string;
  debounceDelay?: number;
  className?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
  searchParamKey,
  debounceDelay = 300,
  className = "",
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSearchQuery = searchParams.get(searchParamKey) || "";
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, debounceDelay);

    return () => clearTimeout(handler);
  }, [searchQuery, debounceDelay]);

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (debouncedSearchQuery) {
      newSearchParams.set(searchParamKey, debouncedSearchQuery);
    } else {
      newSearchParams.delete(searchParamKey);
    }

    router.push(`?${newSearchParams.toString()}`);
  }, [debouncedSearchQuery, searchParamKey, searchParams, router]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete(searchParamKey);
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <div
      className={`relative flex items-center w-full border    bg-background  rounded-md px-2 max-w-sm min-w-[200px] h-10 ${className} focus-within:border-primary`}
    >
      <span>
        <Search className="text-primary" size={16} />
      </span>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="w-full border-0 focus:outline-none"
      />
      {searchQuery && (
        <span
          className="absolute right-3 text-gray-500 cursor-pointer"
          onClick={clearSearch}
        >
          <X size={16} className="text-primary" />
        </span>
      )}
    </div>
  );
};

export default SearchInput;
