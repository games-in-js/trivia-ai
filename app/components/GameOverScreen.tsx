import { Score } from "@/app/types";
import Button from "./ui/Button";

type Props = {
  score: Score;
  onRestart: () => void;
};

function GameOverScreen({ score, onRestart }: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold">Game Over!</h2>
      <p>You had {score.wrong} incorrect answers</p>
      <Button variant="primary" onClick={onRestart}>
        Try Again
      </Button>
    </>
  );
}

export default GameOverScreen;
