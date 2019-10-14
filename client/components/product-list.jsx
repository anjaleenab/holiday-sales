import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  getProducts() {
    fetch('/api/products.php')
      .then(data => data.json())
      // .then(response => console.log(response))
      // .then(response => console.log(response[0]['Image'][0]))
      .then(productsList => this.setState({ products: productsList }));

  }
  componentDidMount() {
    this.getProducts();

  }
  render() {
    return <div className="grid-container">
      <ProductListItem items={this.state.products} />
    </div>;
  }
}

export default ProductList;
