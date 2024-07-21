import React from "react";
import Headphone4 from "../../assets/headphone4.png";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
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


const Banner = () => {
  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
          {/* Banner Image */}
          <div>
            <motion.img
              initial={{ opacity: 0, x: -100, rotate: -180 }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: 0,
                transition: { duration: 0.8, delay: 0.2, ease: "easeInOut" },
              }}
              viewport={{ once: true, amount: 0.2 }}
              src={Headphone4}
              alt="headphone"
              className="w-[300px] md:w-[400px]"
            />
          </div>
          {/* Banner Text info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <motion.h1
                variants={fadeUp(0.2)}
                initial="hidden"
                whileInView="show"
                className="text-3xl lg:text-4xl font-semibold font-poppins"
              >
                The Latest Headphone With The Latest Technology
              </motion.h1>
              <motion.p
                variants={fadeUp(0.9)}
                initial="hidden"
                whileInView="show"
                className="text-lg lg:text-xl font-medium font-poppins"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                voluptatem ipsum cumque, eligendi obcaecati ullam optio quam
                sint aspernatur a nihil, doloribus nulla culpa debitis sed natus
                totam commodi ea amet accusantium maiores iusto accusamus
                consequuntur? Quidem dolores aliquid veniam, accusamus possimus
                maxime sed, recusandae ipsum, dignissimos voluptas voluptatem
                natus.
              </motion.p>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 99999,
                  followSpeed: 0.5,
                  mixBlendMode: "difference",
                  scale: 5,
                }}
              >
                <motion.button
                  variants={fadeUp(1.4)}
                  initial="hidden"
                  whileInView="show"
                  className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md
                hover:bg-[#e33343] hover:text-white"
                >
                  Shop Now
                </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Banner;
