import React, { Component } from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Row, Container, Col } from 'reactstrap';
import alertify from 'alertifyjs';
import { Route, Switch } from 'react-router';
import NotFound from './NotFound';
import CartList from './CartList';
export default class App extends Component {
  state = { currentCategory: '', products: [], cart: [] };
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category);
    this.getProducts(category.id);
  };

  getProducts = id => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?categoryId=" + id;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ products: data }))
  };
  componentDidMount() {
    this.getProducts();
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " Added to cart!", 4);
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
  }
  render() {
    const CategoryInfo = { title: "Category List" };
    const ProductInfo = { title: "Product List" };

    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs='3'>
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={CategoryInfo} />
            </Col>
            <Col xs='9'>
              <Switch>
                <Route exact path='/' render={props => (
                <ProductList 
                {... props}
                addToCart={this.addToCart} 
                products={this.state.products}
                 currentCategory={this.state.currentCategory} 
                 info={ProductInfo} />
                )} />
                <Route exact path='/cart' render={props => (
                <CartList 
                {... props}
                removeFromCart={this.removeFromCart} 
                cart={this.state.cart}/>
                )} />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
};