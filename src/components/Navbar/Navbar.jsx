import React from "react";
import Logo from "../../assets/logo.png";
import { FaCaretDown, FaCartPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode/DarkMode";

const Menu = [
  {
    id: 1,
    title: "Home",
    link: "/#",
  },
  {
    id: 2,
    title: "Best Seller",
    link: "/#services",
  },
];
const DropdownLink = [
  {
    id: 1,
    title: "Trending Books",
    link: "/#",
  },
  {
    id: 2,
    title: "New Arrival",
    link: "/#",
  },
  {
    id: 3,
    title: "Best Selling",
    link: "/#",
  },
];
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-lg bg-white dark:bg-gray-800 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="" className="w-10" />
              Ajosh Books
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className="items-center gap-4 hidden sm:flex">
              {Menu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                  >
                    {item.title}{" "}
                  </a>
                </li>
              ))}
              {/* Dropdown Section */}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex h-[72px] items-center gap[2px]">
                  Quick LINKs
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </a>
                {/* Dropdown Link Section */}
                <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-lg">
                  <ul>
                    {DropdownLink.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300"
            >
              Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
