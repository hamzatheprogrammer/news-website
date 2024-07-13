import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} exact to={"/"}>Hamza-News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} exact to={"/"}>Home</Nav.Link>
            <Nav.Link as={NavLink} exact to={"/Technews"}>Tech-news</Nav.Link>
            <Nav.Link as={NavLink} exact to={"/iosnews"}>IOS-news</Nav.Link>
            <Nav.Link as={NavLink} exact to={"/nasanews"}>Nasa-news</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;