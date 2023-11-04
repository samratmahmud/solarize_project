"use client";
import React from "react";
import Button from "../common/Button";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="flex justify-between gap-3 items-center pt-5 mb-12">
        <div data-aos="fade-right">
          <Link href={"/"}>
            <img src="/picture/sunrya-dark.svg.svg" alt="" />
          </Link>
        </div>
        <div className="hidden md:block">
          <div
            data-aos="fade-left"
            className="flex items-center md:gap-5 gap-2"
          >
            <div className="font-medium flex-shrink-0">
              <Link href={"/contract"}>
                <Button name="Contact Us" />
              </Link>
            </div>
            <div className="bg-red-500 rounded-md font-bold text-gray-50 flex-shrink-0">
              <Link href={"/"}>
                <Button name="Get Started" />
              </Link>
            </div>
          </div>
        </div>
        <div role="button" onClick={toggle} className="md:hidden">
          <img className="w-12 h-12" src="/picture/icons8-menu-64.png" alt="" />
        </div>
      </div>
      <div className="md:hidden">
        <Drawer open={isOpen} onClose={toggle} direction="left">
          <div className="p-6 h-screen flex flex-col justify-between">
            <div>
              <Link href={"/"} className="flex justify-center mb-12">
                <img src="/picture/sunrya-dark.svg.svg" alt="" />
              </Link>
              <div className="flex flex-col gap-10 text-center">
                <Link href={"/contract"} className="font-medium">
                  <Button name="Contact Us" />
                </Link>
                <div className="bg-red-500 rounded-md font-bold text-gray-50">
                  <Link href={"/"}>
                    <Button name="Get Started" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:text-md text-xs text-gray-400 text-center">
              © 2023 Sunrya, Ltd. All rights reserved
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
