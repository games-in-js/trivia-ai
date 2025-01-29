import { CircleCheck, CircleX } from "lucide-react";
import Button from "./ui/Button";
import { QuestionData, Score } from "@/app/types";

type Props = {
  questionData: QuestionData;
  selectedAnswer: string;
  score: Score;
  onAnswer: (selectedAnswer: string) => void;
  onNextQuestion: () => void;
};

function QuestionScreen({
  questionData,
  selectedAnswer,
  score,
  onAnswer,
  onNextQuestion,
}: Props) {
  const getAnswerVariant = (answer: string) => {
    if (!selectedAnswer) return "default";
    if (answer === questionData.correctAnswer) return "success";
    if (answer === selectedAnswer) return "error";
    return "default";
  };

  return (
    <>
      <p className="text-lg text-center">{questionData.question}</p>

      <div className="space-y-3">
        {questionData.answers.map((answer) => (
          <Button
            key={answer}
            variant={getAnswerVariant(answer)}
            onClick={() => onAnswer(answer)}
            disabled={selectedAnswer !== ""}
          >
            {answer}
          </Button>
        ))}
      </div>

      {selectedAnswer && (
        <Button variant="primary" onClick={onNextQuestion}>
          Next Question
        </Button>
      )}

      <div className="text-sm text-center">
        <div className="flex items-center justify-center gap-2">
          <CircleCheck className="text-green-500" />
          <span className="text-green-500">{score.correct} correct</span>
          <CircleX className="text-red-500" />
          <span className="text-red-500">{score.wrong} wrong</span>
        </div>
      </div>
    </>
  );
}

export default QuestionScreen;
