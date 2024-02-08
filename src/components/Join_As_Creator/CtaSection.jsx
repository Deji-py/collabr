import React from "react";

function CtaSection() {
  return (
    <div class="overflow-hidden woodbg lg:mb-20 rounded-3xl w-full bg-white border-[0.2px] py-10">
      <div class="mx-auto max-w-7xl  px-6 lg:flex lg:px-8">
        <div class="mx-auto  w-full grid max-w-2xl  grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h1
              data-aos="fade-up"
              class="text-3xl lg:text-5xl lg:leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Ready to <span className=" headfont text-primary">embark</span> on
              a journey of creativity, collaboration, and success?
            </h1>
            <p
              data-aos="fade-up"
              class="mt-6 text-xl lg:text-2xl leading-8 text-gray-600"
            >
              Join Collabr today and open the door to a world of exciting
              opportunities!
            </p>

            <div class="mt-10 flex">
              <button
                data-aos="fade-up"
                className={
                  " p-2 lg:p-4 px-7 lg:px-10 mt-3 lg:mt-5  shadow-2xl shadow-[#CE85FF]  gap-2 text-lg rounded-full flex flex-row justify-center items-center transition-all bg-primary  text-white hover:bg-hoverprimary"
                }
              >
                <h1> JOIN COLLABR NOW</h1>
              </button>
            </div>
          </div>
          <div class="flex flex-wrap  w-full   scale-[0.6] items-start justify-end gap-6 lg:mt-0 -mt-20 sm:gap-8 lg:contents">
            <div class=" self-center h-full w-full flex flex-col justify-center items-center ">
              <img
                src="https://img.freepik.com/free-photo/couples-celebrating-birthday_23-2149891157.jpg?w=740&t=st=1707380190~exp=1707380790~hmac=6c944f302cb1d6947e85a85ceac4eac754bd320aa7462d402f71074a1204cda2"
                alt=""
                class=" lg:w-full h-full w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            {/* <div class=" lg:hidden lg:col-span-2 lg:col-end-2 lg:ml-auto flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="https://img.freepik.com/free-photo/smiling-man-taking-selfie-with-phone_482257-76956.jpg?w=360&t=st=1707379579~exp=1707380179~hmac=0324f937defaee8c7982cb1bc2c2dbbc389612fd24e3ad3d7bf273105c005e58"
                  alt=""
                  class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div class=" hidden lg:flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="https://img.freepik.com/free-photo/man-riding-his-bicycle-outdoors-city_23-2150816029.jpg?t=st=1707379602~exp=1707383202~hmac=c501fa887bf441db325323dd881ac5e941144cab51128e49d569cbf060f019e5&w=740"
                  alt=""
                  class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div class=" sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="https://img.freepik.com/free-photo/young-adult-businessman-recording-studio-illuminated-generated-by-ai_188544-29255.jpg?t=st=1707379637~exp=1707383237~hmac=8adb126602df0a3d3e50b251638d2b84c1197b4677b64c658cc1b126fcf161a4&w=826"
                  alt=""
                  class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
