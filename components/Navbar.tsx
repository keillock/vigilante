"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { House, Users, PaperPlaneTilt, User } from "phosphor-react";

const Navbar = () => {
  const pathname = usePathname();

  const getIconColor = (route: string) => (pathname === route ? "#ED7600" : "#D1D5DB");

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black text-white flex justify-around items-center py-6">
      <Link href="/home">
        <div className="flex flex-col items-center">
          <House size={32} color={getIconColor("/home")} />
          
        </div>
      </Link>
      <Link href="/community">
        <div className="flex flex-col items-center">
          <Users size={32} color={getIconColor("/community")} />
          
        </div>
      </Link>
      <Link href="/messages">
        <div className="flex flex-col items-center">
          <PaperPlaneTilt size={32} color={getIconColor("/messages")} />
          
        </div>
      </Link>
      <Link href="/profile">
        <div className="flex flex-col items-center">
          <User size={32} color={getIconColor("/profile")} />
          
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;