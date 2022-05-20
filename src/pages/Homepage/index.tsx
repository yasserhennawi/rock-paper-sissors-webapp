import Button from "../../components/Button/index";
import GameResult from "../../components/GameResult/index";
import Input from "../../types/Input";
import { baseURL } from "../../api/config";
import "./index.css";
import { useCallback, useState } from "react";
import Result from "../../interfaces/Result";

function Homepage() {
  const [result, setResult] = useState();
  const simulateGame = useCallback(async () => {
    const response = await fetch(`${baseURL}/play`);
    const { computer, computer2, winner } = await response.json();
    const newResult = {
      player1: { name: "Computer 1", input: computer, code: "computer" },
      player2: { name: "Computer 2", input: computer2, code: "computer2" },
      winner,
    };
    setResult(newResult);
  }, []);

  return (
    <div className="homepage">
      {result && <GameResult result={result}></GameResult>}
      <Button onClick={simulateGame}>Simulate a Game</Button>
    </div>
  );
}

export default Homepage;
