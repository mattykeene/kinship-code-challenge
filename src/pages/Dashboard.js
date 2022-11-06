import { useEffect, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards"
import Profile from "../components/Profile"

export default function Home() {
  const { user } = useContext(UserContext);
  const history = useNavigate();

  useEffect(() => {
    if (user === null) {
      history("/");
    }
  }, [history, user]);

  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Profile />
          <Cards />
        </Row>
      </Container>
    </>
  );
}
