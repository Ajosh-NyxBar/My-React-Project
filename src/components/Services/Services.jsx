import React, { useState } from "react";
import { motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee3 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle: "Kopi hitam enak dan bikin mood nyoklat, enak banget jirlah, pasti pait soalnya kan ini kopi hitam",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle:
      "Kopi hitam enak dan bikin mood nyoklat, yang ini mah anget, pas banget kan yak lagi musim dingin gini, enak banget jirlah",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold Coffee",
    subtitle: "Kopi hitam enak dan bikin mood nyoklat, cocok nya pas panas, misalnya pas siang hari wkwk. Enak banget jirlah",
  },
];

const cardVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "ease-in-out",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container my-16 space-y-4">
      {/* Header Section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          className="text-3xl font-bold text-lightGray"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 150,
            damping: 10,
          }}
          viewport={{ once: true }}
        >
          Fresh and <span className="text-primary">Tasty Coffee</span>
        </motion.h1>
        <motion.p
          className="text-sm opacity-50"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 150,
            damping: 10,
          }}
          viewport={{ once: true }}
        >
          Nikmati setiap tegukan kopi yang kaya akan cita rasa. Rasakan
          kehangatan dan aroma yang memikat, membawa Anda pada petualangan rasa
          yang tak terlupakan. Kopi kami adalah pilihan sempurna untuk memulai
          hari Anda dengan semangat dan energi baru.
        </motion.p>
      </div>
      {/* Card Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="text-center p-4 space-y-6"
          >
            <img
              src={service.image}
              alt={service.title}
              className="img-shadow2 max-w-[150px] mx-auto hover:scale-110 duration-300 cursor-pointer"
              onClick={() => setSelectedImage(service.image)}
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <h1 className="text-darkGray">{service.subtitle}</h1>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Services;