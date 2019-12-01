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
      <div className="container m-3">
        <div>Checkout
          <div>Order Total: </div>
          <form className="ml-5 mt-2">
            <div className="m-5" >
              <div className="form-group row">
                <label className="col-md-4">Name</label>
                <input
                  className="col-md-8"
                  placeholder="Name"
                  value={this.state.nameValue}
                  onChange={this.handleNameChange}/>
              </div>
              <div className="form-group row">
                <label className="col-md-4">Credit Card Number</label>
                <input
                  className="col-md-8"
                  placeholder="Credit Card Number"
                  value={this.state.creditCardValue}
                  onChange={this.handleCreditCardChange}/>
              </div>
              <div className="form-group row">
                <label className="col-md-4">Shipping Information</label>
                <input
                  className="col-md-8"
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
            className="btn btn-dark float-right mr-1"
            onClick={this.handleSubmit}
          >Place Order</button>
        </div>

      </div>
    );
  }
}
