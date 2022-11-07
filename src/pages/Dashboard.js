import { useEffect, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards"
import Profile from "../components/Profile"

export default function Dashboard() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // handle refresh due to context not persisting - ideally this would be held in a session cookie
    if (!user && localStorage.user) {
      const localUser = JSON.parse(localStorage.user)
      setUser(localUser)
    }
  }, [user]);

  return (
    <>
        <Navigation />
        <Container>
        { user ?
          <Row>
            <Profile />
            <Cards />
          </Row>
            : '' }
        </Container>
    </>
  );
}
