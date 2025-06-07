// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/doctor(.*)",
  "/patient(.*)",
  "/dashboard(.*)",
]);

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api(.*)",
  "/doctors(.*)",
]);

type SessionClaims = {
  metadata?: {
    role?: "admin" | "doctor" | "patient";
    [key: string]: any;
  };
  [key: string]: any;
};

export default clerkMiddleware(async (auth, req) => {
  // Await the auth object
  const authObj = (await auth()) as {
    sessionClaims?: SessionClaims;
    userId?: string;
  };

  // Handle public routes
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // Handle unauthorized access to protected routes
  if (!authObj.userId && isProtectedRoute(req)) {
    const signInUrl = new URL("/sign-in", req.url);
    return NextResponse.redirect(signInUrl);
  }

  // Get user role from session claims
  const role = authObj.sessionClaims?.metadata?.role as
    | "admin"
    | "doctor"
    | "patient"
    | undefined;

  // Redirect to onboarding if user has no role
  if (
    authObj.userId &&
    !role &&
    !req.nextUrl.pathname.startsWith("/onboarding")
  ) {
    const onboardingUrl = new URL("/onboarding", req.url);
    return NextResponse.redirect(onboardingUrl);
  }

  // Admin route protection
  if (req.nextUrl.pathname.startsWith("/admin") && role !== "admin") {
    const homeUrl = new URL("/", req.url);
    return NextResponse.redirect(homeUrl);
  }

  // Doctor route protection
  if (req.nextUrl.pathname.startsWith("/doctor") && role !== "doctor") {
    const homeUrl = new URL("/", req.url);
    return NextResponse.redirect(homeUrl);
  }

  // Patient route protection
  if (req.nextUrl.pathname.startsWith("/patient") && role !== "patient") {
    const homeUrl = new URL("/", req.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
