import React from "react";

const CategaryMenu = () => {
  return (
    <div className="mx-6 mt-10">
      <h3 className="font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden font-semibold">
        <button className="py-2 px-3 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white">
          All
        </button>
        <button className="py-2 px-3 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white">
          Lunch
        </button>
        <button className="py-2 px-3 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white">
          Breakfast
        </button>
        <button className="py-2 px-3 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white">
          Dinner
        </button>
        <button className="py-2 px-3 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white">
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategaryMenu;
