import React from 'react';

function Header(props) {
  var count = 0;
  for (var itemNumber = 0; itemNumber < props.cart.length; itemNumber++) {
    count += props.cart[itemNumber]['count'];
  }
  return (
    <header style={{ marginLeft: '10px', paddingTop: '7px' }}>
      <h1>
        <span onClick={() => props.viewSetter('catalog', null)}>Holiday Sales</span>
        <span className="cartIcon">{count}
          <i onClick={() => props.viewSetter('cart', null)}
            className="fa fa-shopping-cart"></i>
        </span>
      </h1>
    </header>

  );
}

export default Header;
