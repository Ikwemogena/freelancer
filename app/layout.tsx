import type { Metadata } from "next";
import "./globals.scss";

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
      <body>{children}</body>
    </html>
  );
}