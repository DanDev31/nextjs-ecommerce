"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { TbPawFilled } from "react-icons/tb";

import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const {
    state: { totalProducts },
  } = useAppContext();

  const path = usePathname();
  const { data: session } = useSession();

  return (
    <>
      {path.includes("authentication") ? (
        <header className="flex items-center justify-between gap-5 bg-indigo-800 px-4 lg:px-10 py-4 text-white">
          <Link href="/" className="flex items-center gap-1 text-xl">
            <span className="font-bold">PawFriends</span>
            <TbPawFilled className="rotate-45" />
          </Link>
        </header>
      ) : (
        <nav className="bg-transparent sticky top-0 shadow-sm z-30">
          <div className="flex items-center justify-between gap-5 bg-indigo-800 px-3 lg:px-10 py-4 text-white">
            <Link href="/" className="flex items-center gap-1 text-xl">
              <span className="font-bold hidden md:block">PawFriends</span>
              <TbPawFilled className="rotate-45 text-2xl" />
            </Link>

            <div className="relative flex items-center w-full lg:w-1/3">
              <input
                className="border border-gray-200 text-sm py-[5px] pl-6 pr-2 rounded-xl text-gray-500 w-full placeholder:text-xs"
                type="text"
                placeholder="What are you looking for?"
              />
              <BiSearch className="absolute left-1 text-slate-900" />
            </div>

            <div className="flex items-center justify-end gap-6 [&>*]:cursor-pointer min-w-[100px] leading-4">
              <Link href="/cart" className="relative">
                <span className="absolute -top-2 -right-3 font-semibold text-sm bg-amber-500 text-white rounded-full w-[20px] h-[20px] flex items justify-center">
                  {totalProducts}
                </span>
                <FaShoppingBag />
              </Link>
              {session ? (
                <div
                  className="relative"
                  onClick={() => setOpenMenu((prev) => !prev)}
                >
                  <span className="text-xs">Hi, {session.user?.name}</span>
                  <div
                    className={`absolute bg-indigo-50 rounded-md shadow-lg 
                  flex items-center justify-center duration-100 top-12 w-[100px] h-[60px] ${
                    openMenu ? "right-0" : "-right-[200px]"
                  }`}
                  >
                    <span
                      className="text-gray-800 text-sm "
                      onClick={() =>
                        signOut({
                          callbackUrl: "/",
                        })
                      }
                    >
                      Logout
                    </span>
                  </div>
                </div>
              ) : (
                <Link href="/authentication/login">
                  <FaUserAlt />
                </Link>
              )}
            </div>
          </div>

          <div className="flex justify-center py-3 bg-white shadow-sm">
            <ul className="flex gap-7 text-sm font-semibold text-gray-500">
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
