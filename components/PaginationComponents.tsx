"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  queryKey?: string;
  scrollTarget?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  queryKey = "page",
  scrollTarget = "top",
}: PaginationProps) {
  const searchParams = useSearchParams();

  const createLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(queryKey, page.toString());
    return `?${params.toString()}`;
  };

  // Smooth scroll function
  const handleSmoothScroll = () => {
    if (typeof window !== "undefined") {
      const targetElement =
        scrollTarget === "top"
          ? document.body
          : document.getElementById(scrollTarget);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  // Scroll to top on page change
  useEffect(() => {
    handleSmoothScroll();
  }, [currentPage]);

  const renderPageButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5; // Adjust this number as needed

    // Always show first page
    buttons.push(
      <li key={1}>
        <Link href={createLink(1)} passHref onClick={handleSmoothScroll}>
          <Button
            aria-current={currentPage === 1 ? "page" : undefined}
            className={cn(
              "h-9 w-9 bg-default-100 text-default-600 p-0 hover:bg-opacity-70 hover:text-primary-foreground",
              {
                "bg-primary text-primary-foreground": currentPage === 1,
              }
            )}
          >
            1
          </Button>
        </Link>
      </li>
    );

    // Show ellipsis if needed
    if (currentPage > 3 && totalPages > maxVisiblePages) {
      buttons.push(
        <li key="ellipsis-start">
          <span className="h-9 w-9 flex items-center justify-center">...</span>
        </li>
      );
    }

    // Calculate range of pages to show
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    // Adjust if we're near the start or end
    if (currentPage <= 3) {
      endPage = Math.min(4, totalPages - 1);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 3, 2);
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <li key={i}>
          <Link href={createLink(i)} passHref onClick={handleSmoothScroll}>
            <Button
              aria-current={currentPage === i ? "page" : undefined}
              className={cn(
                "h-9 w-9 bg-default-100 text-default-600 p-0 hover:bg-opacity-70 hover:text-primary-foreground",
                {
                  "bg-primary text-primary-foreground": currentPage === i,
                }
              )}
            >
              {i}
            </Button>
          </Link>
        </li>
      );
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2 && totalPages > maxVisiblePages) {
      buttons.push(
        <li key="ellipsis-end">
          <span className="h-9 w-9 flex items-center justify-center">...</span>
        </li>
      );
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      buttons.push(
        <li key={totalPages}>
          <Link
            href={createLink(totalPages)}
            passHref
            onClick={handleSmoothScroll}
          >
            <Button
              aria-current={currentPage === totalPages ? "page" : undefined}
              className={cn(
                "h-9 w-9 bg-default-100 text-default-600 p-0 hover:bg-opacity-70 hover:text-primary-foreground",
                {
                  "bg-primary text-primary-foreground":
                    currentPage === totalPages,
                }
              )}
            >
              {totalPages}
            </Button>
          </Link>
        </li>
      );
    }

    return buttons;
  };

  return (
    <div className="flex flex-wrap justify-center mt-8">
      {/* Previous Button */}
      {currentPage > 1 && (
        <Link
          href={createLink(currentPage - 1)}
          passHref
          onClick={handleSmoothScroll}
        >
          <Button size="icon" variant="outline" className="h-9 w-9 mr-2">
            <Icon icon="heroicons:chevron-left" className="w-4 h-4" />
          </Button>
        </Link>
      )}

      {/* Page Buttons */}
      <ul className="flex space-x-2 rtl:space-x-reverse items-center">
        {renderPageButtons()}
      </ul>

      {/* Next Button */}
      {currentPage < totalPages && (
        <Link
          href={createLink(currentPage + 1)}
          passHref
          onClick={handleSmoothScroll}
        >
          <Button size="icon" variant="outline" className="h-9 w-9 ml-2">
            <Icon icon="heroicons:chevron-right" className="w-4 h-4" />
          </Button>
        </Link>
      )}
    </div>
  );
}
