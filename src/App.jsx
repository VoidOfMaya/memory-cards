import { useState, useEffect} from 'react';
import { Card } from './components/card';
import './styles/App.css'

function App() {

  const [score, setScore] = useState(0);
  let bestScore = 0

  function handleClicked(){
    setScore(prev=>prev +1);
  }
  function handleSecondClicked(){
    setScore(0);
  }
  function handleTopScore(){
    if(bestScore < score){
      bestScore = score
    }
    return bestScore
  }
  function genCards(number){
    const array = []
    for(let i = 0; i < number ; i++){
      array.push(null);
    }
    return(
      <div className='card-grid'>
        {array.map((pos, index)=>(
          <Card key={index}
                onClicked={handleClicked} 
                onseSecondClick={handleSecondClicked}
            />
        ))}
      </div>
      
    )
  }
  return (
    <div className='App'>
      <div className='header'>
        <h1 className='title'>card memory Game</h1>
        <h4 className='instruction'>click on any card and memorize it , try not to click on the same card twice and see if you can catch them all </h4>
        <div className='score-tracker'>
          <h2>current score:{score}</h2>
          <h2>best score:{handleTopScore()}</h2>
        </div>
      </div>

      {genCards(12)}
       
    </div>
  )
}

export default App
