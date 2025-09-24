import React from "react";
import Navbar from "../components/Navbar";
import CategaryMenu from "../components/CategaryMenu";
import FoodItems from "../components/FoodItems";
// import Cart from "../components/Cart";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategaryMenu />
      <FoodItems />
      {/* <Cart /> */}
    </>
  );
};

export default Home;
