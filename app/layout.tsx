import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DrumNet | High-Performance Infrastructure & Telemetry Engineering",
  description:
    "High-performance software consultancy specializing in financial market data engines, IoT telemetry, and solar energy monitoring systems. Built with Go and AWS.",
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
