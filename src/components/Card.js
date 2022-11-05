import { React } from "react";

export default function Card({card}) {
  return (
    <div key={card.id}>
      <h1>{card.id}</h1>
      <h3>{card.name}</h3>
      <h3>{card.number}</h3>
      <h4>delete</h4>
    </div>
  );
};