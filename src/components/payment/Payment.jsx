import React, {Component} from 'react';

import Steps from '../boxes/steps/Steps';
import CreditCard from '../boxes/credit-card/CreditCard';
import PriceBar from '../boxes/total-price/PriceBar';
import Button from '../boxes/button/Button';


class payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }  
  }

  //  HandlerChangeButton(text){
  //  document.getElementById('msg').innerHTML+='<p>'+FINALIZAR O PEDIDO+'</p>'
  //  titleFlick()
  
  render() {
    return (
      <div className="container-cart">
        < Steps />
          <div className="cart-products">
            <div className='tb-creditcard'>
              <CreditCard/>
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

export default payment;
