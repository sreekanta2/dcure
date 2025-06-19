// export const siteConfig = {
//   name: "DCare",
//   description: null,
//   theme: "violet",
//   layout: "vertical",
//   // semi-box, horizontal, vertical
//   hideSideBar: false,
//   sidebarType: "module",
//   // popover, classic, module
//   sidebarColor: null,
//   navbarType: "sticky",
//   // sticky, floating, static
//   footerType: "static",
//   // sticky,  static, hidden
//   sidebarBg: "none",
//   radius: 0.5,
// };
// config/site.ts
// config/site.ts
export const siteConfig = {
  sidebarBg: "none",
  name: "MediBook - Find & Book Doctors Online",
  url: "https://medibook.com", // Your actual domain
  description:
    "Find and book appointments with top-rated doctors by specialty, location, and availability. Read verified patient reviews.",
  author: "MediBook Team",

  // SEO Enhancements
  googleSiteVerification: "ABC123XYZ", // From Google Search Console
  googleAnalyticsId: "G-XXXXXXXXXX", // Google Analytics 4 ID
  ahrefsVerification: "12345abcde", // Ahrefs verification code

  // Content
  keywords: [
    "find doctors",
    "book doctor appointment",
    "healthcare providers",
    "medical specialists",
    "doctor ratings",
  ],

  // Social & Images
  twitterHandle: "@MediBookApp",
  ogImage: "https://dcure-eight.vercel.app/images/logo/logo.png",
  logo: "https://dcure-eight.vercel.app/images/logo/logo.png",

  // Contact Information
  contact: {
    phone: "+1-800-555-HEAL",
    email: "support@medibook.com",
  },

  // Social Links
  socialLinks: [
    { name: "Facebook", url: "https://facebook.com/MediBook" },
    { name: "Twitter", url: "https://twitter.com/MediBookApp" },
    { name: "Instagram", url: "https://instagram.com/MediBookApp" },
    { name: "LinkedIn", url: "https://linkedin.com/company/MediBook" },
  ],
};
