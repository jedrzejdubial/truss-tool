import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Truss Tool",
  description: "Truss Tool - by jedrzejdubial @ Github"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
