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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    event.persist();
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
  handleSubmit(event) {
    console.log('info submitted');
    // make this function go to confirmation page?
  }
  render() {
    return (
      <div>
        <div className="column">Checkout
          <div>Order Total: </div>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                placeholder="Name"
                value={this.state.nameValue}
                onChange ={this.handleNameChange}></input>
            </div>
            <div className="form-group">
              <label>Credit Card Number</label>
              <input
                placeholder="Credit Card Number"
                value={this.state.creditCardValue}
                onChange={this.handleCreditCardChange}></input>
            </div>
            <div className="form-group">
              <label>Shipping Information</label>
              <input
                placeholder="Shipping Information"
                value={this.state.addressValue}
                onChange={this.handleAddressChange}></input>
            </div>
          </form>
        </div>
        <div>
          <button
            className="btn btn-dark"
            onClick={() => this.props.viewSetter('catalog', null)}
          >Continue Shopping</button>
          <button
            className="btn btn-dark"
            onClick={this.handleSubmit}
          >Place Order</button>
        </div>

      </div>
    );
  }
}
