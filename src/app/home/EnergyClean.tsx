import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

function EnergyClean() {
  return (
    <section className="container md:mb-24 mb-10">
      <div
        className="flex flex-col md:flex-row md:gap-10 gap-6 justify-between items-center lg:p-10 p-3 max-w-[1024px] m-auto bg-gray-50 md:mb-36 mb-10"
        data-aos="zoom-in"
      >
        <div>
          <div className="text-sm font-medium text-gray-800 uppercase mb-4">
            INcluded
          </div>
          <div className="md:text-base text-sm text-neutral-700">
            Both solar leasing and purchase plans include a quality
            installation, ongoing maintenance and support, the ability to reduce
            electricity costs and increase operating margins for businesses, as
            well as the opportunity to make a positive impact on the environment
            by reducing carbon footprint and promoting sustainable energy
            practices.
          </div>
        </div>
        <div role="button" className="flex-shrink-0 font-medium">
          <Button name="Learn More" />
        </div>
      </div>
      <div className="bg-100 md:py-16 py-7 px-1 rounded-3xl" data-aos="zoom-in">
        <div className="md:text-5xl text-xl font-extrabold text-gray-50 max-w-[608px] m-auto text-center md:mb-4 mb-2">
          Produce your clean energy. From today.
        </div>
        <div className="md:text-base text-md text-gray-50 m-auto text-center mb-8 max-w-[608px]">
          Solar is your ticket to freedom and resilience from the instability of
          the grid and the ever increasing energy prices.
        </div>
        <div className="max-w-[126px] m-auto text-center">
          <div className="border border-gray-50 rounded-md">
            <Link href={""} className="text-md font-medium text-gray-50">
              <Button name="Get Started" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnergyClean;
