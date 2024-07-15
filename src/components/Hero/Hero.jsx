import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImage from "../../assets/bg-slate.png";
import Coffee from "../../assets/black.png";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section */}
          <Navbar />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Black Thumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum quidem iusto quas, consequatur, optio enim rem
                    voluptates sint ipsam temporibus quod quibusdam labore
                    beatae repudiandae debitis provident vitae. Dolores,
                    debitis!
                  </h1>
                </div>
                <div className="absolute -top-6 -left-0 w-[250px] h-[190px] bg-gray-700/25 "></div>
              </div>
            </div>
            {/* image section */}
            <div className="relative">
              <img
                src={Coffee}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* Orange Circle Ring */}
              <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary rounded-full border-[20px] z-10"></div>
              {/* big text section */}
              <div className="absolute -top-20 left-[200px] z-[1]">
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Black Thumbler
                </h1>
              </div>
            </div>
            {/* {third div section} */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Black Thumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Thumbler</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum quidem iusto quas, consequatur, optio enim rem
                    voluptates sint ipsam temporibus quod quibusdam labore
                    beatae repudiandae debitis provident vitae. Dolores,
                    debitis!
                  </h1>
                </div>
                <div className="absolute -top-6 -right-0 w-[250px] h-[190px] bg-darkGray/50 "></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
