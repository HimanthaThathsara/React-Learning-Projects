import type {Metadata} from "next";
import "@/styles/globals.css";
import {geistMono, geistSans, incognito, pixelifySans} from "@/assets/fonts";

import Providers from "@/components/providers";
import {cn} from "@/lib/utils";
import MotionConfigWrapper from "@/components/motion-config";
import FloatingAvatar from "@/components/floating-avatar";

export const metadata: Metadata = {
  title: "Hey Matti ❣️",
  description: "#",
  metadataBase: new URL("http://localhost:3000"),
  keywords: ["Matti ❣️"],

  openGraph: {
    images: [
      {
        url: "/console-background.png",
        alt: "Hey Matti ❣️",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("mx-auto font-sans antialiased", geistSans.variable, geistMono.variable, incognito.variable, pixelifySans.variable)}>
        <Providers>
          <MotionConfigWrapper>
            <FloatingAvatar />
            {children}
          </MotionConfigWrapper>
        </Providers>
      </body>
    </html>
  );
}
