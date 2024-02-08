import React, { useEffect, useState } from "react";
import instagramlogo from "../assets/images/instagramlogo.png";

const rand1imgs = [
  "https://img.freepik.com/free-photo/collage-people-using-reels_23-2149416508.jpg?w=360&t=st=1707405453~exp=1707406053~hmac=0ecd35236528a94f2169a4bae7ea1ae6d290653c862b31b262c5bb0660d01eef",
  "https://img.freepik.com/free-photo/full-shot-woman-reading-with-smartphone_23-2149629602.jpg?w=740&t=st=1707405465~exp=1707406065~hmac=78b246cabd297873a9f84d276adff79a114d2a820b037b57953a730b5d8a3be3",
  "https://img.freepik.com/free-photo/attractive-girl-fashionable-outfit-creats-influence-content-shows-peace-sign-smartphone-front-camera-poses-selfie-smiles-gladfully-poses-urban-place-spends-vacation-big-city_273609-56229.jpg?w=740&t=st=1707405484~exp=1707406084~hmac=696b3e7099dc0b58bbde18fc5c55bc828b00e55c533183f55b53ca0cc9d3c270",
];

const rand2imgs = [
  "https://img.freepik.com/free-photo/influencer-marketing-job-concept_23-2150410521.jpg?w=740&t=st=1707405504~exp=1707406104~hmac=cc298b33d3e7ed25be842f159971374080c4c5ce192c3c4a943732c117fabe39",
  "https://img.freepik.com/free-photo/young-woman-watching-live-stream_53876-102030.jpg?w=900&t=st=1707405520~exp=1707406120~hmac=99e2ee62b4aaffc3140b1efe3fe15933169259ae97a8ab01c7cd44f9b1faec5b",
  "https://img.freepik.com/free-photo/smiling-female-influencer-talking-about-beauty-products-while-vlogging-from-home_637285-4353.jpg?w=740&t=st=1707405537~exp=1707406137~hmac=e17a38a2518d7ad1469b17eb29ee4f3b9a9072746bddc95241967e9f17049ffa",
];

const rand4imgs = [
  "https://img.freepik.com/free-photo/influencer-marketing-collage_23-2150851646.jpg?w=360&t=st=1707406480~exp=1707407080~hmac=ddd5e0697e3916c4fbfc45a036e7fa1f5b5e78a777853795a5c8370eec77905b",
  "https://img.freepik.com/free-photo/man-riding-his-bicycle-outdoors-city_23-2150816029.jpg?t=st=1707406521~exp=1707410121~hmac=6357cd1cc08c0c4b681e92d7d6e7e876c2ca2b74ff4cbcdbe3af7ce91a49ff32&w=740",
  "https://img.freepik.com/free-photo/blonde-woman-blogger-is-showing-how-make-up-use-cosmetics_496169-366.jpg?w=740&t=st=1707406495~exp=1707407095~hmac=e1e5f979d23f8abd9272500850be72653cf6d0b05a728effce5d72bf7a8e838d",
];
const rand3imgs = [
  "https://img.freepik.com/free-photo/medium-shot-woman-influencer-marketing_23-2150521889.jpg?w=740&t=st=1707406556~exp=1707407156~hmac=7446d06b78ca7b29645659c0466fea7b7eca13ac61107db6bf71cf598186fec7",
  "https://img.freepik.com/free-photo/young-adult-businessman-recording-studio-illuminated-generated-by-ai_188544-29255.jpg?t=st=1707406577~exp=1707410177~hmac=eeabfbf0ef5c2df17376fb6b3c9c3eff4e5fa79d9901fd588fd6099c8e342bd2&w=826",
  "https://img.freepik.com/free-photo/woman-stands-front-mobile-phone-camera-shoots-influence-video-blog-makes-selfie-uses-modern-technologies-dressed-casual-green-jumper_273609-55348.jpg?w=360&t=st=1707406597~exp=1707407197~hmac=254bd25ded6a540a7b0666233f2f30f2b392e2d8b6aa3373c31ea32cb54e3ed0",
];
const randNames1 = ["jamescole", "michaeljordan", "sylvester", "jennie"];
const randNames2 = ["temmy", "daniel", "jeremiah", "sandra"];
const randNames3 = ["emily", "jones", "gerald", "queen"];
const randNames4 = ["pearl_", "raymont", "festus", "johnson"];

function HeroCarousel() {
  const [random1, setRandom1] = useState(0);
  const [random2, setRandom2] = useState(1);
  const [random3, setRandom3] = useState(0);
  const [random4, setRandom4] = useState(2);
  const [randomName1, setRandomName1] = useState(0);
  const [randomName2, setRandomName2] = useState(1);
  const [randomName3, setRandomName3] = useState(0);
  const [randomName4, setRandomName4] = useState(2);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = Math.floor(Math.random() * rand1imgs.length);
      setRandom1(newIndex);
      setRandomName1(Math.floor(Math.random() * randNames1.length));
    }, 3000);

    const intervalId1 = setInterval(() => {
      const newIndex = Math.floor(Math.random() * rand2imgs.length);
      setRandom2(newIndex);
      setRandomName2(Math.floor(Math.random() * randNames2.length));
    }, 3000);

    const intervalId2 = setInterval(() => {
      const newIndex = Math.floor(Math.random() * rand3imgs.length);
      setRandom3(newIndex);
      setRandomName3(Math.floor(Math.random() * randNames3.length));
    }, 3000);

    const intervalId3 = setInterval(() => {
      const newIndex = Math.floor(Math.random() * rand4imgs.length);
      setRandom4(newIndex);
      setRandomName4(Math.floor(Math.random() * randNames4.length));
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, [random1, random2, random3, random4]);

  return (
    <div className=" relative -ml-10  mt-16 lg:mt-10 flex flex-col justify-center items-center gap-3">
      <div className="lg:w-16 w-10 overflow-hidden h-10 lg:h-16 rounded-full absolute z-[20]  lg:left-5 top-0 lg:top-20 bg-gray-400">
        <img
          src="https://img.freepik.com/free-vector/like-icon-3d-vector-illustration-heart-symbol-red-bubble-social-media-applications-cartoon-style-isolated-white-background-online-communication-digital-marketing-concept_778687-1695.jpg?w=740&t=st=1707401755~exp=1707402355~hmac=7fec715021e6fb5630da99f2851963b29898b6878d0241fa4eac678eafe5960d"
          alt=""
        />
      </div>
      <div className="lg:w-16 overflow-hidden w-14 h-14 lg:h-16 rounded-full absolute z-[20] -right-8 lg:right-5 top-60 bg-gray-400">
        <img
          src="https://img.freepik.com/free-vector/stack-money-gold-coins-3d-cartoon-style-icon-coins-with-dollar-sign-wad-cash-currency-flat-vector-illustration-wealth-investment-success-savings-economy-profit-concept_74855-26108.jpg?w=740&t=st=1707401790~exp=1707402390~hmac=f39f376d135f393007aeac2827e2f20e9b1010865b0ec9900e51bd3e869afb57"
          alt=""
        />
      </div>
      <div className="w-40 h-40 rounded-full absolute border-dashed  border-2 border-gray-400"></div>
      <div className="w-20 h-20 rounded-full absolute border-dashed  border-2 border-gray-400"></div>
      <div className="w-60 h-60 rounded-full absolute border-dashed  border-2 border-gray-400"></div>

      <div className=" grid gap-3  grid-cols-2 ">
        <div className=" h-[220px] overflow-hidden shadow-xl  flex flex-col justify-start items-center -translate-y-10 translate-x-5  lg:h-[220px] lg:w-[200px] w-[180px] bg-gray-200 rounded-2xl">
          <div className=" flex-1 h-[50%] w-full">
            <div className=" p-1 px-3 rounded-full  top-3 left-3 bg-white text-black shadow w-fit absolute text-xs">
              @{randNames1[randomName1]}
            </div>
            <img
              className="w-full h-full object-cover"
              src={rand1imgs[random1]}
              alt="img"
            />
          </div>
          <div className="bg-white p-2 w-full flex flex-row justify-center items-center  gap-3 text-center">
            <img src={instagramlogo} className="w-8" />
            <p> {random1 + 1 + "." + random1 + 3}k Follower </p>
          </div>
        </div>
        <div className="  h-[220px] shadow-xl  re  overflow-hidden translate-x-5 -translate-y-5 lg:h-[220px] flex flex-col justify-start lg:w-[200px] w-[180px] bg-gray-200 rounded-2xl">
          <div className=" flex-1 h-[50%] relative">
            <div className=" p-1 px-3 rounded-full  top-3 left-3 bg-white text-black shadow w-fit absolute text-xs">
              @{randNames2[randomName2]}
            </div>
            <img
              className="w-full h-full object-cover"
              src={rand2imgs[random2]}
              alt=""
            />
          </div>
          <div className="bg-white p-2 w-full  flex flex-row gap-3 justify-center items-center text-center">
            <img src={instagramlogo} className="w-8" />
            <p> {random2 + 1 + "." + random2 + 3}k Follower </p>
          </div>
        </div>
      </div>
      <div className="grid gap-3 grid-cols-2">
        <div className=" flex flex-col overflow-hidden translate-x-5   justify-start h-[220px] shadow-xl  -translate-y-10  lg:h-[220px] lg:w-[200px] w-[180px] bg-gray-200 rounded-2xl">
          <div className=" flex-1 h-[50%]">
            <div className=" p-1 px-3 rounded-full  top-3 left-3 bg-white text-black shadow w-fit absolute text-xs">
              @{randNames3[randomName3]}
            </div>
            <img
              className="w-full h-full object-cover"
              src={rand3imgs[random3]}
              alt=""
            />
          </div>
          <div className="bg-white p-2 w-full flex flex-row gap-3 justify-center items-center  text-center">
            <img src={instagramlogo} className="w-8" />
            <p> {random3 + 1 + "." + random3 + 3}k Follower </p>
          </div>
        </div>
        <div className=" flex flex-col overflow-hidden translate-x-5 -translate-y-5  justify-start h-[220px]  shadow-xl   lg:h-[220px] lg:w-[200px] w-[180px] bg-gray-200 rounded-2xl">
          <div className=" relative flex-1 h-[50%]">
            <div className=" p-1 px-3 rounded-full  top-3 left-3 bg-white text-black shadow w-fit absolute text-xs">
              @{randNames4[randomName4]}
            </div>
            <img
              className="w-full h-full object-cover"
              src={rand4imgs[random4]}
              alt=""
            />
          </div>
          <div className="bg-white p-2  flex flex-row gap-3 justify-center items-center w-full text-center">
            <img src={instagramlogo} className="w-8" />
            <p> {random4 + 1 + "." + random4 + 3}k Follower </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;
