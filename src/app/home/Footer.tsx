import Link from "next/link";
import React from "react";

const footerProps = [
  {
    name: "Plans & Services",
    url: "/",
  },
  {
    name: "Installers",
    url: "/",
  },
  {
    name: "Privacy",
    url: "/",
  },
  {
    name: "Terms",
    url: "/",
  },
];

function Footer() {
  return (
    <div className="container">
      <div className="md:py-12 py-6">
        <div className="flex justify-center md:gap-10 gap-4 md:mb-8 mb-4">
          {footerProps.map((name, index) => (
            <div key={index} className="">
              <div className="">
                <Link
                  href={name.url}
                  className="md:text-md text-sm text-neutral-600 text-center"
                >
                  {name.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="md:mb-8 mb-4">
          <Link href="https://www.linkedin.com/">
            <img
              className="w-6 m-auto text-center"
              src="/picture/Frame.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="md:text-md text-xs text-gray-400 text-center">
          © 2023 Sunrya, Ltd. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
