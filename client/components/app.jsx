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
      }
    };
    this.setView = this.setView.bind(this);
  }
  setView(name, params) {
    this.setState({
      name: 'details',
      params: { id: 'product.id' }
    });
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header />
          <ProductList viewSetter={this.setView}/>
        </div>
      );
    } else {
      return (
        <ProductDetails />
      );
    }
  }
}
