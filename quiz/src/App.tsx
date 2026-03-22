import { useContext } from "react";
import './App.css';
import Welcome from './components/Welcome';
import Question from "./components/Question";
import { QuizContext } from "./context/quiz";

function App() {
  const context = useContext(QuizContext);
  
  // se context for undefined, retorna null (ou pode mostrar uma mensagem)
  if (!context) return null;

  const [quizState, dispatch] = context;

  return (
    <div className="App">
      <h1>Quiz de Conhecimentos Gerais</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  )
}

export default App;
