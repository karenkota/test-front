import React, {Component} from 'react';
// import { Redirect } from 'react-router-dom';
import './Button.css';

class button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      
    }  
  }

  handleRedirect = () => {
    // if (this.state.redirect) {
      // return (<Redirect to={`/payment`} />)
    }

  handleSubmit = () => {
    // preventDefault();
    // .then(res => {
    //   this.setState({redirect: true})
    // })
    // .catch(err => {
    //   console.log("Error", err);
    // });
  }  

  render() {
    return (
      <div className="button">
        {/* {this.handleRedirect()} */}
        {/* const= text; value={this.state.msg.text} */}
        <button className="btn-payment" onClick={this.handleSubmit} name="btnPayment" >SEGUIR PARA O PAGAMENTO</button>
      </div>
    )
  }
}

export default button;
