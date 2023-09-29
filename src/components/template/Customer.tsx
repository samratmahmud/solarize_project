"use client";
import React from "react";

interface customerProps {
  name: string;
  isActive?: boolean;
  handelClick?: () => void;
}

function Customer(props: customerProps) {
  let {name, isActive, handelClick} = props;
  return (
    <div onClick={handelClick}>
      <div
        className={`text-sm text-gray-50 py-0.5 px-3 rounded-lg ${
          isActive ? "bg-red-500" : ""
        }`}
      >
        {name}
      </div>
    </div>
  );
}

export default Customer;
