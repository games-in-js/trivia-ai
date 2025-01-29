import { Score } from "@/app/types";
import Button from "./ui/Button";

type Props = {
  score: Score;
};

function GameOverScreen({ score }: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold">Game Over!</h2>
      <p>You had {score.wrong} incorrect answers</p>
      <Button variant="primary">Try Again</Button>
    </>
  );
}

export default GameOverScreen;
