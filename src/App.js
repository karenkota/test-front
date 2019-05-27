import React, { Component } from 'react';
import './App.css';

import Cart from './components/cart/Cart';
import Payment from './components/payment/Payment';
import Confirm from './components/confirm/Confirm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Cart />
          <Payment />
          <Confirm />
        </header>
      </div>
    );
  }

  // handleRedirect = () => {
  //   if (this.state.redirect) {
  //     return (<Redirect to={`/payment`} />)
  //   }

  // handleSubmit = () => {
  //   preventDefault();
  //   .then(res => {
  //     this.setState({redirect: true})
  //   })
  //   .catch(err => {
  //     console.log("Error", err);
  //   });
  // }  

}

export default App;
