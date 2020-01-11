import React from 'react';

function RemovalConf(props) {
  if (props.productID === props.removal.productID) {
    return (
      <div className="removalConf"> Are you sure you would like to remove each {props.productName} from your cart?
        <div className="removalButtons">
          <button
            className="btn btn-dark finalRemoval"
            onClick={() => props.removeItem(props.productID, props.cartID)}>Remove
          </button>
          <button
            className="btn btn-dark declineRemoval"
            onClick={() => props.removeModal(false)}> Do Not Remove </button>
        </div>
      </div>
    );
  } else {
    return (
      null
    );
  }

}

export default RemovalConf;
