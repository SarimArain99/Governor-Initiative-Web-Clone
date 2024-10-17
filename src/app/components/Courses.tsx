import React from "react";

function Courses() {
  return (
    <div>
      <div>
        <h2 className="sm:text-3xl text-2xl text-[#044E83] mx-5 my-10 font-bold">
          Core Courses Sequence
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 mx-10 gap-x-3">
          <div className="flex justify-center items-center flex-col border-2 rounded-2xl w-full shadow-xl overflow-hidden pb-5 mb-5">
            <img
              src="/prog.jpg"
              alt="first"
              className=" h-80 w-full object-cover lg: mb-6 hover:scale-105 duration-500"
            />
            <p className="text-xl font-semibold mx-2">
              Programming Fundamentals
            </p>
          </div>
          <div className="flex justify-center items-center flex-col border-2 rounded-2xl w-full shadow-xl overflow-hidden pb-5 mb-5">
            <img
              src="/web.jpg"
              alt="first"
              className=" h-80 w-full object-cover lg: mb-6 hover:scale-105 duration-500"
            />
            <p className="text-xl font-semibold">Web2 using Next.js</p>
          </div>
          <div className="flex justify-center items-center flex-col border-2 rounded-2xl w-full shadow-xl overflow-hidden pb-5 mb-5">
            <img
              src="/earn.jpg"
              alt="first"
              className=" h-80 w-full object-cover lg: mb-6 hover:scale-105 duration-500"
            />
            <p className="text-xl font-semibold">Earn as You Learn</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="sm:text-3xl text-2xl text-[#044E83] mx-5 my-10 font-bold">
          Advanced Courses
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 mx-10 gap-x-3">
          <div className="flex justify-center items-center flex-col border-2 rounded-2xl w-full shadow-xl overflow-hidden pb-5 mb-5">
            <img
              src="/ai.jpg"
              alt="first"
              className=" h-80 w-full object-cover lg: mb-6 hover:scale-105 duration-500"
            />
            <p className="text-xl font-semibold">Artificial Intelligence</p>
          </div>
          <div className="flex justify-center items-center flex-col border-2 rounded-2xl w-full shadow-xl overflow-hidden pb-5 mb-5">
            <img
              src="/web3.jpg"
              alt="first"
              className=" h-80 w-full object-cover lg: mb-6 hover:scale-105 duration-500"
            />
            <p className="font-semibold text-xl mx-2">Web 3 and Metaverse</p>
          </div>
          <div className="flex justify-center items-center flex-col border-2 rounded-2xl w-full shadow-xl overflow-hidden pb-5 mb-5">
            <img
              src="/cloud.jpg"
              alt="first"
              className=" h-80 w-full object-cover lg: mb-6 hover:scale-105 duration-500"
            />
            <p className="font-semibold text-xl mx-2">Cloud-Native Computing</p>
          </div>
          <div className="flex justify-center items-center flex-col border-2 rounded-2xl w-full shadow-xl overflow-hidden pb-5 mb-5">
            <img
              src="/ambient.jpg"
              alt="first"
              className=" h-80 w-full object-cover lg: mb-6 hover:scale-105 duration-500"
            />
            <p className="font-semibold text-xl mx-2">
              Ambient Computing and loT
            </p>
          </div>
          <div className="flex justify-center items-center flex-col border-2 rounded-2xl w-full shadow-xl overflow-hidden pb-5 mb-5">
            <img
              src="/genom.jpg"
              alt="first"
              className=" h-80 w-full object-cover lg: mb-6 hover:scale-105 duration-500"
            />
            <p className="font-semibold text-xl mx-2">
              Gemonics and Bioinformatics
            </p>
          </div>
          <div className="flex justify-center items-center flex-col border-2 rounded-2xl w-full shadow-xl overflow-hidden pb-5 mb-5">
            <img
              src="/network.jpg"
              alt="first"
              className=" h-80 w-full object-cover lg: mb-6 hover:scale-105 duration-500"
            />
            <p className="font-semibold text-xl mx-2">
              Network Programmability and Automation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
