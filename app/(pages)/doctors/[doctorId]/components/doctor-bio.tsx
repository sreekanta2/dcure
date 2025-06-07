"use client";
import { useState } from "react";

export default function DoctorBio({ bio }: { bio: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const maxLength = 200;

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayText = isExpanded
    ? bio
    : `${bio.slice(0, maxLength)}${bio.length > maxLength ? "..." : ""}`;

  return (
    <p id="bio" className="">
      {displayText}
    </p>
  );
}
