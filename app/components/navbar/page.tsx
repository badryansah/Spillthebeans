import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../asset/logo/logo.png";
import { motion } from "framer-motion";

const menu = [
  { name: "HOME", href: "/Home" },

  { name: "MENU", href: "/menu" },
  { name: "GALLERY", href: "/gallery" },
  { name: "LOCATIONS", href: "/locations" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      className="flex justify-center items-center px-8 py-4 border-b border-gray-100 bg-transparent"
    >
      <div className="container max-w-7xl flex items-center justify-between font-poppins">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Image
            src={Logo}
            alt="Logo"
            width={60}
            height={60}
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Menu */}
        <div className="flex gap-8 flex-1 justify-center">
          {menu.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }} // Changed from y translation to scale
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <Link
                href={item.href}
                className={`flex relative uppercase text-white tracking-widest text-sm px-2 py-1 hover:text-cyan-400 transition-colors font-poppins
                  ${
                    item.name === "HOME"
                      ? "after:content-[''] after:block after:h-1 after:bg-cyan-400 after:mt-1 after:rounded"
                      : ""
                  }
                `}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
