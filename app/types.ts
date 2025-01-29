import { CATEGORIES, DIFFICULTIES } from "./constants";

export type Category = (typeof CATEGORIES)[number]["value"];
export type Difficulty = (typeof DIFFICULTIES)[number]["value"];

export type GameConfig = {
  category: Category;
  difficulty: Difficulty;
};
