import { useState } from "react";
import { CATEGORIES, DIFFICULTIES } from "../constants";
import { GameConfig } from "../types";

const initialConfig: GameConfig = {
  category: CATEGORIES[0].value,
  difficulty: DIFFICULTIES[0].value,
};

export function useGameState() {
  const [config, setConfig] = useState<GameConfig>(initialConfig);

  function updateConfig(newConfig: Partial<GameConfig>) {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  }

  return {
    config,
    updateConfig,
  };
}
