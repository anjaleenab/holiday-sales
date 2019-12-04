import React from 'react';

function Header(props) {
  var count = 0;
  for (var itemNumber = 0; itemNumber < props.cart.length; itemNumber++) {
    count += props.cart[itemNumber]['count'];
  }
  return (
    <header style={{ marginLeft: '10px' }}>
      <h1>
      Wicked Sales
        <span className="cartIcon">{count}
          <i onClick={() => props.viewSetter('cart', null)}
            className="fa fa-shopping-cart"></i>
        </span>
      </h1>
    </header>

  );
}

export default Header;
