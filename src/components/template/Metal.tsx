import React from "react";

interface mateiral {
  name: string;
}

function Metal(props: mateiral) {
  return (
    <div>
      <div className="text-2xl font-semibold py-16 px-12 max-w-[150px]">
        {props.name}
      </div>
    </div>
  );
}

export default Metal;
