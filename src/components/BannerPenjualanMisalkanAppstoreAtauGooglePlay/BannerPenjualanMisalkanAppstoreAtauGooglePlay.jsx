import React from "react";
import bannerBg from "../../assets/bannerBg.jpg";
import googlePlay from "../../assets/googlePlay.png";
import appstore from "../../assets/appstore.png";
import { motion } from "framer-motion";

const banner = {
  backgroundImage: `url(${bannerBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const BannerPenjualanMisalkanAppstoreAtauGooglePlay = () => {
  return (
    <div 
      className="bg-gray-100 dark:bg-gray-800 text-white py-10"
      style={banner}
    >
      <div className="container">
        <div className="space-y-6 max-w-xl mx-auto">
          <motion.h1
            className="text-2xl text-center sm:text-4xl font-semibold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Reed Books At Your Fingertips
          </motion.h1>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                src={appstore}
                alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                src={googlePlay}
                alt=""
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPenjualanMisalkanAppstoreAtauGooglePlay;