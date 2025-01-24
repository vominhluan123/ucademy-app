import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils";
import Sidebar from "@/components/Layout/Sidebar";

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Next.js Ucademy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="grid grid-cols-[300px,minmax(0,1fr)]">
          <Sidebar></Sidebar>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
