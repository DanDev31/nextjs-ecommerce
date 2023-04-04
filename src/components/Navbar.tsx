import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { TbPawFilled } from "react-icons/tb";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-transparent sticky top-0 shadow-sm z-30">
      <div className="flex items-center justify-between gap-5 bg-indigo-200 px-4 py-2">
        <div className="flex items-center gap-1 text-xl">
          <span className="font-black ">PawFriends</span>
          <TbPawFilled className="rotate-45" />
        </div>

        <div className="relative flex items-center w-full lg:w-1/3">
          <input
            className="border border-gray-200 text-sm py-1 pl-6 pr-2 rounded-lg text-gray-500 w-full"
            type="text"
            placeholder="What are you looking for?"
          />
          <BiSearch className="absolute left-1" />
        </div>

        <div className="flex gap-2 [&>*]:cursor-pointer text-lg">
          <FaUserAlt />
          <ImCart />
        </div>
      </div>

      <div className="flex justify-center py-3 bg-white">
        <ul className="flex gap-7 text-sm font-semibold">
          <li>
            <Link href="#">Dogs</Link>
          </li>
          <li>
            <Link href="#">Cats</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
