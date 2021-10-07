import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css";

export const NavBar = ({logo}) => {
    return (
        <header>
                <Navbar className="navbar">
                    <Container>
                    <Navbar.Brand href="#home">{logo}</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link className="navlink" href="#home">Home</Nav.Link>
                    <Nav.Link className="navlink" href="#features">Features</Nav.Link>
                    <Nav.Link className="navlink" href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    </Container>
                    <CartWidget/>
                </Navbar>
        </header>
    )
}
