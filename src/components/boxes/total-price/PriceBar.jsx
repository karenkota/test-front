import React, {Component} from 'react';
import './PriceBar.css';

class products extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <section className="container-pricebar">
            <div className='tb-pricebar'>
              <div className='products-pricebar'>
                <p>PRODUTOS</p>
                <p></p>
              </div>
              <div className='products-price-send'>
                <p>FRETE</p>
                <p></p>
              </div>
              <div className='products-price-descount'>
                <p>DESCONTO</p>
                <p></p>
              </div>
              <div className='products-price-total'>
                <p>TOTAL</p>
                <p></p>
              </div>
            </div>
      </section>
    )
  }
}

export default products;
