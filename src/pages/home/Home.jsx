import React, { useContext } from "react";
import Track from "../../components/track/Track";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial.";

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  console.log(cartItem);
  const addCart = () => {
    dispatch(addToCart("medicine"));

    const deleteCart = () => {
      dispatch(deleteFromCart("medicine"));
    };
  };
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={"/allproducts"}>
          <button className=" bg-gray-300 px-5 py-2 rounded-xl">
            See more
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
