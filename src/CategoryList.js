import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
export default class CategoryList extends Component {
    state = {
        categoryies: [
            { categoryId: 1, categoryName: "name" },
            { categoryId: 2, categoryName: "rasim" },
        ],
    };

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {this.state.categoryies.map(category => (
                        <ListGroupItem onClick={() => this.props.changeCategory(category)} key={category.categoryId}>{category.categoryName}</ListGroupItem>
                    ))}
                </ListGroup>
                <h4>{this.props.currentCategory}</h4>
            </div>
        )
    };
};
