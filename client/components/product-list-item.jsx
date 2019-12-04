import React from 'react';

function ProductListItem(props) {
  return (
    props.products.map(item => {
      var itemImage = item['Image'][0];
      var price = item['Price'];
      var id = item['ID'];
      var name = item['Name'];
      var style = {
        backgroundImage: 'url(' + itemImage + ')',
        width: 200 + 'px',
        height: 200 + 'px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        margin: '10px auto 0px'
      };
      return (
        <div
          className="m-3 item"
          key={id}
          onClick ={ () => props.viewSetter('details', id)} >
          <div
            style={style} >
          </div>
          <div className="briefProductInfo">
            {name}
            <br />
            ${price}
          </div>
        </div>
      );

    }));
}

export default ProductListItem;
