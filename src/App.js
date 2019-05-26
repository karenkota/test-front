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
}

export default App;
