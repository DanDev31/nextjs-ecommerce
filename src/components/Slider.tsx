"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";

type imageData = {
  url: string;
  title: string;
};

interface SliderProps {
  images: imageData[];
  autoplay?: boolean | true;
}

const Slider: React.FC<SliderProps> = ({ images, autoplay }: SliderProps) => {
  const [current, setCurrent] = useState<number>(0);
  const imageRef = useRef<any>(null);

  const length = images.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    if (imageRef && autoplay) {
      setTimeout(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      }, 3500);
    }
  }, [current]);

  return (
    <div className="relative max-w-[1400px] h-[600px] lg:h-[800px] w-full m-auto group px-3">
      <div
        ref={imageRef}
        style={{ backgroundImage: `url(/${images[current].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 flex items-end lg:justify-end pb-[60px] pl-4 lg:pr-4 relative overflow-hidden"
      >
        <div className="z-10 space-y-3">
          <h2 className="font-black text-white text-4xl max-w-[400px]">
            {images[current].title}
          </h2>
          <button className="bg-indigo-600 hover:bg-indigo-700 duration-300 rounded-md font-medium text-white py-2 px-5">
            See more
          </button>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 backdrop-brightness-75 z-[1]"></div>
      </div>

      <MdOutlineArrowBackIosNew
        className="absolute top-[50%] left-5 rounded-full bg-white/60 p-2 cursor-pointer z-10"
        size={35}
        onClick={() => prevSlide()}
      />
      <MdOutlineArrowForwardIos
        className="absolute top-[50%] right-5 rounded-full bg-white/60 p-2 cursor-pointer z-10"
        size={35}
        onClick={() => nextSlide()}
      />
      <div className="flex items-center justify-center gap-1 py-5 cursor-pointer">
        {images.map((e, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`${
              i === current ? "w-11 bg-indigo-500" : ""
            } w-3 h-3 border-2 border-indigo-500 rounded-full transition-all`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
