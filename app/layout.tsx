import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Share It",
  description: "file sharing made easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center">{children}</body>
    </html>
  );
}
