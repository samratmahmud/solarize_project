"use client";
import React, {Children, ReactNode, useEffect} from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

interface layoutProps {
  children: ReactNode;
}

function Layout(props: layoutProps) {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  });
  return (
    <div className="bg-gray-100">
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;
