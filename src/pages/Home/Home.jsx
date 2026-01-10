import React from 'react'
import HeroBanner from "../../components/Hero/HeroBanner";
import FlashSale from "../../components/FlashSale";
import TopCategories from "./TopCategories";
import MostPopularProduct from "./MostPopularProduct";
import CompanyLogos from "./CompanyLogos";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FlashSale />
      <TopCategories />
      <MostPopularProduct />
      <CompanyLogos />
    </div>
  );
};

export default Home