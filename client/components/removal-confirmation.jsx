import React from 'react';

function RemovalConf(props) {
  return (
    <div className="removalConf"> Are you sure you would like to remove this item?
      <button
        className="btn btn-dark remove"
        onClick={() => props.removeItem(props.productID, props.cartID)}>Remove
      </button>
    </div>
  );
}

export default RemovalConf;
