"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-1 rounded ${
        isActive ? "bg-sky-500 text-black" : "hover:text-sky-400"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
