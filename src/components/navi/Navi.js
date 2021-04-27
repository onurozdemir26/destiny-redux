import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import CartSummary from '../cart/cartSummary'

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" >
        <NavbarBrand href="/">Exfenix</NavbarBrand>
        <NavbarToggler onClick={toggle}  />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar >
            
            <CartSummary  />
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;