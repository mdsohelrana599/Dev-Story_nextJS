import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-slate-800 text-white flex-wrap">
      {/* Logo */}
      <Link href={"/"} className="text-xl font-bold">Dev-Story</Link>

      {/* Menu */}
      <nav className="space-x-3">

        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </nav>
      
    </header>
  );
};

export default Header;
