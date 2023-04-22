import Image from "next/image";
import React from "react";
import aboutImage from "../../../public/assets/about.jpg";

const AboutPage = () => {
  return (
    <section className="py-7">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="max-w-[900px]">
          <Image src={aboutImage} alt="About image" />
        </div>
        <div>
          <h2 className="font-black text-[52px] text-slate-800 border-b border-gray-300 pb-3">
            We love pets <br /> so we have the best <br /> for make them
            <span className="text-orange-400"> HAPPY!!</span>
          </h2>
          <div className="pt-5 text-sm tracking-wide text-gray-500 space-y-2">
            <p>
              At our pet store, we are passionate about providing the very best
              care for your furry family members. Whether you have a dog, cat,
              bird, or any other type of pet, we are here to help you find
              everything you need to keep them happy and healthy.
            </p>
            <p>
              Our team of knowledgeable staff are all pet owners themselves, and
              they understand the unique needs and challenges that come with pet
              ownership. They are always available to answer your questions and
              provide advice on everything from nutrition to grooming to
              training. We believe that pets are more than just animals - they
              are part of the family.
            </p>
            <p>
              That is why we carry a wide selection of high-quality products,
              from premium pet food to comfortable beds to interactive toys. We
              are always on the lookout for the latest and greatest products to
              help you give your pets the very best care. At our store, you all
              find a warm and welcoming environment where you and your pets can
              feel at home. We are committed to building lasting relationships
              with our customers and their furry friends, and we are always here
              to help you in any way we can.
            </p>
            <p>
              Thank you for choosing our pet store as your go-to source for all
              things pet-related. We look forward to serving you and your furry
              family members for years to come!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
