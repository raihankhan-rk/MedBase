import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function MedNav() {
  return (
    <Navbar bg="light" fixed="top" expand="lg" variant='light'>
      <Container fluid>
        <Navbar.Brand href="#">MedBase</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Logout
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}