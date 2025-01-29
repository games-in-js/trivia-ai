import { CATEGORIES, DIFFICULTIES, GAME_STATE } from "./constants";

export type Category = (typeof CATEGORIES)[number]["value"];
export type Difficulty = (typeof DIFFICULTIES)[number]["value"];

export type GameState = (typeof GAME_STATE)[keyof typeof GAME_STATE];

export type GameConfig = {
  category: Category;
  difficulty: Difficulty;
};

export type QuestionData = {
  question: string;
  answers: Array<string>;
  correctAnswer: string;
};

export type Score = {
  correct: number;
  wrong: number;
};

export type GameSession = {
  state: GameState;
  questionData: QuestionData;
  selectedAnswer: string;
  score: Score;
};
