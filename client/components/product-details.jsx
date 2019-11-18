import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount(id) {
    fetch(`/api/products.php?id={id}`)
      .then(response => response.json())
      .then(productInView => this.setState({ product: productInView }))
      .catch(response => console.error(response));
  }
  render() {

    if (this.state.product) {
      return (
        <div></div>
      );
    } else {
      return (
        null
      );
    // }
    }

  }
}
export default ProductDetails;
