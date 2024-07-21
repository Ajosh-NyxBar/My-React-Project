import React from "react";
import icon1 from "../../assets/icons/obj1.png";
import icon2 from "../../assets/icons/obj2.png";
import icon3 from "../../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

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

const servicesData = [
  {
    id: 1,
    title: "Security",
    icon: icon1,
    img: "https://placehold.co/50x50/png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Guarantee",
    icon: icon2,
    img: "https://placehold.co/50x50/png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    icon: icon3,
    img: "https://placehold.co/50x50/png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    delay: 1.1,
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center pb-10">Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  scale: 5,
                  rotate: -720,
                  mixBlendMode: "darken",
                  backgroundElement: (
                    <motion.div>
                      <img src={service.icon} alt={service.title} />
                    </motion.div>
                  ),
                }}
              >
                <motion.div
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp(service.delay)}
                  initial="hidden"
                  whileInView="show"
                  key={service.id}
                  className="rounded-xl bg-white flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg"
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-[100px] mb-4"
                  />
                  <h1 className="text-2xl font-bold">{service.title}</h1>
                  <p className="text-center text-sm text-black/75">
                    {service.desc}
                  </p>
                </motion.div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
