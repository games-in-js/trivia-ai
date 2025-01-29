import { useState } from "react";
import { CATEGORIES, DIFFICULTIES, GAME_STATE } from "../constants";
import { GameConfig, GameSession } from "../types";

const initialConfig: GameConfig = {
  category: CATEGORIES[0].value,
  difficulty: DIFFICULTIES[0].value,
};

const initialGameSession: GameSession = {
  state: GAME_STATE.SETUP,
};

export function useGameState() {
  const [config, setConfig] = useState<GameConfig>(initialConfig);
  const [gameSession, setGameSession] =
    useState<GameSession>(initialGameSession);

  function updateConfig(newConfig: Partial<GameConfig>) {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  }

  function fetchNewQuestion() {
    setGameSession((prev) => ({ ...prev, state: GAME_STATE.LOADING }));
  }

  return {
    config,
    updateConfig,
    gameState: gameSession.state,
    fetchNewQuestion,
  };
}
