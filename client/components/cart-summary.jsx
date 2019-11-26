import React from 'react';
import cartSummaryItem from './cart-summary-item';
import header from './header';

function cartSummary(props) {
  return (
    <header />,
    <div>
      <div><button>Back to Catalog</button></div>
      <div>My Cart
      CART ITEM HERE
      {props.cart.map((cartItem, index) => {
        return (

          <cartSummaryItem
            key={index}
            image={cartItem.image}
            name={cartItem.name}
            price={cartItem.price}
            shortDescription={cartItem.shortDescription} />
        );
      })
      }
      </div>
    </div>
  );
}

export default cartSummary;
