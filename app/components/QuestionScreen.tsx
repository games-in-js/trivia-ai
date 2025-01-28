import Button from "./ui/Button";

function QuestionScreen() {
  return (
    <>
      <p className="text-lg text-center">
        Which planet in our solar system has the most moons, boasting an
        impressive 92 discovered so far?
      </p>

      <div className="space-y-3">
        <Button>Mars</Button>
        <Button>Sun</Button>
        <Button>Moon</Button>
        <Button>Venus</Button>
      </div>

      <Button variant="primary">Next Question</Button>
    </>
  );
}

export default QuestionScreen;
