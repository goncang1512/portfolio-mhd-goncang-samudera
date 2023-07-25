import React from "react";

function InputElements(props) {
  const { type, name, placeholder, onChange, value } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="input-contact w-full text-black px-6 py-1 outline-none text-xl"
        required
      />
    </>
  );
}

export default InputElements;
