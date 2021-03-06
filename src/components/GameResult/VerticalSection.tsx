import React from "react";

const VerticalSection = ({ player, isWinner }) => (
  <div className={`vertical-section ${isWinner && `winner`}`}>
    <h4>{player.name}</h4>
    <h4>{player.input}</h4>
  </div>
);

export default VerticalSection;
