"use client";

import metadata from "@/app/metadata"; // Import the metadata
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect } from "react"; // Import useEffect for service worker registration
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

  // Register the service worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registered successfully:", registration);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
  }, []);

  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="twitter:card" content={metadata.twitter.card} />
        <meta property="twitter:title" content={metadata.twitter.title} />
        <meta property="twitter:description" content={metadata.twitter.description} />
        <meta property="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
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