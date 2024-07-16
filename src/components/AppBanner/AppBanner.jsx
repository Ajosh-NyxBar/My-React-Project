import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/website/Kopu.jpeg";
import appStore from "../../assets/website/app_store.png";
import creditCard from "../../assets/website/credit-cards.webp";
import playStore from "../../assets/website/play_store.png";

const BannerStyle = {
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const AppBanner = () => {
  return (
    <div className="container my-14">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto mr-36">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.2,
                stiffness: 100,
                damping: 10,
              }}
              viewport={{ once: true }}
              className="text-2xl text-center sm:text-4xl font-semibold text-white"
            >
              Download the App
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.3,
                stiffness: 100,
                damping: 10,
              }}
              viewport={{ once: true }}
              className="text-center sm:px-20 text-white"
            >
              Download the app to get started. <br />
              Get the best experience with the app.
            </motion.p>
            {/* Image LINKs */}
            <div className="flex justify-center items-center gap-4">
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <motion.img
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.4,
                    stiffness: 100,
                    damping: 10,
                  }}
                  viewport={{ once: true }}
                  src={appStore}
                  alt="App Store"
                />
              </a>
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <motion.img
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.5,
                    stiffness: 100,
                    damping: 10,
                  }}
                  viewport={{ once: true }}
                  src={playStore}
                  alt="Play Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;