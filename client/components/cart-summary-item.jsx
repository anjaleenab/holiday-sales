import React from 'react';

function CartSummaryItem(props) {
  return (
    props.cart.map(cartItem => {
      var itemImage = cartItem['Image'][0];
      var price = cartItem['Price'];
      var id = cartItem['ID'];
      var shortdescription = cartItem['ShortDescription'];
      // var style = {
      //   backgroundImage: 'url(' + itemImage + ')',
      //   width: 200 + 'px',
      //   height: 200 + 'px',
      //   backgroundSize: 'contain',
      //   backgroundRepeat: 'no-repeat',
      //   margin: '10px auto 0px'
      // };
      return (
        <div key={id}>
          <div>
            <img src={itemImage}></img>
          </div>
          <div>
            {name}
          </div>
          <div>
            {price}
          </div>
          <div>
            {shortdescription}
          </div>
        </div>
      );
    }))
  ;
}

export default CartSummaryItem;
