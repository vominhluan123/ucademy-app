import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils";

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
        <div className="grid grid-cols-[300px,minmax(0,1fr)] gap-4">
          <aside>Sidebar</aside>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
