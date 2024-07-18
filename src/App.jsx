import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Bbagus from "./components/bukuBagus/Bbagus";
import Banner from "./components/Banner/Banner";
import BannerPenjualanMisalkanAppstoreAtauGooglePlay from "./components/BannerPenjualanMisalkanAppstoreAtauGooglePlay/BannerPenjualanMisalkanAppstoreAtauGooglePlay";
import Topbooks from "./components/TopBooks/Topbooks";
import Testi from "./components/Testi/Testi";
import Unhabitatislandsurvivalfooter from "./components/puter/unhabitatislandsurvivalfooter";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [order, setOrder] = useState(false  );

  const handleOrderPopup = () => {
    setOrder(!order);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Bbagus handleOrderPopup={handleOrderPopup} />
        <Banner />
        <BannerPenjualanMisalkanAppstoreAtauGooglePlay />
        <Topbooks />
        <Testi />
        <Unhabitatislandsurvivalfooter />
        <Popup order={order} handleOrderPopup={handleOrderPopup} />
      </div>
    </>
  );
};

export default App;
