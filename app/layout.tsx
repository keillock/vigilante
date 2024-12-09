"use client";

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

  // Define routes where the Topbar should be hidden
  const hideTopbarRoutes = [
    "/splash",
    "/login",
    "/register",
    "/forgot",
    "/settings",
    "/settings/cuenta",
    "/settings/notificaciones",
    "/settings/seguridad",
  ];

  // Define routes where the Navbar should be hidden
  const hideNavbarRoutes = ["/splash", "/login", "/register", "/forgot"];

  const shouldHideTopbar = hideTopbarRoutes.includes(pathname);
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {/* Conditionally render the Topbar */}
        {!shouldHideTopbar && <Topbar />}

        {/* Wrap content with NavbarWrapper unless Navbar is hidden */}
        <div className={`${!shouldHideTopbar ? "pt-14" : ""}`}>
          {shouldHideNavbar ? children : <NavbarWrapper>{children}</NavbarWrapper>}
        </div>
      </body>
    </html>
  );
}