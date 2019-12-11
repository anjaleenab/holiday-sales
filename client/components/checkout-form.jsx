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
    this.setState({
      nameValue: '',
      creditCardValue: '',
      addressValue: ''
    });
  }
  render() {
    var orderAmount = this.props.getOrderAmount();
    return (
      <div className="container col-xl-10 m-3">
        <div className="checkout">Checkout
          <div>Order Total: {orderAmount} </div>
          <form className="ml-5 mt-2">
            <div className="m-1" >
              <div className="form-group row">
                <label className="col-md-4">Name</label>
                <input
                  className="col-md-8 input"
                  placeholder="Name"
                  value={this.state.nameValue}
                  onChange={this.handleNameChange}/>
              </div>
              <div className="form-group row">
                <label className="col-md-4">Credit Card Number</label>
                <input
                  className="col-md-8 input"
                  placeholder="Credit Card Number"
                  value={this.state.creditCardValue}
                  onChange={this.handleCreditCardChange}/>
              </div>
              <div className="form-group row">
                <label className="col-md-4">Shipping Information</label>
                <input
                  className="col-md-8 input"
                  placeholder="Shipping Information"
                  value={this.state.addressValue}
                  onChange={this.handleAddressChange}/>
              </div>
            </div>
          </form>
        </div>
        <div className="checkoutFormButtons">
          <button
            className="btn btn-dark contShop"
            onClick={() => this.props.viewSetter('catalog', null)}
          >Continue Shopping</button>
          <button
            className="placeOrder btn btn-dark float-right mr-1"
            onClick={this.handleSubmit}
          >Place Order</button>
        </div>
      </div>
    );
  }
}
