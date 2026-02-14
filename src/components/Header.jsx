"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";


const Header = () => {
  const pathname = usePathname();
  if(pathname.startsWith("/dashboard")) return <></>

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-slate-800 text-white flex-wrap">
      {/* Logo */}
      <Link href={"/"} className="text-xl font-bold">Dev-Story</Link>

      {/* Menu */}
      <nav className="space-x-3">

        {/* <Link href="/dashboard">Dashboard</Link> */}
        <NavLink href="/about">About</NavLink>
        <NavLink href="/stories">Stories</NavLink>
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/register">Register</NavLink>
        <NavLink href="/login">Login</NavLink>
      </nav>
      
    </header>
  );
};

export default Header;
