"use client";

import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  backgroundImage?: string;
  overlay?: boolean;
  overlayGradient?: string;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
}

export const Hero = ({
  title,
  subtitle,
  breadcrumbs = [],
  backgroundImage = "https://dashboi-one.vercel.app/images/home/hero-bg.png",
  overlay = true,
  overlayGradient = "bg-gradient-to-b from-primary/30 dark:from-primary/20 dark:to-[#0F172A]",
  className = "",
  contentClassName = "",
  titleClassName = "",
}: HeroProps) => {
  return (
    <section
      className={cn(
        "bg-cover bg-no-repeat bg-center relative md:h-[350px]",
        className
      )}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      {overlay && (
        <div
          className={cn("w-full h-full absolute inset-0", overlayGradient)}
        />
      )}

      <div className="container relative z-10">
        <div className="w-full pt-32 md:pt-32 pb-10 flex items-center justify-center">
          <div
            className={cn(
              "flex justify-center flex-col items-center text-center",
              contentClassName
            )}
          >
            <h1
              className={cn(
                "max-w-[600px] text-xl md:text-2xl xl:text-4xl xl:leading-[52px] font-semibold text-default-900",
                titleClassName
              )}
            >
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 text-default-600 max-w-[500px]">{subtitle}</p>
            )}

            {breadcrumbs.length > 0 && (
              <Breadcrumbs className="mt-4">
                {breadcrumbs.map((item, index) => (
                  <BreadcrumbItem key={index}>
                    {item.href ? (
                      <Link href={item.href}>{item.label}</Link>
                    ) : (
                      item.label
                    )}
                  </BreadcrumbItem>
                ))}
              </Breadcrumbs>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
