"use client";

import { Gamepad2 } from "lucide-react";
import Select from "./components/ui/Select";
import Button from "./components/ui/Button";
import SetupScreen from "./components/SetupScreen";
import LoadingScreen from "./components/LoadingScreen";
import QuestionScreen from "./components/QuestionScreen";
import GameOverScreen from "./components/GameOverScreen";
import ErrorScreen from "./components/ErrorScreen";
import { useGameState } from "./hooks/useGameState";

export default function Home() {
  const { config, updateConfig } = useGameState();

  console.log(config);

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center text-white p-4">
      <div className="w-full max-w-lg space-y-6 bg-blue-100 py-8 px-6 rounded-lg">
        <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
          <Gamepad2 className="w-10 h-10 text-pink" />
          Trivia Game
        </h1>

        <div className="space-y-6">
          <SetupScreen
            category={config.category}
            difficulty={config.difficulty}
            onCategoryChange={(category) => updateConfig({ category })}
            onDifficultyChange={(difficulty) => updateConfig({ difficulty })}
          />
          {/* <LoadingScreen /> */}

          {/* <QuestionScreen /> */}

          {/* <GameOverScreen /> */}

          {/* <ErrorScreen /> */}
        </div>
      </div>
    </div>
  );
}
