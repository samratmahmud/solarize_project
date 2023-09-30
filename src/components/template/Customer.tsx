"use client";
import Link from "next/link";
import React from "react";

let pages = [
  {
    name: "Customer",
    url: "/",
  },
  {
    name: "Installer",
    url: "/contract",
  },
];

interface customerProps {
  activateButton?: "Customer" | "Installer";
}

function Customer(props: customerProps) {
  let {activateButton = "Customer"} = props;

  return (
    <div className="flex gap-1 bg-cyan-950 py-1 px-1 rounded-xl">
      {pages.map(({name, url}) => (
        <Link
          href={url}
          key={name}
          className={`text-sm text-gray-50 py-0.5 px-3 rounded-lg ${
            name === activateButton ? "bg-red-500" : ""
          }`}
          role="button"
        >
          {name}
        </Link>
      ))}
    </div>
  );
}

export default Customer;
