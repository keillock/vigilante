import type { Metadata } from "next";
import localFont from "next/font/local";
import NavbarWrapper from "../components/NavbarWrapper";
import "./globals.css";

// Configuración de fuentes locales
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

// Metadatos de la página
export const metadata: Metadata = {
  title: "Vigilante App",
  description: "Mantente informado sobre lo que sucede en tu comunidad con Vigilante App.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <NavbarWrapper />
      </body>
    </html>
  );
}