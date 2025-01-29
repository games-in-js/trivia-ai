import { CATEGORIES, DIFFICULTIES } from "../constants";
import Button from "./ui/Button";
import Select from "./ui/Select";

function SetupScreen() {
  return (
    <>
      <Select label="Category">
        {CATEGORIES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>

      <Select label="Difficulty">
        {DIFFICULTIES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>

      <Button variant="primary">Start Game</Button>
    </>
  );
}

export default SetupScreen;
