import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { TbPawFilled } from "react-icons/tb";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-transparent sticky top-0 shadow-sm z-30">
      <div className="flex items-center justify-between gap-5 bg-indigo-800 px-4 lg:px-10 py-4 text-white">
        <Link href="/" className="flex items-center gap-1 text-xl">
          <span className="font-bold ">PawFriends</span>
          <TbPawFilled className="rotate-45" />
        </Link>

        <div className="relative flex items-center w-full lg:w-1/3">
          <input
            className="border border-gray-200 text-sm py-2 pl-6 pr-2 rounded-xl text-gray-500 w-full"
            type="text"
            placeholder="What are you looking for?"
          />
          <BiSearch className="absolute left-1 text-slate-900" />
        </div>

        <div className="flex gap-2 [&>*]:cursor-pointer text-lg">
          <FaUserAlt />
          <Link href="/cart">
            <ImCart />
          </Link>
        </div>
      </div>

      <div className="flex justify-center py-3 bg-white shadow-sm">
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
