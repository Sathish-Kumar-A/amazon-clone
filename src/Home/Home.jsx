import React from 'react';
import "./home.css";
import { Product } from '../Product/Product';
import { ImageSlider } from '../ImageSlider/ImageSlider';
import { productsOne,productsTwo } from '../config/productConfig';

export const Home = () => {
  return (
    <div className='home_container'>
      <ImageSlider />
      <div className="home_productSection">
        <div className="home_products">
        {productsOne.map((product,index) => {
          return <Product productDetails={product} key={index}/>
        })}
      </div>

        <div className="home_products">
            {productsTwo.map((product,index) => {
          return <Product productDetails={product} key={index}/>
        })}
        </div>
      <div className="home_products"></div>
      <div className="home_products"></div>
      </div>
    </div>
  )
}
