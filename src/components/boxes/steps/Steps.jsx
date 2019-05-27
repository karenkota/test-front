import React from "react";
import './Steps.css';

const navbar = (props) => {
  return (
    <div className='container-navbar' >
      <div className={`navbar-title ${props.cart}`}>
        <h3>SACOLA</h3>
      </div>
      <div className={`navbar-title ${props.payment}`}>
        <h3>PAGAMENTO</h3>
      </div>
      <div className={`navbar-title ${props.confirm}`}>
        <h3>CONFIRMAÇÃO</h3>
      </div>
    </div>
  )
}

export default navbar;