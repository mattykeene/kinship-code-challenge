import { React } from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function Card({card}) {
  console.log(card)
  return (
    <Cards key={card.usercardid}
      expiry={`${card.exp_mo} ${card.exp_year.slice(1)}`}
      issuer={card.cardtype}
      preview={true}
      name={card.cardholder}
      number={card.card_num}
    />
  );
};