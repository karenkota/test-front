import React, {Component} from 'react';
import Steps from '../boxes/steps/Steps';

import Sucess from '../boxes/confirm-payment/sucess/Sucess';

import Products from '../boxes/products/Products';
import PriceBar from '../boxes/total-price/PriceBar';


class confirm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  
  render() {
    return (
      <div className="container-confirm">
        < Steps />
          <div className="cart-confirm">
            <div className='tb-confirm-payment'>
             <Sucess />
              
            </div>
            <div className="cart-products">
              <Products/>
            </div>
            <div className="cart-pricebar">
              <PriceBar />
            </div>

          </div>
      </div>
    )
  }
}

export default confirm;