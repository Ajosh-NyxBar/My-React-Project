import React, { useState, useEffect } from "react";
import darkTg from "../../assets/dark.png";
import lightTg from "../../assets/light.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative flex items-center">
      <img
        src={lightTg}
        alt="light"
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
        transition-all duration-300 absolute
        ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <img
        src={darkTg}
        alt="dark"
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
        transition-all duration-300 
        ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};

export default DarkMode;