// Creates a magic eight-ball that can be clicked to provide
// answers to your must dire questions.

import EightBall from './EightBall'
import answers from './answers'
import './App.css';

function App() {
  return (
    <>
      <EightBall props={answers}/>     
    </>    
  );
}

export default App;
