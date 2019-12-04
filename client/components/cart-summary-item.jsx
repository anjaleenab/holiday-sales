import React from 'react';

function CartSummaryItem(props) {
  return (
    props.cart.map((cartItem, index) => {
      var name = cartItem['name'];
      var itemImage = cartItem['Image'];
      var price = cartItem['price'];
      var shortdescription = cartItem['ShortDescription'];
      var style = {
        backgroundImage: 'url(' + itemImage + ')',
        width: 200 + 'px',
        height: 200 + 'px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        margin: '10px auto 0px'
      };
      return (
        <div className ="d-flex flex-row cartItem"
          key={index}>
          <div style={style}>
          </div>
          <div className="d-flex flex-column cartItemInfo">
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
        </div>
      );
    }))
  ;
}

export default CartSummaryItem;
// <img src={itemImage}></img>
