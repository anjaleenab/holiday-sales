import React from 'react';

function AddToCartOptions(props) {
  return (
    <div className="addOptions">
      <button
        className= "btn btn-dark btn-sm opt1"
        onClick={() => props.viewSetter('cart', null)}
      >View Cart</button>
      <button
        className = "btn btn-dark btn-sm opt2"
        onClick={() => props.viewSetter('catalog', null)}
      >Continue Shopping
      </button>
    </div>

  );
}

export default AddToCartOptions;
