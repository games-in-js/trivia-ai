import { CATEGORIES, DIFFICULTIES } from "../constants";
import { Category, Difficulty } from "../types";
import Button from "./ui/Button";
import Select from "./ui/Select";

type Props = {
  category: Category;
  difficulty: Difficulty;
  onCategoryChange: (category: Category) => void;
  onDifficultyChange: (difficulty: Difficulty) => void;
};

function SetupScreen({
  category,
  difficulty,
  onCategoryChange,
  onDifficultyChange,
}: Props) {
  return (
    <>
      <Select
        label="Category"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value as Category)}
      >
        {CATEGORIES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>

      <Select
        label="Difficulty"
        value={difficulty}
        onChange={(e) => onDifficultyChange(e.target.value as Difficulty)}
      >
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
