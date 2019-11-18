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
        <ProductDetails viewSetter={this.setView}
          currentProduct = {this.state.view.params}
          currentStatus = {this.state.view.name}/>
      );
    }
  }
}
