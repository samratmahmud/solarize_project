import React from "react";

interface mateiral {
  name: string;
}

function Metal(props: mateiral) {
  return (
    <div>
      <div className="md:text-2xl text-xl font-semibold p-4 aspect-square w-[150px] grid place-content-center m-auto text-center">
        {props.name}
      </div>
    </div>
  );
}

export default Metal;
