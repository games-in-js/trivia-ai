"use server";

import { mockQuestions } from "@/app/questions";
import { Category, Difficulty } from "@/app/types";

export async function getQuestion(category: Category, difficulty: Difficulty) {
  const mockQuestion = mockQuestions[category][difficulty];
  return mockQuestion;
}
