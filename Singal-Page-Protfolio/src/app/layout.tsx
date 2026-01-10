import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himantha Thathsara Amaranath - Portfolio",
  description:
    "Himantha Thathsara Amaranath Portfolio - Java, JavaScript, SQL, Enterprise Applications",
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
