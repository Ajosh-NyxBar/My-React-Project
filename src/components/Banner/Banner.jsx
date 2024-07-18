import React from "react";
import library from "../../assets/lib.jpg";
import {
  GrDeliver,
  GrMoney,
  GrPaypal,
  GrSecure,
  GrTransaction,
} from "react-icons/gr";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            {/* image section */}
            <div>
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true, amount: 0.5 }}
                src={library}
                alt="library"
                className="max-w-[400px] block mx-auto
                 h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>
            {/* text image section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 mt-6">
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0 }}
                className="text-3xl sm:text-4xl font-bold"
              >
                Library at your fingertips
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0 }}
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
                Temukan berbagai buku, jurnal, dan sumber daya lainnya di
                perpustakaan kami yang dapat diakses kapan saja dan di mana
                saja. Kami menyediakan akses ke koleksi yang beragam untuk
                mendukung kebutuhan belajar dan penelitian Anda.
              </motion.p>
              <div className="flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, amount: 0 }}
                  className="flex items-center gap-4"
                >
                  <GrSecure
                    className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                    bg-violet-100 dark:bg-violet-400"
                  />
                  <p>Quality Book</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, amount: 0 }}
                  className="flex items-center gap-4"
                >
                  <GrDeliver
                    className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                    bg-orange-100 dark:bg-orange-400"
                  />
                  <p>Fast Delivery</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, amount: 0 }}
                  className="flex items-center gap-4"
                >
                  <GrTransaction
                    className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                    bg-green-100 dark:bg-green-400"
                  />
                  <p>Easy Payment Method</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true, amount: 0 }}
                  className="flex items-center gap-4"
                >
                  <GrMoney
                    className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                    bg-yellow-100 dark:bg-yellow-400"
                  />
                  <p>Get offers on books</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
