import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Steps from '../boxes/steps/Steps';
import CreditCard from '../boxes/credit-card/CreditCard';
import PriceBar from '../boxes/total-price/PriceBar';
import Button from '../boxes/button/Button';

const payment = () => {
  return (
    <div className="container-cart">
      < Steps payment="orange" />

        <div className="cart-products">
          <div className='tb-creditcard'>
            <CreditCard/>
          </div>
          <div className="cart-price">
            <PriceBar />
          </div>
          <div className="cart-payment">
            <Link to="/confirm"><Button display="FINALIZAR O PEDIDO"/></Link>
          </div>
        </div>
    </div>
  )
}

export default payment;
