import React, {Component} from 'react';
import axios from 'axios';
import './Products.css';

class products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }  

  componentDidMount() {
    axios.get ( 'http://www.mocky.io/v2/5b15c4923100004a006f3c07' )
    .then(res => {
      this.setState({
       products: res.data.items,
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    if (this.state.products.length !== 0){
      return (
        <section className='container-products'>
          <h4>PRODUTOS</h4>
            <div className='tb-products-products'>
              {
                this.state.products.map((item, index) => {
                  return (
                    <div className='tb-products-list' key={index}>
                      <figure className='image-products'>
                        <img src={item.product.imageObjects[0].thumbnail} alt="product in your cart"/>  
                      </figure>
                      <div className='name-products'>{item.product.name}</div>
                      <div className='price-products'>{'R$'+ item.product.priceSpecification.price}</div>
                    </div>
                  );
                })
              }
            </div>
        </section>
      )
    } else {
      return null;
    }
  }
}

export default products;
