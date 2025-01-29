import { AlertCircle } from "lucide-react";
import Button from "./ui/Button";

function ErrorScreen() {
  return (
    <>
      <div className="flex items-center justify-center gap-2 text-red-500">
        <AlertCircle className="w-6" />
        <h2 className="text-xl font-bold">Oops! Something went wrong</h2>
      </div>
      <p>There was an error loading the question.</p>
      <Button variant="primary">Try Again</Button>
    </>
  );
}

export default ErrorScreen;
