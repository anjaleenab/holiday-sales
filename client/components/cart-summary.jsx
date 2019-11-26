import React from 'react';
import CartSummaryItem from './cart-summary-item';
import header from './header';

function CartSummary(props) {
  return (
    <header />,
    <div>
      <div>
        <button onClick={() => props.viewSetter('catalog', null)}>Back to Catalog</button>
      </div>
      <div>My Cart
        {props.cart ? props.cart.map((cartItem, index) => {
          return (
            <CartSummaryItem
              key={index}
              image={cartItem.image}
              name={cartItem.name}
              price={cartItem.price}
              shortDescription={cartItem.shortDescription} />
          );
        })
          : <div>There are no items in your cart. </div>
        }
      </div>
      <div>Item Total $</div>
      <div>
        <button> Checkout</button>
      </div>
    </div>
  );
}

export default CartSummary;
