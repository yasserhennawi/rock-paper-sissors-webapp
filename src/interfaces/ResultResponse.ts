import Input from "../types/input";

export default interface ResultResponse {
  success: boolean;
  computer?: Input;
  player?: Input;
  winner?: Input;
  error?: string;
}
