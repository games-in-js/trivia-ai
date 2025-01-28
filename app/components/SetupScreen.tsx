import Button from "./ui/Button";
import Select from "./ui/Select";

function SetupScreen() {
  return (
    <>
      <Select label="Category">
        <option value="general">general</option>
      </Select>

      <Select label="Difficulty">
        <option value="easy">easy</option>
      </Select>

      <Button variant="primary">Start Game</Button>
    </>
  );
}

export default SetupScreen;
