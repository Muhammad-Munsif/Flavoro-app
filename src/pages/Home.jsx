import React from "react";
import Navbar from "../components/Navbar";
import CategaryMenu from "../components/CategaryMenu";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategaryMenu />
      <FoodItem />
      <Cart />
    </>
  );
};

export default Home;
