import React from "react";
import Input from "../../elements/InputElements";

function LeftBar() {
  return (
    <>
      <h2 className="text-2xl text-black font-bold mb-3">Kirim Pesan</h2>
      <form className="flex flex-col text-lg h-full justify-evenly items-center gap-5">
        <Input type="text" name="Nama" placeholder="Nama" />
        <Input type="email" name="Email" placeholder="Email" />
        <Input type="number" name="Phone" placeholder="Phone" />
        <textarea
          name="Pesan"
          placeholder="Pesan"
          className="px-6 py-1 text-black"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-400 text-white py-2 w-8/12 rounded-full"
        >
          Kirim
        </button>
      </form>
    </>
  );
}

export default LeftBar;
