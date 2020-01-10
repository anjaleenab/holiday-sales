import React from 'react';

function RemovalConf(props) {
  if (props.productID === props.removal.productID) {
    return (
      <div className="removalConf"> Are you sure you would like to remove each {props.productName} from your cart?
        <button
          className="btn btn-dark remove"
          onClick={() => props.removeItem(props.productID, props.cartID)}>Remove
        </button>
      </div>
    );
  } else {
    return (
      null
    );
  }

}

export default RemovalConf;
