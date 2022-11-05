import { useContext } from "react";
import { Col } from "react-bootstrap";
import UserContext from "../UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <Col md={4}>
      <h2>{user.userid}</h2>
      <h1>{user.firstname}</h1>
      <h2>{user.lastname}</h2>
      <h2>{user.companyname}</h2>
    </Col>
  );
}
