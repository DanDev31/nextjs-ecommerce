import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { TbPawFilled } from "react-icons/tb";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-12 lg:px-[200px] space-y-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-center md:text-start pt-10">
        <div className="space-y-6 border-b border-gray-400 pb-4 md:border-0 md:pb-0">
          <div>
            <div className="flex items-center justify-center gap-2 font-black text-4xl">
              <h2>PawFriends</h2>
              <TbPawFilled className="rotate-45" />
            </div>
            <span className="text-sm italic">All for your flurry partner</span>
          </div>

          <div className="flex items-center justify-center md:flex-col md:items-start gap-3">
            <h5 className="text-sm">Find us</h5>

            <div className="flex items-center gap-2 text-lg">
              <Link href="/">
                <BsFacebook />
              </Link>
              <Link href="/">
                <BsInstagram />
              </Link>
              <Link href="/">
                <BsTwitter />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="flex justify-between text-xs md:flex-col md:gap-4 [&>*]:tracking-wider">
            <li className="hover:underline transition-all">
              <Link href="/dogs">Dogs</Link>
            </li>
            <li className="hover:underline transition-all">
              <Link href="/cats">Cats</Link>
            </li>
            <li className="hover:underline transition-all">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline transition-all">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2 flex flex-col justify-center max-w-[350px] mx-auto ">
          <h4 className="font-bold text-xl tracking-wide">
            Keep in touch with us<span className="text-yellow-400">.</span>
          </h4>
          <form className="flex items-stretch rounded-sm overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="outline-none border-0 p-1 placeholder:text-xs w-full"
            />
            <button type="submit" className="bg-yellow-400 px-2 text-sm">
              <BsFillSendFill />
            </button>
          </form>
        </div>
      </div>
      <div className="text-xs text-center w-full py-3 tracking-wider font-light">
        <span className="block w-full">
          Designed & Built by Daniel Sánchez - Dandev
        </span>
      </div>
    </footer>
  );
};

export default Footer;
