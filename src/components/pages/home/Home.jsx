import React from "react";
import Faq from "./faq/Faq";
import Banner from "./banner/Banner";
import Features from "../features/Features";
import Categories from "../categories/Categories";
import Testimonials from "./testimonials/Testimonials";
import Newsletter from "./newsletter/Newsletter";
import Footer from "../partial/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <Testimonials/>
      <Faq />
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default Home;
