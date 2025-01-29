"use server";

import { mockQuestions } from "@/app/questions";
import { Category, Difficulty, QuestionData } from "@/app/types";
import OpenAI from "openai";
import { z } from "zod";

const USE_MOCK = process.env.USE_MOCK === "true";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const QuestionResponseSchema = z
  .object({
    question: z.string(),
    answers: z.array(z.string()),
    correctAnswer: z.string(),
  })
  .refine(
    (data) => {
      return data.answers.length === 4;
    },
    {
      message: "Must have exactly 4 answers",
    }
  )
  .refine(
    (data) => {
      return data.answers.includes(data.correctAnswer);
    },
    {
      message: "Correct answer must be one of the provided answers.",
    }
  );

export async function getQuestion(category: Category, difficulty: Difficulty) {
  if (USE_MOCK) {
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

  // openAI
  try {
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to generate question via OpenAI");
  }
}
