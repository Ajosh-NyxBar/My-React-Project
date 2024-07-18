import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Important Links",
    links: [
      { name: "Home", link: "/#" },
      { name: "About", link: "/#about" },
      { name: "Contact", link: "/#contact" },
      { name: "Blog", link: "/#blog" },
    ],
  },
];
const footerLinks2 = [
  {
    title: "Quick Links",
    links: [
      { name: "Services", link: "/#services" },
      { name: "Portfolio", link: "/#portfolio" },
      { name: "Careers", link: "/#careers" },
      { name: "Support", link: "/#support" },
    ],
  },
];
const footerLinks3 = [
  {
    title: "Resources",
    links: [
      { name: "Documentation", link: "/#documentation" },
      { name: "API Reference", link: "/#api" },
      { name: "Community", link: "/#community" },
      { name: "Tutorials", link: "/#tutorials" },
    ],
  },
];

const Unhabitatislandsurvivalfooter = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* company detail */}
          <motion.div
            className="py-8 px-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              Ajosh Book
            </h1>
            <p className="text-sm text-gray-500">
              Ajosh Book adalah toko online untuk belanja buku-buku yang
              berkualitas tinggi.
            </p>
            <br />
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Purwakarta</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>081234567890</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaYoutube className="text-3xl" />
              </a>
            </div>
          </motion.div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <motion.div
              className="py-8 px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                {footerLinks[0].title}
              </h1>
              <ul className="flex-col gap-3 flex">
                {footerLinks[0].links.map((link) => (
                  <li
                    key={link.name}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                  >
                    <a href={link.link}>
                      <span>&rarr;</span> {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="py-8 px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                {footerLinks2[0].title}
              </h1>
              <ul className="flex-col gap-3 flex">
                {footerLinks2[0].links.map((link) => (
                  <li
                    key={link.name}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                  >
                    <a href={link.link}>
                      <span>&rarr;</span> {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="py-8 px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                {footerLinks3[0].title}
              </h1>
              <ul className="flex-col gap-3 flex">
                {footerLinks3[0].links.map((link) => (
                  <li
                    key={link.name}
                    className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                  >
                    <a href={link.link}>
                      <span>&rarr;</span> {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        {/* copiright section */}
        <div>
          <div className="border-t-2 border-gray-300/50">
            <p className="text-center py-10">
              Copiright &copy; 2024 Ajosh Book. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unhabitatislandsurvivalfooter;