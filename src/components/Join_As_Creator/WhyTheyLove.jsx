import React from "react";
import girl from "../../assets/images/girl.jpg";
import { whylove } from "../../constants/whylove";

function WhyTheyLove() {
  return (
    <section className="  bg-gradient-to-b from-primary  to-orange-300 text-white px-5  py-24 mt-20 w-full flex flex-col justify-center items-center">
      <div className=" flex flex-col lg:grid grid-cols-3 lg:gap-10 justify-center items-center  gap-5 w-full max-w-6xl">
        <div className=" w-full h-full  overflow-hidden  object-cover rounded-2xl">
          <img className="w-full h-full object-cover" src={girl} alt="image" />
        </div>
        <div className=" flex-1 col-span-2 w-full p-10 rounded-3xl h-full shadow-xl bg-white text-black">
          <h1 className=" text-5xl lg:leading-tight font-semibold">
            Why Influencers Love Collab
            <span className=" text-primary headfont  ">r</span>
          </h1>
          <p className=" text-xl  mt-2">
            The simple way to sell, manage, and get paid as a creator
          </p>
          <div className=" grid lg:grid-cols-2  gap-5  py-10 ">
            {whylove.map((item, index) => (
              <>
                {index === 5 ? (
                  <div className=" flex flex-col justify-center items-center h-full w-full ">
                    <button
                      className={
                        " p-2 lg:p-4 px-7 lg:px-10 mt-3 lg:mt-5  shadow-2xl shadow-[#CE85FF]  gap-2 text-lg rounded-full flex flex-row justify-center items-center transition-all bg-primary  text-white hover:bg-hoverprimary"
                      }
                    >
                      <h1>Signup as a creator</h1>
                    </button>
                  </div>
                ) : (
                  <>
                    <div class="relative pl-16">
                      <dt class="text-base headfont font-semibold  leading-7 text-gray-900">
                        <div class="absolute   left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
                          <img src={item.icon} className="w-40" alt="logo" />
                        </div>
                        {item.title}
                      </dt>
                      <dd class="mt-1 text-base leading-7 text-gray-600">
                        {item.constent}
                      </dd>
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyTheyLove;
