import React from 'react';

function OrderConfirmation(props) {
  return (
    <div>
      <div className="container col-xl-10 m-5 orderConf">Your request has been processed. Thank you for your order!</div>
      <div className="catalogReturn">
        <button
          className="btn btn-sm btn-dark"
          onClick={() => props.viewSetter('catalog')}> Return To Catalog </button>
      </div>
    </div>

  );
}

export default OrderConfirmation;
