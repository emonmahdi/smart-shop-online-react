import React from 'react'
import HeroBanner from "../../components/Hero/HeroBanner";
import FlashSale from "../../components/FlashSale";
import TopCategories from "./TopCategories";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FlashSale />
      <TopCategories />
    </div>
  );
};

export default Home