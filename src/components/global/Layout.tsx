import React, {Children, ReactNode} from "react";
import Navbar from "./Navbar";

interface layoutProps {
  children: ReactNode;
}

function Layout(props: layoutProps) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {props.children}
    </div>
  );
}

export default Layout;
