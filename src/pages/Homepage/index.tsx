import Button from "../../components/Button/index";
import GameResult from "../../components/GameResult/index";
import Input from "../../types/Input";

function Homepage() {
  return (
    <div>
      ss
      <GameResult
        player1={{ name: "asdasd", input: Input["p"] }}
        player2={{ name: "asds", input: Input["p"] }}
        winner={null}
      ></GameResult>
      <Button>Click me</Button>
    </div>
  );
}

export default Homepage;
