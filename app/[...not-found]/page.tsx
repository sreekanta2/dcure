"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    redirect("/");
  }, []);

  return null;
}
