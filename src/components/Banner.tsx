import Image from "next/image";
import React from "react";
import banner_cat from "../../public/assets/banner-cat.png";
import banner_dog from "../../public/assets/banner-dog.png";

const Banner = () => {
  return (
    <section className="py-[50px] relative">
      <div className="absolute top-[60px] -left-[6.5px] bg-yellow-400 w-[80px] h-[50px] font-alfa text-xl shadow-xl rotate-45"></div>
      <div className="absolute top-6 -left-3 bg-yellow-400 w-[80px] h-[50px] font-black text-xl shadow-xl z-30 flex items-center justify-center">
        SALE
      </div>
      <div className="bg-gradient-to-r from-blue-700 to-indigo-500 rounded-lg py-10 lg:px-[200px] w-full overflow-hidden relative z-20">
        <div className="flex relative">
          <div className="text-white p-3 flex flex-col justify-center">
            <h3>Especial Offers for you!</h3>
            <h2 className="font-black text-[48px] w-1/2 md:w-fit">20% OFF</h2>
            <div className="relative w-[100px]">
              <button className="bg-yellow-400 w-full text-black text-sm py-2 font-semibold mt-1 hover:-translate-y-1 duration-200 z-20">
                SEE MORE
              </button>
              <div className="w-full h-full bg-white absolute top-2 -right-2 z-[-1]"></div>
            </div>
          </div>

          <div className="w-[200px] lg:w-[250px] absolute top-5 lg:-top-10 right-0">
            <Image src={banner_cat} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
