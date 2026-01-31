import type { Metadata } from "next";
import type { ReactNode } from "react";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Pardons Are Us | Canadian Record Suspension Assistance",
  description:
    "Getting a pardon in Canada is easier than you think. Contact us today for more information",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
