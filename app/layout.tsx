import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import NotificationContainer from "@/components/notifications/NotificationContainer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ERP BIM Perú",
  description: "Sistema de gestión BIM para construcción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased`}
      >
        <SessionProvider>
          {children}
          <NotificationContainer position="top-right" />
        </SessionProvider>
      </body>
    </html>
  );
}
