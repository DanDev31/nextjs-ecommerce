import Image from "next/image";
import dog from "../../public/assets/dog_card.png";
import cat from "../../public/assets/cat_card.png";
import Link from "next/link";

const SelectPet = () => {
  return (
    <section className="py-[60px]">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full [&>*]:cursor-pointer justify-center">
        <Link href="#">
          <div className="flex justify-center items-center bg-yellow-500 rounded-full w-[300px] h-[300px] p-2 hover:[&>img]:scale-[1.05] relative hover:[&>h2]:block">
            <Image src={dog} alt="dog selection" className="duration-200" />
            <h2 className="absolute text-indigo-500 font-black text-5xl">
              Dogs
            </h2>
          </div>
        </Link>
        <Link href="#">
          <div className="flex justify-center items-center bg-blue-600 rounded-full w-[300px] h-[300px] p-2 hover:[&>img]:scale-[1.05] relative">
            <Image src={cat} alt="dog selection" className="duration-200" />
            <h2 className="absolute text-white font-black text-5xl">Cats</h2>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SelectPet;
