import Input from "../types/Input";
import Player from "./Player";

export default interface Result {
  player1: Player;
  player2: Player;
  winner: Input | null;
}
