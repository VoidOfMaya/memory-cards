import { useState, useEffect} from 'react';
import { Card } from './components/card';
import {memeSearch } from "./Logic/api.js";
import './styles/App.css'

function App() {
  const [score, setScore] = useState(0);
  const [image, setImage] = useState(null);
  const bestScore = 0
  
  //handelling gif load
  useEffect(()=>{
    memeSearch('random').then((photo)=>{
      setImage(photo)
    }); 
  },[])
  function genCards(number){
    const array = []
    for(let i = 0; i < number ; i++){
      array.push(null);
    }
    return(
      <div className='card-grid'>
        {array.map((pos, index)=>(
          <Card key={index} photo={image} />
        ))}
      </div>
      
    )
  }
  return (
    <div className='App'>
      <div className='score-tracker'>
        <h2>current score:{score}</h2>
        <h2>best score:{ bestScore < score? bestScore = score: bestScore}</h2>
      </div>
      <h1>card memory Game</h1>
      {genCards(12)}
       
    </div>
  )
}

export default App
