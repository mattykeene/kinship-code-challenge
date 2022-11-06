import { useState } from 'react';
import Cards from 'react-credit-cards';
import { Button, Col, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import 'react-credit-cards/es/styles-compiled.css';

export default function Card({ card, onDelete }) {
  const [show, setShow] = useState(false);
  const deleteCreditCard = () => onDelete(card.usercardid)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div key={card.usercardid} className="d-flex flex-row justify-content-center align-items-center mt-5">
      <Row>
        <Col md={10}>
          <Cards
            expiry={`${card.exp_mo} ${card.exp_year.slice(1)}`}
            issuer={card.cardtype}
            preview={true}
            name={card.cardholder}
            number={card.card_num}
            cvc={"123"}
          />
        </Col>
        <Col md={2}>
          <Button variant="danger" onClick={ handleShow }>Delete</Button>
        </Col>
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          Are you sure you'd like to delete credit card: {`${card.card_num}`}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => { deleteCreditCard(card.usercardid); handleClose();}}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
