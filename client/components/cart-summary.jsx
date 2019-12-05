import React from 'react';
import CartSummaryItem from './cart-summary-item';
import header from './header';

function CartSummary(props) {
  var price = 0;

  for (var itemNumber = 0; itemNumber < props.cart.length; itemNumber++) {
    var amountForEach = props.cart[itemNumber]['price'] * props.cart[itemNumber]['count'];
    price += amountForEach;

  }
  var currency = price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return (
    <header />,
    <div>
      <div className="catalogReturn">
        <button
          className="btn btn-sm btn-dark"
          onClick={() => props.viewSetter('catalog', null)}>Back to Catalog</button>
      </div>
      <div className="d-flex flex-column m-4 cart">Shopping Cart
        {props.cart.length >= 1
          ? <CartSummaryItem cart={props.cart}/>
          : <div className="emptyCart">Your shopping cart is currently empty.</div>
        }
      </div>

      {props.cart.length >= 1 ? <div className="itemTotal float-right">Item Total ${currency}<div>
        <button
          className="btn btn-dark mt-2 ml-3"
          onClick={() => props.viewSetter('checkout', null)}> Checkout</button>
      </div></div> : null}
    </div>
  );
}

export default CartSummary;
