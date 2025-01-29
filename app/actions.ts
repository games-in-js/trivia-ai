"use server";

import { mockQuestions } from "@/app/questions";
import { Category, Difficulty, QuestionData } from "@/app/types";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
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
    const completion = await openai.beta.chat.completions.parse({
      model: "gpt-4o-2024-08-06",
      messages: [
        {
          role: "system",
          content:
            "You are a trivia question generator. For each request, generate a completely unique and interesting question. Never repeat questions. Vary the format and style of questions while maintaining the specified difficulty level.",
        },
        {
          role: "user",
          content: `Generate a ${difficulty} trivia question about ${category}. Be specific and avoid generic questions. Include interesting facts or lesser-known information.`,
        },
      ],
      response_format: zodResponseFormat(
        QuestionResponseSchema,
        "question_response"
      ),
    });

    const validatedContent = completion.choices[0].message.parsed;

    if (!validatedContent) {
      throw new Error("No content in OpenAI response");
    }

    return validatedContent;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to generate question via OpenAI");
  }
}
