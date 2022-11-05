import { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import UserContext from "../UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  const PROFILE_URL = "https://secure.petexec.net/api/profile";
  const [profileDetails, setProfileDetails] = useState({});

  useEffect(() => {
    async function loadData() {
      const response = await fetch(PROFILE_URL, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${user.accessToken}`
        },
      })
      const parsed = await response.json();
      console.log(parsed);
      setProfileDetails(parsed)
    }
    loadData()
  }, [])

  return (
    <Col md={4}>
      <h2>{profileDetails.userid}</h2>
      <h1>{profileDetails.firstname}</h1>
      <h2>{profileDetails.lastname}</h2>
      <h2>{profileDetails.companyname}</h2>
    </Col>
  );
}
