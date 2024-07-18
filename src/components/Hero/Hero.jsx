import React, { useState } from "react";
import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.webp";
import book3 from "../../assets/book3.png";
import bg from "../../assets/bg.png";

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

const Hero = ({handleOrderPopup}) => {
  const [imageId, setImageId] = useState(book1);
  const [penulis, setPenulis] = useState("Dr. Robingatun. M.Pd.I., dkk");
  const [title, setTitle] = useState("Ilmu Ilmu Keislaman");
  const [description, setDescription] = useState(
    "Buku ini memberikan wawasan mendalam tentang ilmu keislaman, mencakup berbagai aspek dari sejarah hingga praktik kontemporer. Ditulis dengan bahasa yang mudah dipahami, sangat direkomendasikan bagi siapa saja yang ingin memperdalam pengetahuan mereka tentang Islam. Buku ini juga membahas berbagai topik seperti teologi, hukum Islam, dan sejarah peradaban Islam, memberikan pembaca pemahaman yang komprehensif dan mendalam."
  );

  const bgImage = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 
      flex justify-center items-center dark:bg-gray-950
       dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              className="flex flex-col justify-center gap-4 
            pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold "
              >
                {title}
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                  by {penulis}
                </p>
              </h1>
              <p
                className="text-sm"
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                {description}
              </p>
              <div>
                <button
                  onClick={handleOrderPopup}
                  data-aos="zoom-in"
                  className="bg-gradient-to-r from-primary to-secondary
                 text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200"
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* image Section */}
            <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              {/* main image */}
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  src={imageId}
                  data-aos="zoom-in"
                  data-aos-once="true"
                  alt=""
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto"
                />
              </div>
              {/* other image list */}
              <div
                className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 
              justify-center gap-4 absolute -bottom-[40px] lg:-right-1"
              >
                {imgList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    key={item.id}
                    src={item.image}
                    alt=""
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                    onClick={() => {
                      setImageId(item.image);
                      setPenulis(item.penulis);
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
