import React from "react";
import Button from "../common/Button";

function Navbar() {
  return (
    <div className="container">
      <div className="flex justify-between items-center mt-5 mb-12">
        <div>
          <img src="/picture/sunrya-dark.svg.svg" alt="" />
        </div>
        <div className="flex items-center gap-5">
          <div className="font-medium">
            <Button name="Contact Us" />
          </div>
          <div className="bg-red-500 rounded-md font-bold text-gray-50">
            <Button name="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
