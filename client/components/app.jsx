import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

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
  getCartItems() {
    fetch(`/api/cart.php`);
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount = {this.state.cart.length}/>
          <ProductList viewSetter={this.setView}/>
        </div>
      );
    } else {
      return (
        <ProductDetails viewSetter={this.setView}
          currentProduct = {this.state.view.params}
          currentStatus = {this.state.view.name}/>
      );
    }
  }
}
