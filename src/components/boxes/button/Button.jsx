import React from 'react';
import './Button.css';

const button = (props) => {
  return (
    <div className="button">
      <button className="btn-payment" name="btnPayment" >{props.display}</button>
    </div>
  )
}

export default button;
