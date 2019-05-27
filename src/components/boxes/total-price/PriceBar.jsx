import React, {Component} from 'react';
import axios from 'axios';
import './PriceBar.css';

class products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {}
    }
  }  

  componentDidMount() {
    axios.get ( 'http://www.mocky.io/v2/5b15c4923100004a006f3c07' )
    .then(res => {
      console.log(res.data);
      this.setState({
       products: res.data,
      })
      
    })
    .catch(error => console.log(error))
  }

  render () {
    return (
      <section className="container-pricebar">
        <div className='tb-pricebar'>
          <div className='products-pricebar'>
            <p>PRODUTOS </p>
          </div>
          <div className='products-price-send'>
            <p>FRETE</p>
          </div>
          <div className='products-price-discount'>
            <p>DESCONTO</p>
          </div>
          <div className='products-price-total'>
            <p>TOTAL</p>
          </div>
        </div>
        <div className='tb-pricebar-value'>
          <div className='products-pricebar'>
            <p>{'R$'+ this.state.products.subTotal}</p>
          </div>
          <div className='products-price-send'>
            <p>{'R$'+ this.state.products.shippingTotal}</p>
          </div>
          <div className='products-price-discount'>
            <p>{'R$'+ this.state.products.discount}</p>
          </div>
          <div className='products-price-total'>
            <p>{'R$'+ this.state.products.total}</p>
          </div>
        </div>
      </section>
    )
  }
}

export default products;

