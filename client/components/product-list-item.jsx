import React from 'react';

function ProductListItem(props) {
  return (
    props.products.map(item => {
      var itemImage = item['Image'][0];
      var price = item['Price'];
      var id = item['ID'];
      var description = item['ShortDescription'];
      var style = {
        backgroundImage: 'url(' + itemImage + ')',
        width: 200 + 'px',
        height: 200 + 'px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      };
      return (
        <div key={id} onClick ={ () => props.viewSetter(id)} >
          <div style={style} >
          </div>
          <div>
            ${price}
            <br />
            {description}
          </div>
        </div>
      );

    }));
}

export default ProductListItem;
