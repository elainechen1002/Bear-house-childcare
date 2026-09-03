import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bear’s House Child Care Centre | Parent Hub",
  description:
    "Program information, parent policies, fees, and enrollment details for Bear’s House Child Care Centre, serving Metro Vancouver families since 2003.",
  icons: { icon: "/bear-left.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
