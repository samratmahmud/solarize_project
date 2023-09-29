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
      <div className="mb-44">
        <div className="bg-200 rounded-xl px-[140px] pt-36 pb-28 max-w-[1062px] m-auto mb-36">
          <div className="text-6xl font-bold text-gray-50 mb-14">
            Improve your bottom line while reducing your CO2 footprint
          </div>
          <div className="flex gap-10 justify-between mb-8">
            <div className="text-md text-gray-50">
              Solar energy is the cheapest source of electricity ever, in
              average the levelized cost of electricity produced by solar panels
              installed on your building is half the price of grid electricity.
            </div>
            <div className="text-md text-gray-50">
              Solar is the best tool to improve your business bottom line and
              save the environment. Enjoy the benefits of clean energy without
              any upfront investment with our Solar-as-a-Service plan.
            </div>
          </div>
          <button className="text-md text-gray-50">Learn More</button>
        </div>
        <div className="bg-gray-100 py-12 px-14">
          <div className="text-base font-semibold text-red-500 mb-2 text-center">
            Solar done right
          </div>
          <div className="text-4xl font-bold text-gray-950 mb-5 text-center">
            All-in-one
          </div>
          <div className="text-lg text-neutral-600 text-center max-w-[778px] m-auto mb-14">
            Generate additional income, save on your operations expenditure. Put
            your rooftop to work and increase your margins with solar.
          </div>
          <div className="flex justify-between gap-20 mb-16">
            {performing.map((item, index) => (
              <div key={index} className="relative z-0">
                <div className="mb-8 w-12 m-auto">
                  <img className="" src={item.pic} alt="" />
                </div>
                <div className="text-base font-medium text-neutral-500 mb-5 text-center">
                  {item.name}
                </div>
                <div className="text-md text-neutral-600">{item.title}</div>
                <div className="absolute top-6 -bottom-8 -left-6 -right-6 bg-white -z-10 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-500 p-10 rounded-lg max-w-[1024px] m-auto">
          <div className="flex justify-between gap-10 items-center">
            <div>
              <button className="text-sm font-medium uppercase text-gray-800 py-1 px-4 bg-white rounded-xl mb-4">
                Use Cases
              </button>
              <div className="text-base text-gray-50">
                Check our use cases and find what works for you!
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl inline-block">
              <Button name="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Improve;
