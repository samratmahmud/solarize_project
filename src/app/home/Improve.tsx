import Button from "@/components/common/Button";
import React from "react";

const performing = [
  {
    pic: "/picture/span.svg",
    name: "LIDAR",
    title:
      "Maximise yield with our LIDAR enabled design, delivering the best performing system in a given environment.",
  },
  {
    pic: "/picture/span (1).svg",
    name: "Speed",
    title:
      "Simply submit the online form, and we will get back to you within 24 hours with a proposal, without the need for a site visit.",
  },
  {
    pic: "/picture/span (2).svg",
    name: "Performanc",
    title:
      "Choose your experienced installer from our network. Let them do the work while we ensure they deliver a high-quality system.",
  },
];

function Improve() {
  return (
    <div className="container">
      <div className="md:mb-28 mb-10">
        <div className="bg-200 rounded-xl lg:px-[140px] px-5 lg:pt-36 py-6 lg:pb-28 max-w-[1062px] m-auto md:mb-24 mb-5">
          <div className="md:text-6xl text-30 font-bold text-gray-50 lg:mb-14 mb-6">
            Improve your bottom line while reducing your CO2 footprint
          </div>
          <div className="flex flex-col md:flex-row md:gap-10 gap-3 justify-between mb:mb-8 mb-5">
            <div className="md:text-md text-sm text-gray-50">
              Solar energy is the cheapest source of electricity ever, in
              average the levelized cost of electricity produced by solar panels
              installed on your building is half the price of grid electricity.
            </div>
            <div className="md:text-md text-sm text-gray-50">
              Solar is the best tool to improve your business bottom line and
              save the environment. Enjoy the benefits of clean energy without
              any upfront investment with our Solar-as-a-Service plan.
            </div>
          </div>
          <button className="text-md text-gray-50">Learn More</button>
        </div>
        <div className="md:py-12 py-5 md:px-14 px-3">
          <div className="md:text-base text-sm font-semibold text-red-500 mb-2 text-center">
            Solar done right
          </div>
          <div className="md:text-4xl text-30 font-bold text-gray-950 mb-5 text-center">
            All-in-one
          </div>
          <div className="md:text-lg text-md text-neutral-600 text-center max-w-[778px] m-auto md:mb-14 mb-10">
            Generate additional income, save on your operations expenditure. Put
            your rooftop to work and increase your margins with solar.
          </div>
          <div className="flex flex-col md:flex-row justify-between md:gap-20 gap-12 md:mb-16 mb-8">
            {performing.map((item, index) => (
              <div key={index} className="relative z-0">
                <div className="md:mb-8 mb-5 w-12 m-auto">
                  <img className="" src={item.pic} alt="" />
                </div>
                <div className="text-base font-medium text-neutral-500 md:mb-5 mb-3 text-center">
                  {item.name}
                </div>
                <div className="text-md text-neutral-600">{item.title}</div>
                <div className="absolute top-6 md:-bottom-8 -bottom-4 md:-left-6 -left-3 md:-right-6 -right-3 bg-white -z-10 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-500 md:p-10 p-2 rounded-lg max-w-[1024px] m-auto">
          <div className="flex flex-col md:flex-row justify-between md:gap-10 gap-5 items-center">
            <div>
              <button className="md:text-sm text-xs font-medium uppercase text-gray-800 py-1 px-4 bg-white rounded-xl md:mb-4 mb-2">
                Use Cases
              </button>
              <div className="md:text-base text-sm text-gray-50">
                Check our use cases and find what works for you!
              </div>
            </div>
            <div role="button" className="bg-gray-50 rounded-xl text-center">
              <Button name="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Improve;
