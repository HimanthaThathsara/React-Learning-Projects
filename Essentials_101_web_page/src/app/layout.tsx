import type { Metadata } from "next";
import { Doto } from "next/font/google";
import "./globals.css";
// import VisualEditsMessenger from "@/visual-edits/VisualEditsMessenger";

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Visuelle — Graphic Design Curation",
  description: "Curated graphic design inspiration and portfolio showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${doto.className}`}>
        {children}
        {/* <VisualEditsMessenger /> */}
      </body>
    </html>
  );
}