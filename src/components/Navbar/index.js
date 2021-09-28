import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import './navbar.scss'
import logo from '/logo-transportadora.png'

const Menu = () => {
    return (
        <div>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
  <Container className="nav-bar">
  <Navbar.Brand href="#home">
      <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Transportadora logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#sobre">Sobre</Nav.Link>
      <NavDropdown title="Encomendas" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#encomenda/3.1">O que é uma encomenda</NavDropdown.Item>
        <NavDropdown.Item href="#encomenda/3.2">Como fazemos entregas</NavDropdown.Item>
        <NavDropdown.Item href="#encomenda/3.3">Afins</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#sociais">Redes sociais</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Container>
</Navbar>
        </div>
    )
}

export default Menu
