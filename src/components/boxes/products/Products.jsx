import React, {Component} from 'react';
import axios from 'axios';
import './Products.css';

class products extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }  


  componentDidMount() {
    axios.get ( 'http://www.mocky.io/v2/5b15c4923100004a006f3c07', {})
    .then(res => {
      console.log (res.data.items);
      this.setState({
        imageObjects: res.data.items.product.imageObjects.thumbnail,
        name: res.data.items.product.name,
        price: res.data.items.product.priceSpecification.price
      })
      
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <section className='container-products'>
        <h4>PRODUTOS</h4>
        <div className='tb-products-products'>
          <div className='tb-products-list'>
            <figure className='image-products'>image</figure>
            {/* <figure><img src={} /></figure>                */}
            <div className='name-products'>name</div>
            <div className='price-products'>price</div>
          </div>
          <div className='tb-products-list'>
            <figure className='image-products'>image</figure>
            {/* <figure><img src={id.items.product.imageObjects.thumbnail} /></figure> */}               
            <div className='name-products'>name</div>
            <div className='price-products'>price</div>
          </div>
          <div className='tb-products-list'>
            <figure className='image-products'>image</figure>
            {/* <figure><img src={id.items.product.imageObjects.thumbnail} /></figure> */}               
            <div className='name-products'>name</div>
            <div className='price-products'>price</div>
          </div>
        </div>
      </section>
    )
  }
}

export default products;
