"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  // Define las paginas donde no saldrá la navbar pueeee
  const hideNavbarRoutes = ["/login", "/register", "/forgot"];
  const showNavbar = !hideNavbarRoutes.includes(pathname);

  return showNavbar ? <Navbar /> : null;
};

export default NavbarWrapper;