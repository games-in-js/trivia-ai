import Button from "./ui/Button";

function GameOverScreen() {
  return (
    <>
      <h2 className="text-2xl font-bold">Game Over!</h2>
      <p>You had 0 incorrect answers</p>
      <Button variant="primary">Try Again</Button>
    </>
  );
}

export default GameOverScreen;
