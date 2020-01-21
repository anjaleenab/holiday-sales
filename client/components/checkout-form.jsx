import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      creditCardValue: '',
      addressValue: ''
    };
    this.nameError = 'Each input must have a value';
    this.cardError = 'Each input must have a value';
    this.addressError = 'Each input must have a value';
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
    var notLetter = /[\\+~!@#$%^&*()_[/,.?":{}|<>;='`/0-9[\][-]/;
    var numbersReg = /\d/;
    if (notLetter.test(name)) {
      name = name.substring(0, name.length - 1);
    }

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
    var nan = /[-~+!@#$%^&*(),.?":{}|<>;'=/A-z]/;
    creditCardNum = creditCardNum.trim();
    if (nan.test(creditCardNum)) {
      creditCardNum = creditCardNum.substring(0, creditCardNum.length - 1);
    }
    if (creditCardNum[3] && creditCardNum.length === 4) {
      creditCardNum = creditCardNum.padEnd(5);
    }
    if (creditCardNum[8] && creditCardNum.length === 9) {
      creditCardNum = creditCardNum.padEnd(10);
    }
    if (creditCardNum[13] && creditCardNum.length === 14) {
      creditCardNum = creditCardNum.padEnd(15);
    }
    if (creditCardNum.length > 19) {
      creditCardNum = creditCardNum.substring(0, 19);
    }

    if (!creditCardNum) {
      this.cardError = 'Each input must have a value';
    } else if (creditCardNum.length < 16) {
      this.cardError = 'This input should be 16 characters. Spaces will be input automatically';
    } else {
      this.cardError = null;
    }
    this.setState({
      creditCardValue: creditCardNum
    });
  }
  handleAddressChange(event) {
    var address = event.target.value;
    var spaceReg = /\s/;
    if (!address) {
      this.addressError = 'Each input must have a value';
    } else if (!spaceReg.test(address)) {
      this.addressError = 'The format for your address should contain spaces. Please make sure your address is listed correctly';
    } else if (address.length < 21) {
      this.addressError = 'Address input must be a minimum of 21 characters';
    } else if (address.length >= 21) {
      this.addressError = null;
    } else if (address.length > 156) {
      this.addressError = 'Address input must be less than 156 characters';
    } else {
      this.addressError = null;
    }
    this.setState({
      addressValue: address
    });
  }
  validateForm() {
    if (!this.nameError && !this.cardError && !this.addressError) {
      this.handleSubmit();
      this.props.viewSetter('confirmation', null);
    }
  }
  handleSubmit(event) {
    this.setState({
      nameValue: '',
      creditCardValue: '',
      addressValue: ''
    });
    this.emptyCart();
    this.props.updateCartProducts();
  }
  emptyCart() {
    var data = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props.cartID)
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
