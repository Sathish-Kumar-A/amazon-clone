import React from 'react';
import "./home.css";
import { Product } from '../Product/Product';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import { productsOne } from '../config/productConfig';

export const Home = () => {
  return (
    <div>
      <ImageSlider />
      <div className="home_productSection">
        <div className="home_products">
        {productsOne.map((product,index) => {
          return <Product productDetails={product} key={index}/>
        })}
      </div>

      <div className="home_products"></div>
      <div className="home_products"></div>
      <div className="home_products"></div>
      </div>
    </div>
  )
}
