import React from "react";
import { howitworks } from "../../constants/howitworks";

function How_It_Works() {
  return (
    <section className=" py-20 sweetbg clippy relative  flex flex-col justify-center items-center lg:px-5 bg-gradient-to-b from-primary text-black to-orange-300 w-full">
      <div className=" w-60 absolute h-60 -bottom-20 rounded-full bg-[rgba(255,255,255,0.2)]" />
      <div className=" w-40 absolute h-40 top-40   -left-20  rounded-full bg-[rgba(255,255,255,0.2)]" />
      <div className=" w-32 absolute h-32  top-0 lg:-mt-10 -mt-40 right-24 rounded-full bg-[rgba(255,255,255,0.2)]" />
      <h1
        data-aos="fade-up"
        data-aos-delay="400"
        className=" text-3xl  text-white lg:text-4xl  text-center font-semibold"
      >
        How It Works
      </h1>
      <div className=" grid  w-full max-w-6xl p-5 lg:grid-cols-3 mt-5 justify-center items-center gap-10">
        {howitworks.map((item, index) => (
          <div
            data-aos="fade-up"
            className=" bg-[rgba(255,255,255,0.6)] h-full backdrop-blur-sm border-[0.2px] border-white rounded-2xl p-8 flex flex-col justify-center items-center text-center"
            key={index}
          >
            <img src={item.Image} alt="image" />
            <h1 className=" py-3 font-semibold  text-xl">{item.title}</h1>
            <p className=" text-lg">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default How_It_Works;
