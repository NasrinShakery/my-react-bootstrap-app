import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FiPhoneCall} from 'react-icons/fi';
import {BsShopWindow} from 'react-icons/bs';
import {FaSearch} from 'react-icons/fa';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid >
        <Navbar.Brand href="#">فروشگاه زیبا</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 dir-ltr"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
               صفحه اصلی
               &nbsp;<BsShopWindow/>
               </Nav.Link>
            <Nav.Link href="#action2">
               تماس با ما 
               &nbsp;<FiPhoneCall/>
            </Nav.Link>
            <NavDropdown title="محصولات" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" className='text-align-end' >پوست</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='text-align-end' >
                مو
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className='text-align-end' >
                جدیدترین ها
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
            
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="جست و جو..."
              className="me-2 dir-rtl"
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