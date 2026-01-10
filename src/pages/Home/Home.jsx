import React from 'react'
import HeroBanner from "../../components/Hero/HeroBanner";
import FlashSale from "../../components/FlashSale";
import TopCategories from "./TopCategories";
import MostPopularProduct from "./MostPopularProduct";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FlashSale />
      <TopCategories />
      <MostPopularProduct />
    </div>
  );
};

export default Home