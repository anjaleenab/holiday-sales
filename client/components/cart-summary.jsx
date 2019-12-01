import React from 'react';
import CartSummaryItem from './cart-summary-item';
import header from './header';

function CartSummary(props) {
  return (
    <header />,
    <div>
      <div className="catalogReturn">
        <button
          className="btn btn-sm btn-dark"
          onClick={() => props.viewSetter('catalog', null)}>Back to Catalog</button>
      </div>
      <div className="d-flex flex-column m-5 cart">Shopping Cart
        {props.cartlength ? props.cart.map((cartItem, index) => {
          return (
            <CartSummaryItem
              key={index}
              image={cartItem.image}
              name={cartItem.name}
              price={cartItem.price}
              shortDescription={cartItem.shortDescription} />
          );
        })
          : <div className="emptyCart">Your shopping cart is currently empty.</div>
        }
      </div>

      {props.cart.length ? <div className="itemTotal float-right">Item Total $<div>
        <button
          className="btn btn-dark mt-2 ml-3"
          onClick={() => props.viewSetter('checkout', null)}> Checkout</button>
      </div></div> : null}
    </div>
  );
}

export default CartSummary;
