import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="lg:h-24 h-20  bg-[#044E83] lg:pt-8 pt-4 fixed w-full z-10">
      <Image
        src="/logo.png"
        alt=""
        width={100}
        height={100}
        className="absolute top-12 left-4 lg:h-24 h-16 lg:w-24 w-16"
      />
      <div className="flex items-center justify-between">
        <h1 className="sm:text-xl text-lg text-[#B9D8DB] font-bold sm:ml-24 ml-20">
          Tuition Free <span className="hidden lg:inline">Education</span>
          Program
          <span className="hidden lg:inline">on Latest Technologies</span>
        </h1>
        <div className="hidden lg:flex items-center space-x-5 text-white mr-5">
          <h2>Home</h2>
          <h2>Apply</h2>
          <h2>Jobs</h2>
          <h2>Results</h2>
        </div>
        <button className="relative group lg:hidden flex">
          <div className="relative flex items-center justify-center w-[50px] h-[50px] transform transition-all  duration-200">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-x-1.5 group-focus:rotate-180">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
              <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
            </div>
          </div>
        </button>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
