import React from "react";

function InputFloat(props) {
  const { children, type, name, onChange, value } = props;
  return (
    <div className="did-floating-label-content w-full">
      <input
        className="did-floating-input p-2.5 bg-white text-black text-base w-full block"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder=" "
        required
      />
      <label className="did-floating-label bg-white absolute pointer-events-none text-base text-zinc-500 left-3.5">
        {children}
      </label>
    </div>
  );
}

export default InputFloat;
