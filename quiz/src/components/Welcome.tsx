import { useContext  } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from '../images/undraw_choose_5kz4.svg'

import './Welcome.css'

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
        <h2>Seja bem-vindo!</h2>
        <img src={Quiz} alt="Início do Quiz" />
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
    </div>
  )
}

export default Welcome