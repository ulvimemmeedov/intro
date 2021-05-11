import React ,{Component}from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends Component {
  constructor(props){
      super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen : false
    }
  }
  toggle(){
      this.setState({
          isOpen : !this.state.isOpen
      });
  }

  render (){
    return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">NorthWind App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
           <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
  };
}

