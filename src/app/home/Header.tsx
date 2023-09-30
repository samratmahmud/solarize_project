"use client";
import Button from "@/components/common/Button";
import Customer from "@/components/template/Customer";
import Metal from "@/components/template/Metal";
import Link from "next/link";
import React, {useState} from "react";

function Header() {
  return (
    <div className="container">
      <div className="inline-block md:mb-11 mb-6">
        <Customer activateButton="Customer" />
      </div>
      <div className="md:mb-12 mb-6">
        <div className="flex flex-col md:flex-row justify-between md:gap-10 gap-5 md:mb-12 mb-6">
          <div>
            <div className="xl:text-8xl md:text-9xl text-5xl font-bold text-red-500 md:mb-16 mb-6 max-w-[650px]">
              Offset your electricity bill, with solar.
            </div>
            <div className="md:text-lg text-md font-medium text-cyan-950 max-w-[514px]">
              Solar installation, financing, management, and operations all in
              one platform, to skip the middleman and deliver better, faster &
              cheaper solar.{" "}
            </div>
          </div>
          <div>
            <img src="/picture/Group 26.png" alt="" />
          </div>
        </div>
        <div className="bg-red-500 md:px-9 px-4 md:py-6 py-3 rounded-md">
          <div className="md:text-3xl text-base font-bold text-gray-50 lg:text-center md:mb-9 mb-4">
            Tell us more about your roof.
          </div>
          <div className="flex lg:flex-row  flex-col lg:items-center justify-between gap-4">
            <div className="md:text-6xl text-30 font-bold text-gray-50 lg:max-w-[259px]">
              Get a lightning fast quote
            </div>
            <div className="flex flex-wrap gap-5">
              <div
                className="inline-block rounded-lg text-cyan-800"
                style={{backgroundImage: `url("/picture/3-1.jpg.png")`}}
              >
                <Metal name="Metal" />
              </div>
              <div
                className="inline-block rounded-lg text-gray-50"
                style={{backgroundImage: `url("/picture/3-2.jpg.png")`}}
              >
                <Metal name="Concrete" />
              </div>
              <div
                className="inline-block rounded-lg text-gray-50"
                style={{backgroundImage: `url("/picture/3-3.jpg.png")`}}
              >
                <Metal name="Ground" />
              </div>
              <div
                className="inline-block rounded-lg text-gray-50"
                style={{backgroundImage: `url("/picture/dont-know.png.png")`}}
              >
                <Metal name="Parking" />
              </div>
              <div className="inline-block rounded-lg text-cyan-800 bg-white">
                <Metal name="Other" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
