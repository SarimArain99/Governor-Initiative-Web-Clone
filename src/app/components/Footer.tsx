import React from "react";
import SVGs from "./SVGs";

function Footer() {
  return (
    <footer className=" bg-gray-100 flex justify-between p-5 md:flex-row flex-col items-start">
      <div className="space-y-5 mb-10">
        <h1 className="font-bold text-xl">Core Courses</h1>
        <div className="space-y-2 text-gray-700">
          <p>Programming Fundamentals</p>
          <p>Web2 using Next.js</p>
          <p>Earn as You Learn</p>
        </div>
      </div>
      <div className="space-y-5 mb-10">
        <h1 className="font-bold text-xl">Advanced Courses</h1>
        <div className="space-y-2 text-gray-700">
          <p>Artificial Intelligence(Ai) and Deep Learning</p>
          <p>Web 3 and Metaverse</p>
          <p>Cloud-Native Computing</p>
          <p>Ambient Computing and loT</p>
          <p>Gemonics and Bioinformatics</p>
          <p>Network Programmability and Automation</p>
        </div>
      </div>
      <SVGs />
    </footer>
  );
}

export default Footer;
