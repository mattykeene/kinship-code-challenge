import { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import UserContext from "../UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  debugger
  return (
    <Col md={6}>
      <Card bg="light" className="mt-5">
        <Card.Header>ID: {user.userid}</Card.Header>
        <Card.Body>
          <Card.Title>Welcome: {user.firstname} {user.lastname}</Card.Title>
            <ul>
              <li>Company: {user.companyname}</li>
              <li>Address: {user.addr1}</li>
              <li>City: {user.city	}</li>
              <li>State: {user.state}</li>
              <li>Paw Points: {user.pawpoints}</li>
            </ul>
        </Card.Body>
      </Card>
    </Col>
  );
}
