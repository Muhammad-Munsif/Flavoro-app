import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-4">
      <div className="">
        <h3 className="text-2xl">{new Date().toUTCString().slice(0, 16)}</h3>
        <h1 className="text-2xl font-bold">Flavoro</h1>
      </div>
      <div className="">
        <input
          type="search"
          name="search"
          placeholder="search the item name"
          className="border border-gray-400 p-3 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
