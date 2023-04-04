import React from "react";
import Slider from "./Slider";

const Hero = () => {
  const images = [
    {
      url: "img_1.jpg",
      title: "What to do if your cat climbs a tree?",
    },
    {
      url: "img_2.jpg",
      title: "Beautiful Huskies to adopt!",
    },
    {
      url: "img_3.jpg",
      title: "Your kitty loves to sleep, knows why?",
    },
    {
      url: "img_4.jpg",
      title: "Most loyal dog breeds.",
    },
    {
      url: "img_5.jpg",
      title: "The top 5 playgames your puppy will love.",
    },
  ];
  return (
    <section className="pt-8 pb-12 min-h-[80vh] ">
      <Slider images={images} autoplay={false} />
    </section>
  );
};

export default Hero;
