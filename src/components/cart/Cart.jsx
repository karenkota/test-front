import React, {Component} from 'react';
import './Cart.css';
import { Link } from 'react-router-dom'
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
            <Link to="/payment"><Button display="SEGUIR PARA O PAGAMENTO"/></Link>
          </div>
        </div>
    </div>
  )
}

export default cart;
