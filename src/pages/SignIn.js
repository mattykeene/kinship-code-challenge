// import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Image} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Navigation from "../components/Navigation";
import UserContext from "../UserContext";

export default function SignIn() {
  const [username, setUsername] = useState("codingchallenge");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const history = useNavigate();
  const buttonRef = useRef(null);
  const SIGN_IN_URL = 'https://secure.petexec.net/api/token';

  useEffect(() => {
    if (user !== null) {
      history('/dashboard');
    }
  }, [history, user]);

  function handleSubmit(event) {
    event.preventDefault();
    buttonRef.current.disabled = true;

    const authorizationValue = 'Basic ' + btoa(process.env.REACT_APP_PETEXEC_CLIENT_ID + ':' + process.env.REACT_APP_PETEXEC_CLIENT_SECRET);

    let formData = new FormData();
    
    formData.append('username', username);
    formData.append('password', password);
    formData.append('grant_type', 'password');
    formData.append('scope', 'owner_read');

    fetch(SIGN_IN_URL, {
      method: "POST",
      headers: { 
        'Authorization': authorizationValue
      },
      body: formData,
    })
    .then(data => data.json())
    .then((data) => {
      setUser({
        email: data.email,
        password: data.password,
        accessToken: data.accessToken
      });
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Navigation />
      <Form onSubmit={handleSubmit} className="mt-5 w-50 mx-auto">
        <Image src="https://secure.petexec.net/images/petExecLogoSmall.jpg" width="125" className="rounded mx-auto d-block" responsive="true" />

        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" required value={username} onChange={(event) => setUsername(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required value={password} onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Button className="mx-auto d-block" variant="success" type="submit" ref={buttonRef}>
          Submit
        </Button>
      </Form>
    </>
  )
}