import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    return (
      <div>
        <div>Checkout</div>
        <div>Order Total: </div>
        <form>
          <label>Name</label>
          <input placeholder="Name"></input>
          <label>Credit Card Number</label>
          <input placeholder="Credit Card Number"></input>
          <label>Shipping Information</label>
          <input placeholder="Shipping Information"></input>
        </form>
        <div>
          <button
            className ="btn"
            onClick={() => this.props.viewSetter('catalog', null)}>Continue Shopping</button>
          <button
            className="btn"
            onClick={() => this.props.viewSetter('catalog', null)}>Place Order</button>
        </div>
      </div>
    );
  }
}
