"use client";

import Image from "next/image";
import React from "react";
import { CustomButton } from "@/atomic/element";
import { useHero } from "./hooks";

const Hero = () => {
  const { handleScroll } = useHero();

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          
          title="Explore Cars"
          containerStyles="bg-primary blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <figure className="hero__image">
          <Image
            src={"/hero.png"}
            alt={"hero"}
            fill
            className="object-contain"
          />
        </figure>
        <figcaption className="hero__image-overlay"></figcaption>
      </div>
    </div>
  );
};

export { Hero };
