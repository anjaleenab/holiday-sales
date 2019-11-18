import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
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
        <React.Fragment>
          <div>
            <button onClick={() => this.props.viewSetter('catalog')}> Back To Catalog </button>
          </div>
          <div>
            <div style={style}>
              <div>{this.state.product[0].Name}{this.state.product[0].Price}{this.state.product[0].ShortDescription}</div>
            </div>
          </div>
          <div> {this.state.product[0].LongDescription}</div>
        </React.Fragment>

      );
    } else {
      return (
        null
      );
    }

  }
}
export default ProductDetails;
