import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

const Details = [
  {
    purch: "Solas-as-a-service",
    dolar: "$0",
    amount: "$0 Upfront cost, pay a monthly Solar-as-a-service fee.",
    button: "Get started",
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
    dolar: "HK$7,800",
    kwp: "/kWp",
    amount: "Purchase a system from HK$7,800 per kilowatt peak.",
    button: "Get started",
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
    <div
      className="lg:mb-12 mb-8
    "
    >
      <div
        className="lg:pt-24 pt-6"
        style={{
          backgroundImage: `linear-gradient(#FE5424 87%, transparent 13%)`,
        }}
      >
        <div className="container">
          <div data-aos="zoom-in" className="lg:mb-16 mb-7">
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
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            {Details.map(
              ({purch, dolar, amount, kwp, button, items}, index) => (
                <div
                  data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
                  key={index}
                  className="bg-gray-50 lg:px-10 px-3 lg:pt-10 pt-5 pb-6 rounded-md shadow-2xl"
                >
                  <div className="lg:text-sm text-xs font-medium text-indigo-600 bg-indigo-200 py-1 px-4 rounded-2xl inline-block mb-4">
                    {purch}
                  </div>
                  <div className="flex items-end">
                    <div className="lg:text-7xl text-4xl text-gray-900 font-extrabold lg:mb-5 mb-2">
                      {dolar}
                    </div>
                    <div className="lg:text-xl text-sm font-medium text-neutral-600 lg:mb-5 mb-2">
                      {kwp}
                    </div>
                  </div>
                  <div className="lg:text-base text-md text-neutral-600 lg:mb-16 mb-6">
                    {amount}
                  </div>
                  <div className="lg:mb-6 mb-4 flex flex-col lg:gap-4 gap-2">
                    {items.map(({icons, title}, index) => (
                      <div key={index} className="flex gap-3">
                        <div>
                          <img className="w-6" src={icons} alt="" />
                        </div>
                        <div className="text-md font-medium text-neutral-600">
                          {title}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-red-500 rounded-md py-3 px-5 text-center">
                    <Link href={""} className="text-md font-bold text-gray-50">
                      {button}
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
