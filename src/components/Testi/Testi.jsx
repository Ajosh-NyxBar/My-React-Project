import React from "react";
import Slider from "react-slick";
import ajosh from "../../assets/ajosh.png";
import rizqi from "../../assets/wang.png";
import alicia from "../../assets/alicia.png";

const testData = [
  {
    id: 1,
    name: "Ajosh",
    text: "Saya sangat puas dengan layanan yang diberikan. Buku-buku yang saya beli sangat berkualitas.",
    img: ajosh,
  },
  {
    id: 2,
    name: "Wang",
    text: "Pengiriman cepat dan buku-buku yang saya terima dalam kondisi sangat baik. Terima kasih!",
    img: rizqi,
  },
  {
    id: 3,
    name: "Alicia",
    text: "Saya merekomendasikan toko ini kepada teman-teman saya. Pelayanan yang sangat memuaskan!",
    img: alicia,
  },
];
const Testi = () => {
  var setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-10">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">Testimonial</h1>
          <p className="text-xs text-gray-400">
            Temukan testimoni terbaik dari pelanggan kami. Dari pengalaman
            pribadi hingga ulasan produk, kami memiliki berbagai testimoni untuk
            membantu Anda membuat keputusan yang tepat.
          </p>
        </div>

        {/* Card Section */}
        <div>
          <Slider {...setting}>
            {testData.map((item) => (
              <div key={item.id} className="my-6">
                <div
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                 dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-gray-500 text-sm">{item.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {item.name}
                      </h1>
                    </div>
                    <p className="absolute top-0 right-0 font-serif text-9xl z-10 text-black/20">
                      ,,
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testi;
