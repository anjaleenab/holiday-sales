import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import cartSummary from './cart-summary';

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
  }
  setView(location, id) {
    if (id) {
      this.setState({
        view: {
          name: location,
          params: { id: parseInt(id) }
        }
      });
    } else if (location === 'cart') {
      this.setState({
        view: {
          name: location,
          params: {}
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
    fetch(`/api/cart.php`);
  }
  render() {
    return (
      <Header
        cartItemCount={this.state.cart.length}
        viewSetter={this.setView} />

    );,
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <ProductList viewSetter={this.setView}/>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <cartSummary currentStatus={this.state.view.name}/>
      );
    } else {
      return (
        <ProductDetails viewSetter={this.setView}
          currentProduct = {this.state.view.params}
          currentStatus = {this.state.view.name}
          addProductToCart ={this.addToCart}/>
      );
    }
  }
}
