"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { TbPawFilled } from "react-icons/tb";

import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
  const {
    state: { totalProducts },
  } = useAppContext();

  const path = usePathname();

  return (
    <>
      {path.includes("authentication") ? (
        <header className="flex items-center justify-between gap-5 bg-indigo-800 px-4 lg:px-10 py-4 text-white">
          <Link href="/" className="flex items-center gap-1 text-xl">
            <span className="font-bold ">PawFriends</span>
            <TbPawFilled className="rotate-45" />
          </Link>
        </header>
      ) : (
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

            <div className="flex gap-2 [&>*]:cursor-pointer text-xl">
              <Link href="/authentication/register">
                <FaUserAlt />
              </Link>
              <Link href="/cart" className="relative">
                <span className="absolute -top-2 -right-3 font-semibold text-sm bg-amber-500 text-white rounded-full w-[20px] h-[20px] flex items justify-center">
                  {totalProducts}
                </span>
                <FaShoppingBag />
              </Link>
            </div>
          </div>

          <div className="flex justify-center py-3 bg-white shadow-sm">
            <ul className="flex gap-7 text-sm font-semibold">
              <li>
                <Link href="/shop/dogs">Dogs</Link>
              </li>
              <li>
                <Link href="/shop/cats">Cats</Link>
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
      )}
    </>
  );
};

export default Navbar;
