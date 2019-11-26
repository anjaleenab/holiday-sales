import React from 'react';
import cartSummaryItem from './cart-summary-item';

function cartSummary(props) {
  props.cart.map((cartItem, index) => {
    return (
      <cartSummaryItem
        key={index}
        image={cartItem.image}
        name={cartItem.name}
        price={cartItem.price}
        shortDescription={cartItem.shortDescription} />
    );
  });
}

export default cartSummary;
