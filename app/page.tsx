import { Gamepad2 } from "lucide-react";
import Select from "./components/ui/Select";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center text-white p-4">
      <div className="w-full max-w-lg space-y-6 bg-blue-100 py-8 px-6 rounded-lg">
        <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
          <Gamepad2 className="w-10 h-10 text-pink" />
          Trivia Game
        </h1>

        <div className="space-y-6">
          <Select label="Category">
            <option value="general">general</option>
          </Select>

          <Select label="Difficulty">
            <option value="easy">easy</option>
          </Select>

          <Button variant="primary">Start Game</Button>
        </div>
      </div>
    </div>
  );
}
