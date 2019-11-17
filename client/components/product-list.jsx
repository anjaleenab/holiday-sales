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
      .then(productsList => this.setState({ products: productsList }));

  }
  componentDidMount() {
    this.getProducts();

  }
  render() {
    return (
      <div className="grid-container">
        {this.state.products.map(item => {
          var itemImage = item['Image'][0];
          var price = item['Price'];
          var id = item['ID'];
          var description = item['ShortDescription'];
          var style = {
            backgroundImage: 'url(' + itemImage + ')',
            width: 200 + 'px',
            height: 200 + 'px',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          };
          return (
            <ProductListItem key={id} items={this.state.products} style={style}
              price={price} description = {description} />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
