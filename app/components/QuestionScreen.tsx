import { CircleCheck, CircleX } from "lucide-react";
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

      <div className="text-sm text-center">
        <div className="flex items-center justify-center gap-2">
          <CircleCheck className="text-green-500" />
          <span className="text-green-500">1 correct</span>
          <CircleX className="text-red-500" />
          <span className="text-red-500">1 wrong</span>
        </div>
      </div>
    </>
  );
}

export default QuestionScreen;
