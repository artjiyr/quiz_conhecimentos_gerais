// src/context/quiz.tsx
import { createContext, useReducer, ReactNode, Dispatch } from "react";
import { questions, Question } from "../data/questions";

// Etapas do jogo
const STAGES = ["Start", "Playing", "End"] as const;

// Tipagem do estado do quiz
type State = {
  gameStage: typeof STAGES[number];
  questions: Question[];
};

// Tipagem das ações do reducer
type Action = 
  | { type: "CHANGE_STATE" };

// Tipagem do contexto do quiz
type QuizContextType = [State, Dispatch<Action>];

// Estado inicial
const initialState: State = {
  gameStage: STAGES[0],
  questions,
};

// Reducer
const quizReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };
    default:
      return state;
  }
};

// Criação do contexto
export const QuizContext = createContext<QuizContextType | undefined>(undefined);

// Props do Provider
type Props = {
  children: ReactNode;
};

// Provider
export const QuizProvider = ({ children }: Props) => {
  const value = useReducer(quizReducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
