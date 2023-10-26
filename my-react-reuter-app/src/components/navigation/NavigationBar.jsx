import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">GMC-AppGo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="products">Products</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavigationBar;