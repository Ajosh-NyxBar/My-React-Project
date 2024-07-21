import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

const headphone = [
  {
    id: 1,
    image: Headphone1,
    subtitle:
      "Streamline your music game with the latest headphone models. Experience pure soundtrack with our premium headphones. Dive into the world of music with our sleek and modern designs.",
    title: "Headphone Wireless",
    price: "$299",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    subtitle:
      "Streamline your music game with the latest headphone models. Experience pure soundtrack with our premium headphones. Dive into the world of music with our sleek and modern designs.",
    title: "Headphone Wireless",
    price: "$299",
    modal: "Modal Lime",
    bgColor: "#a4c639",
  },
  {
    id: 3,
    image: Headphone3,
    subtitle:
      "Streamline your music game with the latest headphone models. Experience pure soundtrack with our premium headphones. Dive into the world of music with our sleek and modern designs.",
    title: "Headphone Wireless",
    price: "$299",
    modal: "Modal Blue",
    bgColor: "#1e90ff",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(headphone[0]);

  const variants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
    exit: {
      pathLength: 0,
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <>
      <section className="bg-brandDark text-white font-varela relative overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px] overflow-hidden">
          {/* Brand */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 99999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 6,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    className="text-3xl lg:text-6xl font-bold font-varela "
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 99999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    backgroundElement: (
                      <div style={{ fontSize: "1.5rem", color: "black" }}>
                        <p>{activeData.subtitle}</p>
                      </div>
                    ),
                    scale: 6,
                  }}
                >
                  <motion.p
                    key={activeData.id}
                    className="text-sm leading-loose text-white/80"
                    variants={fadeUp(0.4)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {activeData.subtitle}
                  </motion.p>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 99999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} alt={activeData.title} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    className="px-4 py-2 inline-block font-normal rounded-sm"
                    style={{ backgroundColor: activeData.bgColor }}
                    variants={fadeUp(0.6)}
                    viewport={{ once: true, amount: 0.5 }}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    Buy And Listen
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>
              {/* Headphone list */}
              <div className="flex items-center justify-center md:justify-start gap-4  mt-24">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                  exit={{ opacity: 0, x: -50, transition: { duration: 1 } }}
                  className="w-20 h-[1px] bg-white"
                  viewport={{ once: true, amount: 0.5 }}
                ></motion.div>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.75 },
                  }}
                  exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  Top Headphone Foryou
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                  exit={{ opacity: 0, x: 50, transition: { duration: 1 } }}
                  className="w-20 h-[1px] bg-white"
                  viewport={{ once: true, amount: 0.5 }}
                ></motion.div>
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-10">
                {headphone.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <UpdateFollower
                      key={item.id}
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 99999,
                        followSpeed: 0.5,
                        rotate: -720,
                        text: "View",
                        scale: 6,
                        textFontSize: "3px",
                      }}
                    >
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="grid grid-cols-2 place-items-center cursor-pointer"
                        onClick={() => setActiveData(item)}
                      >
                        <div className="">
                          <AnimatePresence>
                            <motion.img
                              src={item.image}
                              alt={item.title}
                              className="w-[50px] md:w-[100px]"
                              viewport={{ once: true, amount: 0.5 }}
                            />
                          </AnimatePresence>
                        </div>
                        <div className="space-y-2">
                          <p className="text-base font-bold">{item.price}</p>
                          <p className="text-xs font-normal text-nowrap">
                            {item.modal}
                          </p>
                        </div>
                      </motion.div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex flex-col justify-end items-center">
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              style={{ position: "absolute" }}
              viewport={{ once: true, amount: 0.5 }}
              className="pt-10  "
            >
              <img
                src={activeData.image}
                alt={activeData.title}
                className="w-[200px] md:w-[400px] xl:w-[550px] pt-10 mt-10"
              />
            </motion.div>
          </div>
          {/* WA Icon */}
          <div
            className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg]
              duration-500 z-[99999] mix-blend-difference"
          >
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
