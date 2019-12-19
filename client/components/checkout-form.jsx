import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      creditCardValue: '',
      addressValue: ''
    };
    this.nameError = null;
    this.cardError = null;
    this.addressError = null;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditCardChange = this.handleCreditCardChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }
  handleNameChange(event) {
    event.persist();
    var name = event.target.value;
    var numbersReg = /\d/;
    if (!name) {
      this.nameError = 'Each input must have a value';
    } else if (name.length > 65) {
      this.nameError = 'Value for full name must be less than 65 characters';
    } else if (numbersReg.test(name)) {
      this.nameError = 'Name input cannot have numbers';
    } else {
      this.nameError = null;
    }
    this.setState({
      nameValue: name
    });

  }
  handleCreditCardChange(event) {
    var creditCardNum = event.target.value;
    var lettersReg = /[A-z]/;
    if (!creditCardNum) {
      this.cardError = 'Each input must have a value';
    } else {
      if (creditCardNum.length > 16) {
        if (creditCardNum[4] !== ' ' | creditCardNum[9] !== ' ' || creditCardNum[14] !== ' ') {
          this.cardError = 'If you are using spaces, the format should be as follows: 1234 5678 9012 3456. Note: Spaces are optional';
        } else if (creditCardNum.length > 19) {
          this.cardError = 'This input should no more than 19 characters including spaces';
        } else if (creditCardNum.length < 16) {
          this.cardError = 'This input should be between 16-19 characters. Spaces are not required';
        }
      }
      if (lettersReg.test(creditCardNum));
      this.cardError = 'Credit Card input cannot have letters';
    }
    this.setState({
      creditCardValue: event.target.value
    });
  }
  handleAddressChange(event) {
    var address = this.state.addressValue;
    if (!address) {
      this.addressError = 'Each input must have a value';
    } else if (address.length < 21) {
      this.addressError = 'Address input must be a minimum of 21 characters';
    } else if (address.length > 156) {
      this.addressError = 'Address input must be less than 156 characters';
    }
    this.setState({
      addressValue: event.target.value
    });
  }
  validateForm() {

  }
  handleSubmit(event) {
    this.setState({
      nameValue: '',
      creditCardValue: '',
      addressValue: ''
    });
    this.emptyCart();
  }
  emptyCart() {
    var bodyData = {
      id: this.props.cartID
    };
    var data = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    };
    fetch('/api/cart.php', data);
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
                  onChange={this.handleNameChange} />
                <div className= "error">{this.nameError}</div>
              </div>
              <div className="form-group row">
                <label className="col-md-4">Credit Card Number</label>
                <input
                  className="col-md-8 input"
                  placeholder="Credit Card Number"
                  value={this.state.creditCardValue}
                  onChange={this.handleCreditCardChange} />
                <div className='error'>{this.cardError}</div>

              </div>
              <div className="form-group row">
                <label className="col-md-4">Shipping Information</label>
                <input
                  className="col-md-8 input"
                  placeholder="Shipping Information"
                  value={this.state.addressValue}
                  onChange={this.handleAddressChange} />
                <div className='error'>{this.addressError}</div>
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
            onClick = {this.validateForm}
          >Place Order</button>

        </div>
      </div>
    );
  }
}

// {
//   () => {
//     this.handleSubmit();
//     this.props.viewSetter('confirmation', null);
//   }
// }
