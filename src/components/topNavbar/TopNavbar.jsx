import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';


const TopNavbar = () => {

    const cartProducts = useSelector(state => state.cart)
    // const quantity = useSelector(state => state.cart.quantity)
// console.log(cartProducts);
// console.log(quantity);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link to="/" as={Link}>Home</Nav.Link>
          <Nav.Link to="/products" as={Link}>Products</Nav.Link>
        </Nav>

    <Navbar.Toggle/>
    <Navbar.Collapse className='justify-content-end'>
      <Navbar.Text>
      <Nav.Link to= "/cart" as={Link}>Cart {cartProducts.length}</Nav.Link>
      </Navbar.Text>
    </Navbar.Collapse>

      </Container>
    </Navbar>
    </div>
  )
}

export default TopNavbar
