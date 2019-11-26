import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>
      Wicked Sales
        <span>{props.cartItemCount}
          <i className="fa fa-shopping-cart"></i>
        </span>
      </h1>
    </header>

  );
}

export default Header;
