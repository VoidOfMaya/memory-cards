import { useState, useEffect} from 'react';
import { Card } from './components/card';
import './styles/App.css'

function App() {
  const [score, setScore] = useState({score: 0, topScore: 0});
  const [attempt, setAttempt] = useState(0);
  const[cards, setCards] = useState(genCardStats(12));


  //handles first click
  function handleClicked(){
    setScore(prev=>{
      const newScore = prev.score + 1;
      return{
        score: newScore,
        topScore: newScore>prev.topScore ? newScore: prev.topScore
      };
    });
    if(newRound) setNewRound(false);
    setAttempt(prev => prev + 1);
    
    
  }
  //handles  second click on the same card
  function handleSecondClicked(){
    setScore(prev => ({
      score: 0,
      topScore: prev.topScore
    }));
    if(newRound) setNewRound(true);
    setAttempt(prev => prev + 1);
  }
  //handle card shuffle
  function shuffleCards(){
    //get cards and grid
    const grid = document.querySelector('.card-grid');
    const cards = Array.from(document.getElementsByClassName('card'));
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


    shuffleCards();
  },[attempt])
  //generates cards
  function genCardStats(number){
    const array= [];
    for(let i = 0 ; i < number ; i++){
      array.push({id: i,clicked: false});
      return array
    }

  }
  const cardArray = []
  function genCards(number){
    
    for(let i = cards.length; i <= number ; i++){
      cardArray.push(null);
    }
    
    return(
      <div className='card-grid'>
        {cardArray.map((pos, index)=>(
          <Card key={index}
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
