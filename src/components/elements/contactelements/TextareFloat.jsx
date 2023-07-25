import React from "react";

function TextareFloat(props) {
  const { type, name, onChange, value, children } = props;
  return (
    <div className="area-container relative w-full">
      <textarea
        className="text-area px-6 py-4 h-28 p-2.5 bg-white text-black text-base w-full block"
        placeholder=" "
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        required
      ></textarea>
      <label className="label-floating bg-white absolute pointer-events-none text-base text-zinc-500 left-3.5">
        {children}
      </label>
    </div>
  );
}

export default TextareFloat;
