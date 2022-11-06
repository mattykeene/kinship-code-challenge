import { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import { Button, Col } from "react-bootstrap";
import Card from "./Card";

export default function Cards(props) {
  const { user } = useContext(UserContext);
  const GET_CREDIT_CARDS_URL = `https://secure.petexec.net/api/user-card/owner/${user.userid}`;
  const CREATE_CREDIT_CARD_URL = `https://secure.petexec.net/api/user-card/owner/${user.userid}`;
  const DELETE_CREDIT_CARD_URL = "https://secure.petexec.net/api/user-card/";
  const [creditCards, setCreditCards] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchCreditCards()
  }, [])

  function fetchCreditCards() {
    fetch(GET_CREDIT_CARDS_URL, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${user.accesstoken}`
      }
    }).then(response => response.json())
     .then((response) => {
       setCreditCards(response.cards)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  function deleteCreditCard(usercardid) {
    fetch(DELETE_CREDIT_CARD_URL + usercardid, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${user.accesstoken}`
      }
    })
    .then(
      setCreditCards(creditCards.filter(card => card.usercardid !== usercardid))
    )
    .catch((error) => {
      console.log(error)
    })
  }

  function addTestCard() {
    setLoading(true);
    let formData = new FormData();
    formData.append("cardName", "Test Card");
    formData.append("cardHolder", "Code Challenger");
    formData.append("cardNum", "5555 5555 5555 4444");
    formData.append("expMonth", "07");
    formData.append("expYear", "2027");
    formData.append("billingName", "Code Challenger");
    formData.append("billingAddr1", "123 abc street");
    formData.append("billingAddr2", "apt. 2");
    formData.append("billingCity", "Portland");
    formData.append("billingState", "OR");
    formData.append("billingZip", "97222");

    fetch(CREATE_CREDIT_CARD_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${user.accesstoken}`
      },
      body: formData,
    })
    .then(response => response.json())
    .then((response) => {
      fetchCreditCards()
      setLoading(false);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <Col md={6}>
      { creditCards && creditCards.length > 0 ?
        creditCards.map(card => {
          return (<Card key={card.usercardid} card={card} onDelete={deleteCreditCard} />)
        })
        :
        <h2>No cards currently on file</h2>
        }
      <Button
        variant="success"
        disabled={isLoading}
        onClick={() => addTestCard()}
        className="mt-5 d-flex m-auto"
      >
        {isLoading ? "Loading… This takes a few seconds" : "Add Test Card"}
      </Button>
    </Col>
  );
}
