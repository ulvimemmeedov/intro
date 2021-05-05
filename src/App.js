import React, { Component } from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Row, Container, Col } from 'reactstrap';
export default class App extends Component {
  state = {currentCategory:''};
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName})
  };
  render() {
    const CategoryInfo = { title: "Category List" };
    const ProductInfo = { title: "Product List" };

    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs='3'>
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={CategoryInfo} />
            </Col>
            <Col xs='9'>
              <ProductList info={ProductInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
};