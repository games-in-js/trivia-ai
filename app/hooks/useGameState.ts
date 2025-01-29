import { useState } from "react";
import {
  CATEGORIES,
  DIFFICULTIES,
  GAME_STATE,
  MAX_WRONG_ANSWERS,
} from "../constants";
import { GameConfig, GameSession } from "../types";
import { getQuestion } from "@/app/actions";

const initialConfig: GameConfig = {
  category: CATEGORIES[0].value,
  difficulty: DIFFICULTIES[0].value,
};

const initialGameSession: GameSession = {
  state: GAME_STATE.SETUP,
  questionData: { question: "", answers: [], correctAnswer: "" },
  selectedAnswer: "",
  score: { correct: 0, wrong: 0 },
};

export function useGameState() {
  const [config, setConfig] = useState<GameConfig>(initialConfig);
  const [gameSession, setGameSession] =
    useState<GameSession>(initialGameSession);

  function updateConfig(newConfig: Partial<GameConfig>) {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  }

  async function fetchNewQuestion() {
    setGameSession((prev) => ({ ...prev, state: GAME_STATE.LOADING }));

    try {
      const questionData = await getQuestion(
        config.category,
        config.difficulty
      );

      setGameSession((prev) => ({
        ...prev,
        questionData,
        state: GAME_STATE.PLAYING,
      }));
    } catch {
      setGameSession((prev) => ({ ...prev, state: GAME_STATE.ERROR }));
    }
  }

  function handleAnswer(selectedAnswer: string) {
    const isCorrect = selectedAnswer === gameSession.questionData.correctAnswer;
    const newScore = {
      correct: gameSession.score.correct + (isCorrect ? 1 : 0),
      wrong: gameSession.score.wrong + (!isCorrect ? 1 : 0),
    };

    const isGameOver = newScore.wrong >= MAX_WRONG_ANSWERS;

    setGameSession((prev) => ({
      ...prev,
      selectedAnswer,
      score: newScore,
      state: isGameOver ? GAME_STATE.GAME_OVER : GAME_STATE.PLAYING,
    }));
  }

  return {
    config,
    updateConfig,
    gameState: gameSession.state,
    questionData: gameSession.questionData,
    fetchNewQuestion,
    handleAnswer,
    selectedAnswer: gameSession.selectedAnswer,
    score: gameSession.score,
  };
}
