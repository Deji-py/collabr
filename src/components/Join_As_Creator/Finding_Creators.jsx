import React from "react";
import LogoCarousel from "../LogoCarousel";

function Finding_Creators() {
  return (
    <div className=" flex flex-col py-24 justify-center items-center">
      <section className=" w-full  flex flex-col justify-center items-center max-w-6xl px-5 lg:px-0">
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className=" text-3xl  lg:text-5xl text-center font-semibold"
        >
          Brand finding creators on Collab
          <span className=" text-primary text-3xl  headfont lg:text-5xl">
            r
          </span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center text-lg lg:text-lg text-gray-700 py-4 "
        >
          Over 800 renowned brands are actively seeking collaboration with
          influencers like you. Join now to create your account and unlock
          opportunities to work with leading international and national brands.
          Get hired and elevate your influence in the world of brand
          partnerships.
        </p>
      </section>

      <LogoCarousel />
      <button
        data-aos="fade-up"
        data-aos-delay="400"
        className={
          " p-2 lg:p-4 px-7   lg:px-10 mt-8 lg:mt-20  shadow-2xl shadow-[#CE85FF]  gap-2 text-lg rounded-full flex flex-row justify-center items-center transition-all bg-primary  text-white hover:bg-hoverprimary"
        }
      >
        <h1>Collab with them</h1>
      </button>
    </div>
  );
}

export default Finding_Creators;
