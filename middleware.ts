import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const url = req.nextUrl.pathname;

  // Redirect unauthenticated users to login
  if (!token) {
    if (url.startsWith("/auth/login")) {
      return NextResponse.next(); // Allow access to login
    }
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  const role = token.role; // Assume role is stored in the token

  // Redirect logged-in users away from login page to their dashboard
  if (url.startsWith("/auth/login")) {
    if (role === "doctor")
      return NextResponse.redirect(new URL("/doctor/dashboard", req.url));
    if (role === "patient")
      return NextResponse.redirect(new URL("/patient/dashboard", req.url));
    if (role === "admin")
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));

    return NextResponse.redirect(new URL("/", req.url));
  }

  // Redirect users based on role
  if (url.startsWith("/doctor") && role !== "doctor") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (url.startsWith("/patient") && role !== "patient") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (url.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/doctor/:path*",
    "/patient/:path*",
    "/admin/:path*",
    "/auth/login",
  ],
};
