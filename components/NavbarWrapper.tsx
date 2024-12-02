"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const NavbarWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  const excludePaths = ["/login", "/register", "/forgot", "/splash"];
  const shouldHideNavbar = excludePaths.includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{children}</div>
      {!shouldHideNavbar && <Navbar />}
    </div>
  );
};

export default NavbarWrapper;