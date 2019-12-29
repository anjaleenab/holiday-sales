import React from 'react';

function CartSummaryItem(props) {
  return (
    props.cart.map((cartItem, index) => {
      var name = cartItem['name'];
      var itemImage = cartItem['Image'];
      var price = cartItem['price'];
      var shortdescription = cartItem['ShortDescription'];
      var numberOfItem = cartItem['count'];
      var style = {
        backgroundImage: 'url(' + itemImage + ')',
        width: 200 + 'px',
        height: 210 + 'px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        margin: 'auto 0px auto 10px'
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
              ${price}
              <br/>
              <label>Quantity:</label>
              <input type="text" value={props.quantity} onChange={props.quantityEdit}></input>
              Quantity: {numberOfItem}
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
