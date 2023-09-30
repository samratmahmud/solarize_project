import Link from "next/link";
import React from "react";

interface mansProps {
  pic: string;
  name: string;
  title: string;
  learn: string;
}

function Middelman(props: mansProps) {
  let {pic, name, title, learn} = props;
  return (
    <div className="flex md:flex-row flex-col md:gap-16 gap-10 items-center justify-between md:even:flex-row-reverse">
      <div className="flex_[0_0_50%]">
        <div className="md:text-6xl text-xl font-bold md:mb-11 mb-5 text-cyan-950 max-w-[512px]">
          {name}
        </div>
        <div className="md:text-md text-xs text-cyan-950 md:mb-12 mb-5 max-w-[526px]">
          {title}
        </div>
        <Link
          href={""}
          className="md:text-lg text-md font-medium text-cyan-950 inline-block"
        >
          {learn}
        </Link>
      </div>
      <div className="flex_[0_0_50%]">
        <img src={pic} alt="" />
      </div>
    </div>
  );
}

export default Middelman;
