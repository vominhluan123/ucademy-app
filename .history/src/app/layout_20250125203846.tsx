import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils";
import Sidebar from "@/components/Layout/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className}>
          <div className="grid grid-cols-[300px,minmax(0,1fr)] h-screen">
            <Sidebar></Sidebar>
            <main>{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
