import React, { Component } from "react";
import './Steps.css';

class navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  toogleNavbar() {
    this.setState({
      
    })
  }
  render (){
    return (
      <div className="container-navbar">
        <div className="navbar-title">
          <h3>SACOLA</h3>
        </div>
        <div className="navbar-title">
          <h3>PAGAMENTO</h3>
        </div>
        <div className="navbar-title">
          <h3>CONFIRMAÇÃO</h3>
        </div>
      </div>
    )
  }
}

export default navbar;