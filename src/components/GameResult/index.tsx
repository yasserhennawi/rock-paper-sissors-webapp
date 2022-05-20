import React from "react";
import Result from "../../interfaces/Result";
import VerticalSection from "./VerticalSection";
import "./index.css";

const GameResult = ({ result: { player1, player2, winner } }) => {
  return (
    <div className="results-container">
      <div className="results">
        <VerticalSection player={player1} isWinner={player1.code === winner} />
        <VerticalSection player={player2} isWinner={player2.code === winner} />
      </div>
      {!winner && <div>Draw!</div>}
    </div>
  );
};

export default GameResult;
