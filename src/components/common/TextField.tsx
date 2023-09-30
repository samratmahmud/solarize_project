import React from "react";

interface TextFieldProps {
  label: string;
  required?: boolean;
}

function TextField(props: TextFieldProps) {
  const {label, required} = props;

  return (
    <div className="mb-4">
      <div className="md:text-md text-sm font-bold mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </div>
      <input
        className="py-2 w-full focus:outline-none px-3"
        type="text"
        placeholder=""
        required={required}
      />
    </div>
  );
}

export default TextField;
