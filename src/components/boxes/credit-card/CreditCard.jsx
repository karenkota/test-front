import React, {Component} from 'react';
import './CreditCard.css';

class creditcard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    CCNumber: '', 
    CCName: '', 
    CCValid: '', 
    CCcvv: '' 
    }
    this.handleChange = this.handleChange.bind(this);
  }  
 
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className='container-creditcard'>
            <h4>CARTÃO DE CRÉDITO</h4>
            <div className='tb-creditcard-info'>
              <div className='creditcard-number'>
                <h5>Número do cartão:</h5>
                <input className="input-creditcard-number" 
                onChange={this.handleChange}
                value={this.state.CCNumber}
                name="CCNumber" 
                type="text" 
                placeholder="  _ _ _ _._ _ _ _._ _ _ _._ _ _ _" />
              </div>
              <div className='creditcard-name'>
                <h5>Nome do Titular:</h5>
                <input className="input-creditcard-name" 
                onChange={this.handleChange}
                value={this.state.CCName}
                name="CCName"  
                type="text" 
                placeholder="  Como no cartão" />
              </div>
                <div className='input-input-creditcard'>
                  <div className='creditcard-valid'>
                    <h5>Validade (mês/ano):</h5>
                    <input className="input-creditcard-valid" 
                    onChange={this.handleChange}
                    value={this.state.CCValid}
                    name="CCValid"  
                    type="text" 
                    placeholder="  _ _/_ _ _ _" />
                  </div>
                  <div className='creditcard-cvv'>
                    <h5>CVV:</h5>
                    <input className="input-creditcard-cvv" 
                    onChange={this.handleChange}
                    value={this.state.CCcvv}
                    name="CCcvv"  
                    type="text" 
                    placeholder="  _ _ _" />
                  </div>
                </div>
            </div>
      </section>
    )
  }
}

export default creditcard;
