import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaPhone,
  FaTelegram,
  FaFacebookF,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import creditCard from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company detail section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Kopi Ajosh</h1>
            <p className="text-sm max-w-[300px]">
              Kopi Ajosh adalah sebuah kopi yang dihasilkan dari bahan bahan
              alami yang kaya dan berkualitas tinggi. Kopi Ajosh dihasilkan dari
              penggalian bahan bahan alami yang kaya dan berkualitas tinggi.
            </p>
            <div>
              <p className="flex items-center gap-2 mt-2">
                <FaPhone />
                08123456789
              </p>
              <p className="flex items-center gap-2 mt-2">
                {""}
                <FaMapLocation />
                Purwakarta
              </p>
            </div>
          </motion.div>
          {/* Footer links section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick LINKs</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* First Column Section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* Second Column Section */}
              <div>
                <ul className="space-y-2">
                  <li>Services</li>
                  <li>Blog</li>
                  <li>FAQ</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-bold">Payment Method</h1>
              <img src={creditCard} alt="credit card" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* Copyright section */}
        <div className="text-center text-white mt-8 pt-8 border-t-2">
          <p>Copyright © 2024 Kopi Ajosh. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
