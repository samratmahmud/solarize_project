import React from "react";

interface buttonProps {
  name: string;
}

function Button(props: buttonProps) {
  return (
    <div>
      <div className="text-md py-2 px-5 rounded-md shadow-md inline-block">
        {props.name}
      </div>
    </div>
  );
}

export default Button;
