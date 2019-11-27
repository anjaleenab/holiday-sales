import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      creditCardValue: '',
      addressValue: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }
  handleNameChange(event) {
    this.setState({
      nameValue: event.target.value
    });
  }
  handleCreditCardChange(event) {
    this.setState({
      creditCardValue: event.target.value
    });
  }
  handleAddressChange(event) {
    this.setState({
      addressValue: event.target.value
    });
  }
  render() {
    return (
      <div>
        <div>Checkout</div>
        <div>Order Total: </div>
        <form>
          <label>Name</label>
          <input
            placeholder="Name"
            value={this.state.nameValue}
            onChange ={this.handleNameChange}></input>
          <label>Credit Card Number</label>
          <input
            placeholder="Credit Card Number"
            value={this.state.creditCardValue}
            onChange={this.handleCreditCardChange}></input>
          <label>Shipping Information</label>
          <input
            placeholder="Shipping Information"
            value={this.state.addressValue}
            onChange={this.handleAddressChange}></input>
        </form>
        <div>
          <button
            className ="btn"
            onClick={() => this.props.viewSetter('catalog', null)}>Continue Shopping</button>
          <button
            className="btn"
            // onClick=
          >Place Order</button>
        </div>
      </div>
    );
  }
}
