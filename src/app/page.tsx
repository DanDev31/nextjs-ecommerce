import Slider from "@/components/Slider";

export default function Home() {
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
    <div>
      <section>
        <Slider images={images} autoplay={false} />
      </section>
    </div>
  );
}
