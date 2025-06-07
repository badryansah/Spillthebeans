import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../asset/logo/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center px-8 py-4 border-b border-gray-100">
      <div className="container max-w-6xl flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={40} height={40} />
        </div>

        <div className="flex gap-12">
          <Link
            href="/work"
            className="uppercase text-sm font-medium tracking-wider hover:text-gray-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/about"
            className="uppercase text-sm font-medium tracking-wider hover:text-gray-600 transition-colors"
          >
            gallery
          </Link>
          <Link
            href="/work-with-us"
            className="uppercase text-sm font-medium tracking-wider hover:text-gray-600 transition-colors"
          >
            Menu
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
