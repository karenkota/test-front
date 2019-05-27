import React, {Component} from 'react';
import './Cart.css';

import Steps from '../boxes/steps/Steps';
import Products from '../boxes/products/Products';
import PriceBar from '../boxes/total-price/PriceBar';
import Button from '../boxes/button/Button';


const cart = () => {
  return (
    <div className="container-cart">
      < Steps  cart="orange" />
        <div className="cart-products">
          <div className='tb-products'>
            <Products />
          </div>
          <div className="cart-price">
            <PriceBar />
          </div>
          <div className="cart-payment">
            <Button />
          </div>
        </div>
    </div>
  )
}

export default cart;
