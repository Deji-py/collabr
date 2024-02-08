import React from "react";
import { whyus } from "../../constants/whyus";
import phoneframe from "../../assets/images/phoneframe.png";

function Why_Us() {
  return (
    <section className=" flex  flex-col lg:flex-row  py-10 lg:py-24 justify-center items-center w-full px-5 lg:px-0 max-w-6xl">
      <div className=" w-full lg:w-[60%]">
        <h1
          data-aos="fade-up"
          class="lg:text-5xl text-center lg:text-start py-5 lg:leading-normal  text-3xl font-semibold leading-10 tracking-tight "
        >
          Why Join Collab
          <span className=" text-primary headfont ">r</span>
        </h1>
        <div className=" grid  gap-4 lg:grid-cols-2">
          {whyus.map((item, index) => (
            <div
              className={`rounded-xl hover:bg-primary bg-gray-100 transition-all cursor-pointer  group shadow border-[0.2px] p-8  flex flex-col lg:justify-center lg:items-center lg:text-center`}
              key={index}
            >
              <div className="p-5 w-fit bg-white rounded-xl">
                <img
                  src={item.Image}
                  alt="image"
                  className={`${index === 3 ? "w-16" : "w-20"}`}
                />
              </div>
              <h1
                className={`py-3 font-semibold  group-hover:text-white text-black text-xl`}
              >
                {item.title}
              </h1>
              <p className=" text-lg group-hover:text-white">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className=" relative mt-10 flex flex-col justify-center items-center w-[33rem] lg:w-[32rem] h-full  lg:mt-0 "
      >
        <div className="  overflow-hidden relative w-[20rem] lg:w-[18rem] h-[700px] rounded-[50px]  ">
          <img
            className="  object-cover w-full h-full "
            src="https://img.freepik.com/free-photo/friends-taking-selfie-with-smartphone-tongues-out_52683-111774.jpg?w=360&t=st=1707386635~exp=1707387235~hmac=b4072447c3c1bfa4f0a20a40227919df3a11102adf9e008bf1aa02873d07de66"
            alt="image"
          />
        </div>
        <img
          src={phoneframe}
          className="  w-full absolute top-0 z-20 h-full"
          alt="phoneframe"
        />
      </div>
    </section>
  );
}

export default Why_Us;
