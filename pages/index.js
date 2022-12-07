import React from "react";
// local
import { HeroBanner, Product, Banner1, Categories } from "../components";
import { Brands } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />
      <Categories />
      <div className="products-heading">
        <h2>Popular Products</h2>
        <p>All popular trending products</p>
      </div>

      <div className="products-container">
        {products?.slice(0, 18).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <Banner1 />

      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Recommanded products for you</p>
      </div>

      <div className="products-container">
        {products?.slice(18, 35).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Brands />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  // banner query
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
