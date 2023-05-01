import Link from 'gatsby-link';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" title="В Пронске - Народный сайт Пронска и Пронского района" style={{
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10
        }}>
          <StaticImage src="../images/герб.png" alt="В Пронске" width={50} style={{ marginLeft: 2 }}/>
          <div style={{
            fontWeight: 'bold'
            }}>В Пронске</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/memorials/">Памятники</Nav.Link>
            <Nav.Link href="/splavy/">Пронские сплавы</Nav.Link>
            {/*<NavDropdown title="Жителям" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
          </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;