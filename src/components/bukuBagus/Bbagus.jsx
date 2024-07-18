import React from "react";
import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.webp";
import book3 from "../../assets/book3.png";
import { FaStar } from "react-icons/fa";

const imgList = [
  {
    id: 1,
    image: book1,
    penulis: "Dr. Robingatun. M.Pd.I., dkk",
    title: "Ilmu Ilmu Keislaman",
    description:
      "Buku ini memberikan wawasan mendalam tentang ilmu keislaman, mencakup berbagai aspek dari sejarah hingga praktik kontemporer. Ditulis dengan bahasa yang mudah dipahami, sangat direkomendasikan bagi siapa saja yang ingin memperdalam pengetahuan mereka tentang Islam. Buku ini juga membahas berbagai topik seperti teologi, hukum Islam, dan sejarah peradaban Islam, memberikan pembaca pemahaman yang komprehensif dan mendalam.",
  },
  {
    id: 2,
    image: book2,
    penulis: "Ajosh",
    title: "Business Solution",
    description:
      "Buku ini menawarkan solusi bisnis yang inovatif dan praktis. Cocok untuk para profesional yang ingin meningkatkan efisiensi dan efektivitas dalam dunia bisnis modern. Buku ini mencakup berbagai strategi bisnis, studi kasus, dan teknik manajemen yang dapat diterapkan dalam berbagai situasi bisnis. Dengan pendekatan yang praktis dan berbasis bukti, buku ini menjadi panduan yang sangat berguna bagi para pengusaha dan manajer.",
  },
  {
    id: 3,
    image: book3,
    penulis: "Ajosh",
    title: "Dark",
    description:
      "Buku ini mengisahkan cerita misteri yang penuh dengan ketegangan dan intrik. Sangat cocok bagi para penggemar genre thriller dan suspense. Cerita ini mengikuti perjalanan seorang detektif yang mencoba memecahkan serangkaian pembunuhan misterius. Dengan plot yang penuh liku dan karakter yang kompleks, buku ini akan membuat pembaca terus terjaga hingga halaman terakhir.",
  },
];

const Bbagus = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p
              className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              Trending Books
            </p>
            <h1
              className="text-3xl font-bold"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              Best Books
            </h1>
            <p
              className="text-xs text-gray-400"
              data-aos="zoom-in"
              data-aos-once="true"
            >
              Temukan buku-buku terbaik yang sedang trending saat ini. Dari ilmu
              keislaman hingga solusi bisnis, kami memiliki koleksi yang beragam
              untuk memenuhi kebutuhan bacaan Anda.
            </p>
          </div>
          {/* Card Section */}

          <div
            className="grid grid-cols-1 sm:grid-cols-2 
          md:grid-cols-3 md:gap-5 place-items-center"
          >
            {imgList.map((item) => (
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                key={item.id}
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary
                 dark:hover:bg-primary hover:text-white relative
                  shadow-xl duration-high group max-w-[300px] w-full mx-4 my-14"
              >
                <div className="h-[100px] flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-[100px] block mx-auto transform
                  -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p
                    className="text-gray-500 group-hover:text-white 
                  duration-300 text-sm line-clamp-2"
                  >
                    {item.description}
                  </p>
                  <button
                    onClick={handleOrderPopup}
                    className="bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4
                  hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bbagus;