import React from 'react';

function Header(props) {
  return (
    <header style={{ marginLeft: '10px' }}>
      <h1>
      Wicked Sales
        <span className="cart">{props.cartItemCount}
          <i onClick={() => props.viewSetter('cart', null)}
            className="fa fa-shopping-cart"></i>
        </span>
      </h1>
    </header>

  );
}

export default Header;
