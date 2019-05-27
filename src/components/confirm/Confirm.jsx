import React from 'react';
import Steps from '../boxes/steps/Steps';

import Sucess from '../boxes/confirm-payment/sucess/Sucess';
// import ConfirmCC from '../boxes/confirm-payment/confirmCC';
import Products from '../boxes/products/Products';
import PriceBar from '../boxes/total-price/PriceBar';


const confirm = () => {
  return (
    <div className="container-confirm">
      < Steps  confirm="orange"  />
        <div className="cart-confirm">
          <div className='tb-confirm-payment'>
            <Sucess />
            {/* <ConfirmCC /> */}
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

export default confirm;