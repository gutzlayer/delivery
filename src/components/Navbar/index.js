import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import './navbar.scss'

const Menu = () => {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand className="nav-bar" href="#">Transportadora</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#sobre">Sobre</Nav.Link>
          <NavDropdown title="Encomendas" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#encomenda">O que é uma encomenda?</NavDropdown.Item>
            <NavDropdown.Item href="#pedido">Onde está meu pedido?</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#outros">Outros</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button className="btn" variant="primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
