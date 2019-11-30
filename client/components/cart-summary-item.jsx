import React from 'react';

function CartSummaryItem(props) {
  return (
    <div>
      <div>
        <img src={props.cartItem.image}></img>
      </div>
      <div>
        {props.cartItem.name}
      </div>
      <div>
        {props.cartItem.price}
      </div>
      <div>
        {props.cartItem.shortDescription}
      </div>
    </div>
  );
}

export default CartSummaryItem;