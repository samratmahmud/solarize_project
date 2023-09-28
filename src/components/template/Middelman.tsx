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
    <div className="flex flex-row gap-16 items-center justify-between even:flex-row-reverse">
      <div>
        <div className="text-6xl font-bold mb-11 text-cyan-950 max-w-[512px]">
          {name}
        </div>
        <div className="text-md text-cyan-950 mb-12 max-w-[526px]">{title}</div>
        <Link
          href={""}
          className="text-lg font-medium text-cyan-950 inline-block"
        >
          {learn}
        </Link>
      </div>
      <div className="flex-shrink-0 max-w-[600px] overflow-hidden">
        <img src={pic} alt="" />
      </div>
    </div>
  );
}

export default Middelman;
