import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
export default class CategoryList extends Component {
    state = {
        categoryies: []
    };
    getCategories = () =>{
        fetch("http://localhost:3000/categories")
        .then(res =>res.json())
        .then(data => this.setState({categoryies:data}))
    };
    componentDidMount(){
        this.getCategories();
    };
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {this.state.categoryies.map(category => (
                        <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false} onClick={() => this.props.changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        )
    };
};
