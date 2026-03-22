import { createContext, useReducer, ReactNode, Dispatch } from "react";
import { questions, Question } from "../data/questions";

// Estágios do quiz
const STAGES = ["Start", "Playing", "End"] as const;

// Tipos do estado
type State = {
  gameStage: typeof STAGES[number]; // "Start" | "Playing" | "End"
  questions: Question[];
};

// Tipos das ações
type Action = { type: "CHANGE_STATE" };

// Estado inicial
const initialState: State = {
  gameStage: "Start",
  questions,
};

// Reducer
const quizReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_STATE":
      return { ...state, gameStage: "Playing" };
    default:
      return state;
  }
};

// Contexto
export const QuizContext = createContext<[State, Dispatch<Action>] | undefined>(undefined);

// Provider
type Props = {
  children: ReactNode;
};

export const QuizProvider = ({ children }: Props) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
