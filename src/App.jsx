import { useState, useEffect} from 'react';
import { Card } from './components/card';
import './styles/App.css'

function App() {

  const [cards, setCards] = useState([])
  const [score, setScore] = useState({score: 0, topScore: 0});
  const [attempt, setAttempt] = useState(0);

  
  //handles first click
  function handleClicked(){
    setScore(prev=>{
      const newScore = prev.score + 1;
      return{
        score: newScore,
        topScore: newScore>prev.topScore ? newScore: prev.topScore
      };
    });
    setAttempt(prev => prev + 1);
    
  }
  //handles  second click on the same card
  function handleSecondClicked(){
    setScore(prev => ({
      score: 0,
      topScore: prev.topScore
    }));
    setAttempt(prev => prev + 1);
  }
  //handel reset
  //handle card shuffle
  function shuffleCards(){
    //get cards and grid
    const grid = document.getElementsByClassName('card-grid');
    const cards = Array.from(document.getElementsByClassName('card'));
    console.log(cards);
    //shuffle positions
    for(let i = cardArray.length -1; i > 0; i--){
      const x = Math.floor(Math.random()*(i+1));
      [cards[i],cards[x]] = [cards[x],cards[i]];
    }
    //append shuffled list to grid
    cards.forEach(card=>{
      grid.appendChild(card);
    });
  }
  useEffect(()=>{
    if(score.score === 0) return;
    console.log(`setting card`);
  },[attempt])
  //generates cards
  const cardArray = []
  function genCards(number){
    
    for(let i = 0; i < number ; i++){
      cardArray.push(null);
    }
    
    return(
      <div className='card-grid'>
        {cardArray.map((pos, index)=>(
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
          <h2>current score:{score.score}</h2>
          <h2>best score:{score.topScore}</h2>
        </div>
      </div>

      {genCards(12)}
       
    </div>
  )
}

export default App
