import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empower Your Freelance Career | Freelancer",
  description: "Freelancer provides a vibrant and productive coworking space designed to empower freelancers. Network, collaborate, and focus in a space built for your success.",
  keywords: "freelancer coworking space, coworking for freelancers, freelance community, shared workspace for freelancers, lagos coworking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
