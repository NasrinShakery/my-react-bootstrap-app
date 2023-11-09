import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FiPhoneCall} from 'react-icons/fi';
import {BsShopWindow} from 'react-icons/bs';
import {FaSearch} from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <LinkContainer to="/"><Navbar.Brand href="#">Beauty Shop &#128171;</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/Shop"><Nav.Link href=""><BsShopWindow/> Shop</Nav.Link></LinkContainer>
            <LinkContainer to="/ContactUs"><Nav.Link href=""><FiPhoneCall/> Contact Us</Nav.Link></LinkContainer>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Beauty products</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Health Products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                New Products
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Type here . . ."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><FaSearch/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

