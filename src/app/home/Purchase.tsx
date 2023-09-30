import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

const Details = [
  {
    purch: "Solas-as-a-service",
    amount: "$0",
    free: "$0 Upfront cost, pay a monthly Solar-as-a-service fee.",
    btn: "Get started",
    items: [
      {
        icons: "/picture/icons8-check.svg",
        title: "Increased cash flow",
      },
      {
        icons: "/picture/icons8-check.svg",
        title: "Flexible contract terms",
      },
      {
        icons: "/picture/icons8-check.svg",
        title: "Reduce Carbon Footprint",
      },
      {
        icons: "/picture/icons8-check.svg",
        title: "Upgrades included",
      },
    ],
  },
  {
    purch: "Purchase",
    amount: "HK$7,800",
    kwp: "/kWp",
    free: "Purchase a system from HK$7,800 per kilowatt peak.",
    btn: "Get started",
    items: [
      {
        icons: "/picture/icons8-check.svg",
        title: "Full ownership",
      },
      {
        icons: "/picture/icons8-check.svg",
        title: "Tax incentives",
      },
      {
        icons: "/picture/icons8-check.svg",
        title: "Reduce Carbon Footprint",
      },
      {
        icons: "/picture/icons8-check.svg",
        title: "Maximum energy savings",
      },
    ],
  },
];

function Purchase() {
  return (
    <div className="md:mb-24 mb-10">
      <div
        className="lg:pt-24 pt-6"
        style={{
          backgroundImage: `linear-gradient(#FE5424 87%, transparent 13%)`,
        }}
      >
        <div className="container">
          <div className="lg:mb-16 mb-7">
            <div className="lg:text-base text-md font-semibold text-slate-300 mb-2 text-center">
              Pricing
            </div>
            <div className="text-gray-50 lg:text-6xl text-2xl font-extrabold lg:mb-2 mb-4 text-center">
              Easy to pick, easy to pay
            </div>
            <div className="text-center lg:text-lg text-md text-slate-300">
              We make it simple for you, between purchase and financing
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-5 lg:mb-12 mb-9">
            {Details.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 lg:px-10 px-3 lg:pt-10 pt-5 pb-6 rounded-md shadow-2xl"
              >
                <div className="lg:text-sm text-xs font-medium text-indigo-600 bg-indigo-200 py-1 px-4 rounded-2xl inline-block mb-4">
                  {item.purch}
                </div>
                <div className="flex items-end">
                  <div className="lg:text-7xl text-4xl text-gray-900 font-extrabold lg:mb-5 mb-2">
                    {item.amount}
                  </div>
                  <div className="lg:text-xl text-sm font-medium text-neutral-600 lg:mb-5 mb-2">
                    {item.kwp}
                  </div>
                </div>
                <div className="lg:text-base text-md text-neutral-600 lg:mb-16 mb-6">
                  {item.free}
                </div>
                <div className="lg:mb-6 mb-4 flex flex-col lg:gap-4 gap-2">
                  {item.items.map((feature, index) => (
                    <div key={index} className="flex gap-3">
                      <div>
                        <img className="w-6" src={feature.icons} alt="" />
                      </div>
                      <div className="text-md font-medium text-neutral-600">
                        {feature.title}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-red-500 rounded-md py-3 px-5 text-center">
                  <Link href={""} className="text-md font-bold text-gray-50">
                    {item.btn}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row md:gap-10 gap-6 justify-between items-center lg:p-10 p-3 max-w-[1024px] m-auto bg-gray-50 md:mb-36 mb-10">
          <div>
            <div className="text-sm font-medium text-gray-800 uppercase mb-4">
              INcluded
            </div>
            <div className="md:text-base text-sm text-neutral-700">
              Both solar leasing and purchase plans include a quality
              installation, ongoing maintenance and support, the ability to
              reduce electricity costs and increase operating margins for
              businesses, as well as the opportunity to make a positive impact
              on the environment by reducing carbon footprint and promoting
              sustainable energy practices.
            </div>
          </div>
          <div role="button" className="flex-shrink-0 font-medium">
            <Button name="Learn More" />
          </div>
        </div>
        <div className="bg-100 md:py-16 py-7 px-1 rounded-3xl">
          <div className="md:text-5xl text-xl font-extrabold text-gray-50 max-w-[608px] m-auto text-center md:mb-4 mb-2">
            Produce your clean energy. From today.
          </div>
          <div className="md:text-base text-md text-gray-50 m-auto text-center mb-8 max-w-[608px]">
            Solar is your ticket to freedom and resilience from the instability
            of the grid and the ever increasing energy prices.
          </div>
          <div className="max-w-[126px] m-auto text-center">
            <div className="border border-gray-50 rounded-md">
              <Link href={""} className="text-md font-medium text-gray-50">
                <Button name="Get Started" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
