import React from "react";

import ProductList from "../../ProductList";
import StartScreen from "../../StartScreen";
import AboutUs from "../../AboutUs";
import Testimonials from "../../Testimonials";
import Offer from "../../Offer";
import Eco from "../../Eco";
import News from "../../News";

const HomePage = () => {
  return (
    <>
      <StartScreen />
      <AboutUs />
      <ProductList />
      <Testimonials />
      <Offer />
      <Eco />
      <News />
    </>
  );
};

export default HomePage;
