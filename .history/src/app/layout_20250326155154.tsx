import { ThemeProvider } from "@/components/theme-provider";
import { manrope } from "@/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "./globals.css";
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer autoClose={2000} position="top-right" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
