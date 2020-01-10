import React from 'react';
import RemovalConf from './removal-confirmation';

function CartSummaryItem(props) {
  return (
    props.cart.map((cartItem, index) => {
      var name = cartItem['name'];
      var itemImage = cartItem['Image'];
      var price = cartItem['price'];
      var shortdescription = cartItem['ShortDescription'];
      var numberOfItem = cartItem['count'];
      var productID = cartItem['productID'];
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
          <div className="mt-2" style={style}>
          </div>
          <div className="d-flex flex-column cartItemInfo">
            <div>
              {name}
            </div>
            <div>
              ${price}
              <br/>
              Quantity: {numberOfItem}
            </div>
            <div>
              {shortdescription}
            </div>
            <div className="quantButtons">
              <button
                className="btn btn-dark decrement font-weight-bold"
                onClick={() => {
                  if (numberOfItem > 1) {
                    props.decrement(numberOfItem, productID, props.cartID);
                  } else {
                    alert('Please use the Remove Item button for quantities less than 2.');
                  }
                }}>-</button>
              <button
                className="btn btn-dark increment font-weight-bold"
                onClick={() => props.increment(numberOfItem, productID, props.cartID)}>+</button>
              <button
                className="btn btn-dark remove"
                onClick={() => props.removalConf()}>Remove Item
              </button>
            </div>
            {
              props.removal
                ? <RemovalConf
                  removal={props.removal}
                  removeItem={this.removeItem}
                  productID={productID}
                  cartID={props.cartID} />
                : null
            }

          </div>
        </div>
      );
    }))
  ;
}

export default CartSummaryItem;
