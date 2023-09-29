"use client";
import Button from "@/components/common/Button";
import Customer from "@/components/template/Customer";
import Metal from "@/components/template/Metal";
import Link from "next/link";
import React, {useState} from "react";

let custom = [
  {
    name: "Customer",
    url: "/",
  },
  {
    name: "Installer",
    url: "/",
  },
];

function Header() {
  const [tab, setTab] = useState(0);
  return (
    <div className="container">
      <div className="inline-block mb-11">
        <div className="flex gap-1 bg-cyan-950 py-1 px-1 rounded-xl">
          {custom.map((item, index) => (
            <div key={index}>
              <Link href={item.url}>
                <Customer
                  handelClick={() => setTab(index)}
                  isActive={tab === index}
                  name={item.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12">
        <div className="flex justify-between gap-10 mb-12">
          <div>
            <div className="text-8xl font-bold text-red-500 mb-16">
              Offset your electricity bill, with solar.
            </div>
            <div className="text-lg font-medium text-cyan-950 max-w-[514px]">
              Solar installation, financing, management, and operations all in
              one platform, to skip the middleman and deliver better, faster &
              cheaper solar.{" "}
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src="/picture/Group 26.png" alt="" />
          </div>
        </div>
        <div className="bg-red-500 px-9 py-6 rounded-md">
          <div className="text-3xl font-bold text-gray-50 text-center">
            Tell us more about your roof.
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="text-6xl font-bold text-gray-50 max-w-[259px]">
              Get a lightning fast quote
            </div>
            <div className="flex gap-5">
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
