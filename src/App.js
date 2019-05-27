import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Payment from './components/payment/Payment';
import Confirm from './components/confirm/Confirm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Cart} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/confirm" component={Confirm} />
        </Switch>
      </div>
    );
  }
}

export default App;
