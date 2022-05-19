import React from "react";
import Result from "../../interfaces/Result";
import VerticalSection from "./VerticalSection";
import "./index.css";

const GameResult = ({ player1, player2, winner }: Result) => {
  return (
    <div className="container">
      <VerticalSection player={player1} isWinner={player1.input === winner} />
      <VerticalSection player={player1} isWinner={player2.input === winner} />
    </div>
  );
};

export default GameResult;
