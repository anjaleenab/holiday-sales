import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeItems = this.placeItems.bind(this);
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
  }
  addToCart(product) {
    var data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    };
    fetch(`/api/cart.php`, data);

  }
  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      // .then(data => console.log(data));
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
  render() {
    var component;
    if (this.state.view.name === 'catalog') {
      component =
        <div>
          <ProductList viewSetter={this.setView} />
        </div>;
    } else if (this.state.view.name === 'cart') {
      component =
        <CartSummary currentStatus={this.state.view.name}
          viewSetter={this.setView}
          cart={this.state.cart}/>;
    } else if (this.state.view.name === 'checkout') {
      component =
        <CheckoutForm viewSetter={this.setView}/>;
    } else {
      component = <ProductDetails viewSetter={this.setView}
        currentProduct={this.state.view.params}
        currentStatus={this.state.view.name}
        addProductToCart={this.addToCart} />;
    }
    return (
      <div>
        <Header
          cart={this.state.cart}
          viewSetter={this.setView} />
        {component}
      </div>
    );
  }
}
