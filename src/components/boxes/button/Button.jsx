import React, {Component} from 'react';
// import { Redirect } from 'react-router-dom';
import './Button.css';

class button extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }  
  }

  render() {
    return (
      <div className="button">
        <button className="btn-payment" onClick={this.handleSubmit} name="btnPayment" >SEGUIR PARA O PAGAMENTO</button>
      </div>
    )
  }
}

export default button;
