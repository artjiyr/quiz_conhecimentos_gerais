// src/components/Question.tsx
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Question = () => {
  const context = useContext(QuizContext);
  if (!context) return null;

  const [quizState] = context;

  const question = quizState.questions[0]; // pega a primeira questão só para teste

  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.answers.map((a, index) => (
          <li key={index}>{a.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Question;