import React, {useState} from "react"
import './EightBall.css'

// Pass the properties from answers.js
// props => {msg, color}

const EightBall = ({props}) => {

  const [answer, setAnswer] = useState({msg: "Think Of A Question", color: "black"})
  const [guessCount, setGuessCount] = useState(0);

  // Get a random answer from props passed in
    // answer.msg - answer.color
  const getAnswer = () => {
    setAnswer(props[Math.floor(Math.random() * 20)]);
    setGuessCount(guessCount+0.5);
  }

  return (
    // CSS creates an eight ball to use for the exercise

      // On click, getAnswer will get a random answer object
      // to provide a message to the user

      // Color changes the outside of the rim of the ball to
      // the color passed in answer.color

      // answer.msg contains the answer of the eight ball
    <div className="toy">
      <form className="ball" onClick={getAnswer}>
        <div className={answer.color}></div>
        <div className="eight">
          <span>8</span>
        </div>
        
        <div className="answers">
          <input id="affirmative1" type="radio" name="answer" required/>
          <div className="answer up">{answer.msg}</div>
        </div>
        
        <div className="labels">
          <label for="affirmative1"></label>
        </div>
        
      </form>
      <div className="instruction">1. Ask the<br/>ball a question</div>
      <div className="instruction">2. Click on<br/>the ball</div>
      <div className="instruction">3. Read<br/>Answer</div>
      <div className="instruction">4. Repeat</div>
      <div>
        <h2>Guess Count: {guessCount} </h2>
      </div>
    </div>   
  )
}

export default EightBall