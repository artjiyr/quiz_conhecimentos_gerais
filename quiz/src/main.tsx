import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { QuizProvider } from "./context/quiz";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
