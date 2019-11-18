import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  getProducts() {
    fetch('/api/products.php')
      .then(data => data.json())
      .then(productsList => this.setState({ products: productsList }));

  }
  handleClick(productID) {
    // console.log(productID);
  }
  componentDidMount() {
    this.getProducts();

  }
  render() {
    return (
      <div className="grid-container">
        <ProductListItem products={this.state.products} viewSetter = {this.handleClick}/>
      </div>
    );
  }
}

export default ProductList;
