import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-display", subsets: ["latin"] });
const nunito = Nunito_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bear’s House Child Care Centre | Parent Hub",
  description:
    "Program information, parent policies, daily schedule, fees, and enrollment details for Bear’s House Child Care Centre in Burnaby.",
  icons: { icon: "/bear-left.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${fraunces.variable} ${nunito.variable}`}>{children}</body></html>;
}
