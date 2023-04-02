import React from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-transparent sticky top-0 px-5 py-3">
      <div className="flex items-center justify-between gap-5">
        <div>
          <Image src={logo} alt="" />
        </div>

        <div className="relative flex items-center w-full lg:w-1/3">
          <input
            className="border border-gray-200 text-sm py-1 pl-6 pr-2 rounded-lg text-gray-500 w-full"
            type="text"
            placeholder="What are you looking for?"
          />
          <BiSearch className="absolute left-1" />
        </div>

        <div className="flex gap-2 [&>*]:cursor-pointer text-xl">
          <FaUserCircle />
          <FaShoppingCart />
        </div>
      </div>

      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
