import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="flex sm:justify-between justify-center items-center md:flex-row flex-col">
      <div className="lg:mt-20 mt-14 sm:mx-10 mx-5 space-y-5 lg:w-[500px] pt-20">
        <h1 className="text-3xl sm:text-4xl md:5xl lg:text-6xl text-[#044E83] font-extrabold">
          Governor Sindh
        </h1>
        <h2 className="text-2xl sm:text-3xl md:4xl lg:text-5xl text-[#044E83] font-semibold">
          Kamran Khan Tessori
        </h2>
        <h2 className="text-xl sm:text-2xl md:3xl lg:text-4xl text-[#2EB6E8] font-bold">
          Certified Cloud <br /> Applied Generative AI <br />
          Engineer (GenEng)
        </h2>
        <h3 className="text-xl sm:text-2xl md:3xl lg:text-4xl text-[#044E83] font-bold">
          Earn up to $5,000 / month
        </h3>
        <h3 className="text-xl sm:text-2xl md:3xl lg:text-4xl text-[#044E83] font-bold">
          Now admissions are open <br />
          in Hyderabad
        </h3>
        <div className="flex text-[#044E83] md:space-x-10 md:flex-row flex-col items-center md: space-y-2">
          <button className="bg-[#044E83] text-white md:w-44 w-full rounded-xl p-5 text-xl">
            Apply Now
          </button>
          <p className="text-center lg:text-xl text-lg">
            <span className="font-bold text-3xl">562,143</span>
            <br />
            Accepted Applications
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/cover.png"
          alt=""
          height={500}
          width={500}
          className="mt-20 object-cover md:h-[540px] h-[600px] w-96"
        />
      </div>
    </div>
  );
}

export default Hero;
