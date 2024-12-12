"use client";

import metadata from "@/app/metadata"; // Import the metadata
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import Topbar from "@/components/Topbar";
import NavbarWrapper from "@/components/NavbarWrapper";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideTopbarRoutes = ["/splash", "/login", "/register", "/forgot"];
  const hideNavbarRoutes = ["/splash", "/login", "/register", "/forgot"];

  const shouldHideTopbar = hideTopbarRoutes.includes(pathname);
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {!shouldHideTopbar && <Topbar />}
        <div className={`${!shouldHideTopbar ? "pt-14" : ""}`}>
          {shouldHideNavbar ? children : <NavbarWrapper>{children}</NavbarWrapper>}
        </div>
      </body>
    </html>
  );
}