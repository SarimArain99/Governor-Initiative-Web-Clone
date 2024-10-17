import React from "react";

function Detail() {
  return (
    <div>
      <h2 className="text-[#044E83] text-center text-xl sm:text-2xl md:3xl lg:text-4xl font-bold my-20 mx-2">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        Developing Billion-Dollar Valued Developers and Solopreneurs
      </h2>
      <p className="text-lg font-semibold md:mx-10 mx-3 text-justify">
        The pace of technological change is accelerating, big players like
        Microsoft, Amazon, Google, and OpenAI are winning by providing
        infrastructure, large AI foundation models, frameworks, 3D Metaverse
        experiences, and massive distribution networks. Solopreneurs trained in
        this program will win by automating work typically outsourced to
        employees, by directly connecting to customers by eliminating the
        middleman, and by developing vertical metaverses, thus paving the way
        for the first billion-dollar valued solopreneur businesses. This program
        has the objective to train this new breed of billion-dollar
        solopreneurs. These solopreneurs will adopt the ultra-lean business
        model and work independently and will not need to hire employees or
        other team members.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 space-x-2 mx-2">
        <div className="flex justify-center">
          <img src="/first.jpg" alt="first" className="h-80 w-96  rounded-2xl shadow-2xl shadow-gray-700 object-cover lg: mb-6" />
        </div>
        <div className="flex justify-center">
          <img src="/second.jpg" alt="second" className="h-80 w-96  rounded-2xl shadow-2xl shadow-gray-700 object-cover lg: mb-6" />
        </div>
        <div className="flex justify-center">
          <img src="/third.jpg" alt="third" className="h-80 w-96  rounded-2xl shadow-2xl shadow-gray-700 object-cover lg: mb-6" />
        </div>
      </div>
      <div className="bg-black h-[0.5px] mx-10"></div>
    </div>
  );
}

export default Detail;
