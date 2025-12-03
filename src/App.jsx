import { useState, useEffect} from 'react';
import { Card } from './components/card';
import {memeSearch } from "./Logic/api.js";
import './styles/App.css'

function App() {
  const [score, setScore] = useState(0);
  const [image, setImage] = useState(null);
  
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
    console.log(array)
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
      <h1>card memory Game</h1>
      {genCards(12)}
       
    </div>
  )
}

export default App
