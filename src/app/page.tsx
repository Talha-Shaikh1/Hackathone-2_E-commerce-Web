import React from 'react';

import FeaturedProducts from "./components/featureProduct/FeatureProduct";
import Hero from "./components/hero/Hero";
import Logos from "./components/logos/Logos";
import Product from "./components/ourProduct/Product";
import TopCategories from "./components/topCategories/TopCategories";



export default function Home() {
  return (
    <div>
      <Hero />
      <Logos />
      <FeaturedProducts />
      <TopCategories />
      <Product />
    </div>
  );
}
