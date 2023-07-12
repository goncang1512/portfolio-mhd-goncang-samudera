import React from "react";

function InputElements(props) {
  const { type, name, placeholder } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full text-black px-6 py-1 outline-none"
        required
      />
    </>
  );
}

export default InputElements;
