import React, {Component} from 'react';
import './Cart.css';

import Steps from '../boxes/steps/Steps';
import Products from '../boxes/products/Products';
import PriceBar from '../boxes/total-price/PriceBar';
import Button from '../boxes/button/Button';


class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }  
  }

  render() {
    return (
      <div className="container-cart">
        < Steps />
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
}

export default cart;
