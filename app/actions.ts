"use server";

import { mockQuestions } from "@/app/questions";
import { Category, Difficulty, QuestionData } from "@/app/types";

export async function getQuestion(category: Category, difficulty: Difficulty) {
  const mockQuestion = mockQuestions[category][difficulty];

  return new Promise<QuestionData>((resolve, reject) => {
    return setTimeout(() => {
      // 50% de chance de falhar
      if (Math.random() < 0.5) {
        reject(new Error("failed to generate question"));
        return;
      }

      resolve(mockQuestion);
    }, 500);
  });
}
