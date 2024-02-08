import React, { useState } from "react";
import Collabrlogo from "../assets/images/Collabrlogo.svg";

import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navigation } from "../constants/navigation";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <section className=" pt-4 z-[10000] fixed lg:relative top-0   px-3 lg:px-0 w-full max-w-7xl">
      <div className=" p-2   bg-white shadow border-[0.2px] border-gray-200 px-3 rounded-full flex flex-row justify-between  items-center">
        <div>
          <img src={Collabrlogo} className=" w-24" />
        </div>

        <div onClick={() => setOpen(!open)} className=" lg:hidden block">
          {!open ? <HiMenuAlt3 size={26} /> : <HiX size={26} />}
        </div>
        <nav className=" hidden lg:flex flex-row justify-center items-center gap-2">
          {navigation.map((item) => (
            <h1 className="p-2 px-4 gap-2 rounded-full flex flex-row justify-center items-center bg-transparent transition text-gray-700 hover:bg-gray-100  cursor-pointer ">
              {item}
            </h1>
          ))}
          <div className=" flex font-medium flex-row justify-center pl-3 items-center gap-3">
            <button
              className={
                " p-2 px-7 gap-2 rounded-full flex flex-row justify-center items-center transition-all bg-primary  text-white hover:bg-hoverprimary"
              }
            >
              <h1>Login</h1>
            </button>
            <button
              className={
                " p-2 px-7 gap-2 hover:bg-primary hover:text-white rounded-full flex flex-row justify-center items-center border-[1.5px] border-primary transition text-primary"
              }
            >
              <h1>Signup</h1>
            </button>
          </div>
        </nav>

        {/* mobile nav */}
      </div>
      <nav
        className={` ${
          open ? "h-auto" : "h-0"
        }  transition-all  z-[1000] overflow-hidden lg:hidden bg-white top-0  mt-2 w-full left-0   rounded-2xl  shadow flex-row justify-center items-center gap-2`}
      >
        <div className="py-5">
          {navigation.map((item) => (
            <a href="#">
              <h1 className="p-2 px-4 gap-2 rounded-full flex flex-row justify-center items-center bg-transparent transition text-gray-700 hover:bg-gray-100  cursor-pointer ">
                {item}
              </h1>
            </a>
          ))}
          <div className=" mt-5 lg:mt-0 flex font-medium flex-row justify-center pl-3 items-center gap-3">
            <button
              className={
                " p-2 px-7 gap-2 rounded-full flex flex-row justify-center items-center transition-all bg-primary  text-white hover:bg-hoverprimary"
              }
            >
              <h1>Login</h1>
            </button>
            <button
              className={
                " p-2 px-7 gap-2 hover:bg-primary hover:text-white rounded-full flex flex-row justify-center items-center border-[1.5px] border-primary transition text-primary"
              }
            >
              <h1>Signup</h1>
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
