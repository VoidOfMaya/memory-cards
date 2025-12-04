import { useState, useEffect} from 'react';
import { Card } from './components/card';
import './styles/App.css'

function App() {
  const [score, setScore] = useState({score: 0, topScore: 0});
  const [attempt, setAttempt] = useState(0);
  const[cards, setCards] = useState(genCardStats(12));


  //handles first click
  function handleClicked(id){
      const cardClicked = cards.find(card=>card.id === id);
      if(cardClicked && cardClicked.clicked){
        invalidCard();
        shuffleCards();
      }else{
        validCard(id);
        shuffleCards();
    }
  }
  //handels valid card clicks & updates score
  function validCard(id){
    console.log(` youve clicked a new card`)
    setCards(lastCards =>{
      return lastCards.map(card=> card.id === id ?{...card, clicked: true}: card )
    })
    setScore(prev=>{
      const newScore = prev.score + 1;
      return{
        score: newScore,
        topScore: newScore>prev.topScore ? newScore: prev.topScore
      };
    });    
    setAttempt(prev => prev + 1);     
  }
  //handles  invalid card clicks & resets score
  function invalidCard(){
    console.log(`Oops! youve clicked a card more then once`)
    setScore(prev =>{
      return{
        score: 0,
        topScore: prev.topScore
      }
    });
    setCards(prev =>{
      return prev.map(card =>({...card, clicked: false}))
    });
    setAttempt(perv=>perv+1);
  }
  //handle card shuffle
  function shuffleCards(){
    //get cards and grid
    const grid = document.querySelector('.card-grid');
    const cards = Array.from(document.getElementsByClassName('card'));
    //shuffle positions
    for(let i = cards.length -1; i > 0; i--){
      const x = Math.floor(Math.random()*(i+1));
      [cards[i],cards[x]] = [cards[x],cards[i]];
    }
    //append shuffled list to grid
    cards.forEach(card=>{
      grid.appendChild(card);

    });
  }
  //generates cards
  function genCardStats(number){
    const array= [];
    for(let i = 0 ; i < number ; i++){
      array.push({id: i,clicked: false}); 
      
    }
    return array  
    
  }
  //populate App with cards
  function genCards(){
    //console.log(cards)
    return(
      <div className='card-grid'>
        {cards.map(card=>(
          <Card key={card.id}
                id={card.id}
                onClick={()=>handleClicked(card.id)}
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

      {genCards()}
       
    </div>
  )
}

export default App
