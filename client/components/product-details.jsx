import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.addCurrentProduct = this.addCurrentProduct.bind(this);
  }
  addCurrentProduct(product) {
    this.props.addProductToCart(this.state.product[0]);
  }
  componentDidMount() {
    fetch(`/api/products.php?id=${this.props.currentProduct.id}`)
      .then(response => response.json())
      .then(productInView => this.setState({ product: productInView }))
      .catch(response => console.error(response));
  }
  render() {
    if (this.state.product) {
      var style = {
        backgroundImage: 'url(' + this.state.product[0].Image[0] + ')',
        width: 400 + 'px',
        height: 400 + 'px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      };
      return (
        <div>
          <div>
            <button
              className="btn btn-sm btn-dark"
              onClick={() => this.props.viewSetter('catalog')}> Back To Catalog </button>
          </div>
          <div className="d-flex flex-row">
            <div style={style}></div>
            <div>
              {this.state.product[0].Name} <br />
              {this.state.product[0].Price}<br />
              {this.state.product[0].ShortDescription}<br />
              <button
                className="btn btn-dark"
                onClick ={this.addCurrentProduct}> Add To Cart
              </button>
            </div>
          </div>
          <div> {this.state.product[0].LongDescription}</div>
        </div>

      );
    } else {
      return (
        null
      );
    }

  }
}
export default ProductDetails;
