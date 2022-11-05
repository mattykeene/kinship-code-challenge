import { useContext } from "react";
import { Col } from "react-bootstrap";
import UserContext from "../UserContext";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <Col md={4}>
      <h1>Profile</h1>
      <h2>ID: 876876</h2>
      <h2>Hank Hill</h2>
      <h2>PetSmart</h2>
    </Col>
  );
}
