import React from 'react';
import CartSummaryItem from './cart-summary-item';
import header from './header';

function CartSummary(props) {
  var orderAmount = props.getOrderAmount();
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
          ? <CartSummaryItem cart={props.cart} removeItem={props.removeItem}
            cartID={props.cartID} decrement={props.lowerQuantity} increment={props.increaseQuantity}/>
          : <div className="emptyCart">Your shopping cart is currently empty.</div>
        }
      </div>

      {props.cart.length >= 1 ? <div className="itemTotal float-right">Item Total ${orderAmount}<div>
        <button
          className="btn btn-dark mt-2 ml-3"
          onClick={() => props.viewSetter('checkout', null)}> Checkout</button>
      </div></div> : null}
    </div>
  );
}

export default CartSummary;
