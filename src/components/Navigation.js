import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import UserContext from "../UserContext";

export default function Navigation() {
  const { user, setUser } = useContext(UserContext);

  function logOut() {
    localStorage.removeItem("user")
    setUser(null);
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">PetExec™</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
            {user && <Nav.Link style={{ color: "white" }} href="/" onClick={logOut}>Log Out</Nav.Link> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}