import { useContext, useState } from "react";
import UserContext from "../UserContext";
import { Col } from "react-bootstrap";
import Card from "./Card";

export default function Cards() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Visa",
      number: "****343434"
    },
    {
      id: 2,
      name: "MasterCard",
      number: "****787878"
    }
  ]);
  
  // useEffect(() => {
  //   fetch cards and set state
  // });

  return (
    <Col md={8}>
      { cards.length > 0 ?
        cards.map(card => {
          console.log(card);
          return (<Card key={card.id} card={card} />)
        })
      : <h2>No cards on file</h2> }
    </Col>
  );
}