import React from "react";
import heroimg from "../../assets/images/heroimg.png";
import HeroCarousel from "../HeroCarousel";

function Hero_section() {
  return (
    <div className=" fancybg lg:py-0 py-16">
      <section className=" w-full  max-w-7xl px-5 flex flex-col lg:flex-row justify-ccenter items-center gap-20 lg:px-10 py-14 ">
        <div className=" flex-1 ">
          <h1 className="  text-3xl lg:text-5xl lg:leading-[4rem] leading-10 text-start font-semibold">
            Collaborate With Brands, Get Paid{" "}
            <span className="fancyUderline headfont  text-primary text-3xl lg:text-5xl">
              Instantly.
            </span>
          </h1>
          <p className=" text-start text-lg py-8 text-gray-700  lg:leading-normal  leading-snug">
            Welcome to Collabr, the ultimate platform for creators like you to
            connect with brands and bring your unique vision to life. Join our
            vibrant community of influencers, artists, and content creators to
            embark on exciting collaborations that elevate your profile and
            captivate your audience.
          </p>
          <button
            className={
              " p-2 lg:p-4 px-7 lg:px-10 mt-3 lg:mt-5  shadow-2xl shadow-[#CE85FF]  gap-2 text-lg rounded-full flex flex-row justify-center items-center transition-all bg-primary  text-white hover:bg-hoverprimary"
            }
          >
            <h1>Signup as a creator</h1>
          </button>
        </div>
        <div className=" -mt-8 lg:-mt-4 lg:w-[40%]">
          <HeroCarousel />
          {/* <img src={heroimg} className=" w-full h-full" alt="hero image" /> */}
        </div>
      </section>
    </div>
  );
}

export default Hero_section;
