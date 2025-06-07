import { siteConfig } from "@/config/site";

import Providers from "@/provider/providers";

import { Inter } from "next/font/google";

import AuthProvider from "@/provider/auth.provider";
import "./assets/scss/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <AuthProvider>
        <Providers>{children}</Providers>
      </AuthProvider>
    </html>
  );
}
