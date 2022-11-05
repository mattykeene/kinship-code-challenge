import { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import { Col } from "react-bootstrap";
import Card from "./Card";

export default function Cards() {
  const { user } = useContext(UserContext);
  const GET_CREDIT_CARDS_URL = `https://secure.petexec.net/api/user-card/owner/${user.userid}`;
  const [creditCards, setCreditCards] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(GET_CREDIT_CARDS_URL, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${user.accesstoken}`
        },
      })
      const parsed = await response.json();
      console.log(parsed);
      setCreditCards(parsed.cards)
    }
    loadData()
  }, [])

  return (
    <Col md={8}>
      { creditCards.length > 0 ?
        creditCards.map(card => {
          console.log(card);
          return (<Card key={card.id} card={card} />)
        })
      : <h2>No creditCards on file</h2> }
    </Col>
  );
}