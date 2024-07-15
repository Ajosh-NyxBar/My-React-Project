import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImage from "../../assets/bg-slate.png";
import Coffee from "../../assets/black.png";
import { motion, spring, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  damping: 10,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.4,
                }}
                className="text-7xl font-bold leading-tight ml-14 select-none"
              >
                Black Thumbler
              </motion.h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      damping: 10,
                      type: "spring",
                      stiffness: 100,
                      delay: 1,
                    }}
                    className="text-2xl select-none"
                  >
                    Black Lifestyle
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      damping: 10,
                      type: "spring",
                      stiffness: 100,
                      delay: 1,
                    }}
                    className="text-sm opacity-55 leading-loose select-none"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum quidem iusto quas, consequatur, optio enim rem
                    voluptates sint ipsam temporibus quod quibusdam labore
                    beatae repudiandae debitis provident vitae. Dolores,
                    debitis!
                  </motion.h1>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  transition={{
                    damping: 10,
                    type: "spring",
                    stiffness: 100,
                    delay: 1,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-6 -left-7 w-[300px] h-[190px] bg-gray-700/25 "
                ></motion.div>
              </div>
            </div>
            {/* image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  damping: 10,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.4,
                }}
                animate={{ opacity: 1, scale: 1 }}
                src={Coffee}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* Orange Circle Ring */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{
                  damping: 10,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.8,
                }}
                animate={{ opacity: 1, y: 0 }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary rounded-full border-[20px] z-10"
              ></motion.div>
              {/* big text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                transition={{
                  damping: 10,
                  type: "spring",
                  stiffness: 100,
                  delay: 0.2,
                }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none select-none">
                  Black Thumbler
                </h1>
              </motion.div>
            </div>
            {/* {third div section} */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Black Thumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    transition={{
                      damping: 10,
                      type: "spring",
                      stiffness: 100,
                      delay: 1,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl text-right"
                  >
                    Black Thumbler
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    transition={{
                      damping: 10,
                      type: "spring",
                      stiffness: 100,
                      delay: 1,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm opacity-55 leading-loose text-right"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum quidem iusto quas, consequatur, optio enim rem
                    voluptates sint ipsam temporibus quod quibusdam labore
                    beatae repudiandae debitis provident vitae. Dolores,
                    debitis!
                  </motion.h1>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  transition={{
                    damping: 10,
                    type: "spring",
                    stiffness: 100,
                    delay: 1,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-6 -right-7 w-[300px] h-[190px] bg-darkGray/50 "
                ></motion.div>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        {/* SIDEBAR MENU SECTION */}
        <AnimatePresence>
          {sidebar && (
            <motion.div
              initial={{ x: "100%" }}
              transition={{
                damping: 10,
                stiffness: 100,
                delay: 0,
              }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="absolute top-0 right-0 w-[190px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
            >
              <div className="flex justify-center items-center w-full h-full">
                <div className="gap-6 text-white flex flex-col justify-center items-center">
                  {/* LINE */}
                  <div className="w-[2px] h-[70px] bg-white "></div>
                  {/* SOCIAL ICON */}
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaFacebookF className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaTwitter className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaInstagram className="text-2xl" />
                  </div>

                  <div className="w-[2px] h-[70px] bg-white"></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Hero;