import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function CollapsibleExample() {
  return (
    // <Navbar collapseOnSelect expand="lg"  className="bg-body-tertiary">
    <Navbar collapseOnSelect expand="lg"  bg='info'>
      <Container>
        <Navbar.Brand href="#home">KENDRYA VIDYALAYA NO.1 BOKARO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            
            <Navbar.Brand eventKey={2} href="#memes">
             SCIENCE PROJECT CLASS 11/A
            </Navbar.Brand>
            <Nav.Link href="#deets">By- Abhishek Kumar Das</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;