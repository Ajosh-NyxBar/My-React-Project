import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-[999]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            transition={{
              damping: 10,
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold"
          >
            KOPI <span className="text-primary"> AJOSH</span>
          </motion.h1>
          {/* Hamburger Menu */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            transition={{
              damping: 10,
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setSidebar(!sidebar)}
            
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;