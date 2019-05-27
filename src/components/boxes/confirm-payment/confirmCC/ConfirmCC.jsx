import React, {Component} from "react";
// import creditcard from "../../credit-card/CreditCard";

class ConfirmCC extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    // CCNumber: creditcard.props, 
    // CCName: creditcard.props, 
    // CCValid: creditcard.props, 
    // CCcvv: creditcard.props
    }
  }  

  render(){
    return (
      <section className="confirmCC">
        {/* <h3>PAGAMENTO</h3>
        <div className="">
          <p>{****.****.****.$`this.CCNumber.[12][13][14][15]`}</p>
          <p>{this.CCName}</p>
          <p>{this.CCcvv}</p>
        </div> */}
      </section>
    )
  }
}

export default ConfirmCC;