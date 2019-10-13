import React from 'react';

function ProductListItem(props) {
  props.items.map(item => {
    var itemImage = item.image;
    var style = {
      backgroundImage: 'url(' + itemImage + ')',
      width: 200 + 'px',
      height: 200 + 'px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    };
    return (
      <div key={item.id}>
        <div style = {style}>
        </div>
          ${item.price}
        <br/>
        {item.shortDescription}
      </div>
    );

  });
}

export default ProductListItem;
