import React from 'react';

function ProductListItem(props) {
  return (
    <div>
      <div style={props.style} >

      </div>
      <div>
        ${props.price}
        <br />
        {props.description}
      </div>
    </div>

  );
}

export default ProductListItem;
