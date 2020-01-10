import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import OrderConfirmation from './order-confirmation';
import Modal from './modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      cartId: {},
      order: {},
      seenDisclaimer: true
    };
    this.removal = false;
    this.getOrderTotal = this.getOrderTotal.bind(this);
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeItems = this.placeItems.bind(this);
    this.verifyDisclaimer = this.verifyDisclaimer.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.confirmRemoval = this.confirmRemoval.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }
  setView(location, id) {
    if (id) {
      this.setState({
        view: {
          name: location,
          params: { id: parseInt(id) }
        }
      });
    } else {
      this.setState({
        view: {
          name: location,
          params: {}
        }
      });
    }
  }
  componentDidMount() {
    this.getCartItems();
    this.getOrderTotal();
  }
  addToCart(product) {
    var data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    };
    fetch(`/api/cart.php`, data)
      .then(response => response.json())
      // .then(data => console.log(data));
      .then(cartID => {
        this.setState({
          cartId: {
            number: cartID + ''
          }
        });
      });
  }
  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(cartItems => {
        this.setState({
          cart: cartItems
        });
      })
      .catch(response => console.error(response));
  }
  placeItems(orderObj) {
    var data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderObj)
    };
    fetch(`/api/orders.php`, data)
      .then(this.setState({
        view: {
          name: 'catalog',
          params: {}
        },
        cart: []
      }));
  }
  removeItem(productID, cartID) {
    var product = {
      productID: productID,
      number: parseInt(cartID['number'])
    };
    var data = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    };
    fetch('/api/cart.php', data);
    this.getCartItems();
  }
  confirmRemoval() {
    this.removal = true;
  }
  getOrderTotal() {
    var price = 0;
    for (var itemNumber = 0; itemNumber < this.state.cart.length; itemNumber++) {
      var amountForEach = this.state.cart[itemNumber]['price'] * this.state.cart[itemNumber]['count'];
      price += amountForEach;

    }
    var currency = price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return currency;
  }
  verifyDisclaimer() {
    this.setState({
      seenDisclaimer: false
    });
  }

  decrementQuantity(numberOfItem, productID, cartID) {
    var items = {
      numberOfItem: numberOfItem,
      productID: productID,
      cartID: parseInt(cartID['number']),
      method: 'decrement'
    };
    var data = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items)
    };
    fetch(`/api/cart.php`, data)
      .then(this.getCartItems());

  }
  incrementQuantity(numberOfItem, productID, cartID) {
    var items = {
      numberOfItem: numberOfItem,
      productID: productID,
      cartID: parseInt(cartID['number']),
      method: 'increment'
    };
    var data = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items)
    };
    fetch(`/api/cart.php`, data)
      .then(this.getCartItems());
  }

  render() {
    var component;
    if (this.state.view.name === 'catalog') {
      component =
        <div className="mainDiv">
          {this.state.seenDisclaimer
            ? <React.Fragment>
              <div className="disclaimLayer">
                <Modal verifyDisclaimer={this.verifyDisclaimer} />
              </div>
              <Header
                cart={this.state.cart}
                viewSetter={this.setView} />
            </React.Fragment>
            : null}
          <ProductList viewSetter={this.setView} />

        </div>;
    } else if (this.state.view.name === 'cart') {
      component =
        <CartSummary currentStatus={this.state.view.name}
          viewSetter={this.setView}
          cart={this.state.cart}
          getOrderAmount={this.getOrderTotal}
          removeItem ={this.removeItem}
          removalConf = {this.confirmRemoval}
          cartID={this.state.cartId}
          lowerQuantity ={this.decrementQuantity}
          increaseQuantity = {this.incrementQuantity}/>;
    } else if (this.state.view.name === 'checkout') {
      component =
        <CheckoutForm viewSetter={this.setView}
          getOrderAmount={this.getOrderTotal}
          cartID={this.state.cartId}
          updateCartProducts={this.getCartItems}/>
      ;
    } else if (this.state.view.name === 'confirmation') {
      component =
        <OrderConfirmation viewSetter={this.setView}/>;
    } else {
      component =
      <ProductDetails viewSetter={this.setView}
        currentProduct={this.state.view.params}
        currentStatus={this.state.view.name}
        addProductToCart={this.addToCart}
        updateCartProducts={this.getCartItems}/>;
    }
    return (
      <div>
        {!this.state.seenDisclaimer
          ? <Header
            cart={this.state.cart}
            viewSetter={this.setView} />
          : null}
        {component}
      </div>
    );
  }
}
