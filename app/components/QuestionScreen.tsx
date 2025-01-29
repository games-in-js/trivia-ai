import { CircleCheck, CircleX } from "lucide-react";
import Button from "./ui/Button";
import { QuestionData } from "@/app/types";

type Props = {
  questionData: QuestionData;
};

function QuestionScreen({ questionData }: Props) {
  return (
    <>
      <p className="text-lg text-center">{questionData.question}</p>

      <div className="space-y-3">
        {questionData.answers.map((answer) => (
          <Button key={answer}>{answer}</Button>
        ))}
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
